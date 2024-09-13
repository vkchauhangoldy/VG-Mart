import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../../utils/loader/Loader"
import { useNavigate } from "react-router-dom"
import Button from "../../../utils/button/Button"
import DisplayToast from "../../../utils/toast/DisplayToast"
import { addProduct } from "../../../features/cart/cartSlice"
import { useDispatch } from "react-redux"
import { BASE_URL } from "../../../../config"
// import StarRatings from "react-star-ratings"

const ElectronicsProducts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const [mobileDatas, setMobileDatas] = useState([]);
    const [tabletsDatas, setTabletsDatas] = useState([]);
    const [laptopDatas, setLaptopDatas] = useState([]);
    console.log(mobileDatas)
    const getAllMensCollections = async () => {
        try {
            const [response1, response2, response3] = await Promise.all([
                axios.get(`${BASE_URL}/category/smartphones`),
                axios.get(`${BASE_URL}/category/tablets`),
                axios.get(`${BASE_URL}/category/laptops`)
            ]);

            setMobileDatas(response1.data?.products)
            setTabletsDatas(response2.data?.products)
            setLaptopDatas(response3.data?.products)
        } catch (error) {
            console.error("Error fetching product:", error.message);
        } finally {
            setIsLoading(false)
        }
    }
    const productDetailsHandler = (id, data) => {
        navigate(`../product/${id}?category=${data.category}&title=${data.title}`)
    }
    useEffect(() => {
        getAllMensCollections()
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="">
            {
                isLoading ? <div className="loader"><Loader /></div>
                    : <>
                        <div className="container">
                            <div className=" row justify-content-center pt-5">
                                <div className="col-lg-6 col-xl-8 text-center">
                                    <h3 className="ezy__testimonial1-heading m-3">{"Gadgets Collections"}</h3>
                                    <p className=" lead ezy__testimonial1-sub-heading mb-0">
                                        It’s easier to find your choice of Collections here. Take a look and find the right one for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="conatiner">
                            <h4 className=" p-3">{"Mobiles Collections"}</h4>
                            <div className="products">
                                {
                                    mobileDatas?.map((data) => (
                                        <div key={data.id} className="card mb-3" style={{ width: "18rem" }}>
                                            <div onClick={() => productDetailsHandler(data.id, data)} className="cursor">
                                                <img src={data.thumbnail} className="card-img-top" alt="..." height="200px" />
                                            </div>
                                            {/* <StarRatings
                                                rating={2.403}
                                                starDimension="10px"
                                                starSpacing="1px"
                                            /> */}
                                            <div className="card-body">
                                                <h6 className="card-title">{data.title.slice(0, 20)}</h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between p-2">
                                                <h6 className="card-title">Price: ${data.price}</h6>
                                                <Button label={"Add to Cart"} onClick={() => dispatch(addProduct(data))} />
                                            </div>

                                            <DisplayToast />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="conatiner">
                            <h4 className=" p-3">{"Tablets Collections"}</h4>
                            <div className="products">
                                {
                                    tabletsDatas?.map((data) => (
                                        <div key={data.id} className="card mb-3" style={{ width: "18rem" }}>
                                            <div onClick={() => productDetailsHandler(data.id, data)} className="cursor">
                                                <img src={data.thumbnail} className="card-img-top" alt="..." height="200px" />
                                            </div>
                                            <div className="card-body">
                                                <h6 className="card-title">{data.title.slice(0, 20)}</h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between p-2">
                                                <h6 className="card-title">Price: ${data.price}</h6>
                                                <Button label={"Add to Cart"} onClick={() => dispatch(addProduct(data))} />
                                            </div>
                                            <DisplayToast />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="conatiner">
                            <h4 className=" p-3">{"Labtops Collections"}</h4>
                            <div className="products">
                                {
                                    laptopDatas?.map((data) => (
                                        <div key={data.id} className="card mb-3" style={{ width: "18rem" }}>
                                            <div onClick={() => productDetailsHandler(data.id, data)} className="cursor">
                                                <img src={data.thumbnail} className="card-img-top" alt="..." height="200px" />
                                            </div>
                                            <div className="card-body">
                                                <h6 className="card-title">{data.title.slice(0, 20)}</h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between p-2">
                                                <h6 className="card-title">Price: ${data.price}</h6>
                                                <Button label={"Add to Cart"} onClick={() => dispatch(addProduct(data))} />
                                            </div>
                                            <DisplayToast />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default ElectronicsProducts;
