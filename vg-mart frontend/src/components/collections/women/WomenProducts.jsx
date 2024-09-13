import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../../utils/loader/Loader"
import { useNavigate } from "react-router-dom"
import Button from "../../../utils/button/Button"
import DisplayToast from "../../../utils/toast/DisplayToast"
import { addProduct } from "../../../features/cart/cartSlice"
import { useDispatch } from "react-redux"
import { BASE_URL } from "../../../../config"

const WomenProducts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);

    const [topsDatas, setTopsDatas] = useState([]);
    const [dressesDatas, setDressesDatas] = useState([]);
    const [jeweleryDatas, setJeweleryDatas] = useState([]);
    const [bagsDatas, setBgsDatas] = useState([]);
    const [watchDatas, setWatchDatas] = useState([]);
    const [shoesDatas, setShoesDatas] = useState([]);

    const getAllMensCollections = async () => {
        try {
            const [response1, response2, response3, response4, response5, response6] = await Promise.all([
                axios.get(`${BASE_URL}/category/tops`),
                axios.get(`${BASE_URL}/category/womens-dresses`),
                axios.get(`${BASE_URL}/category/womens-jewellery`),
                axios.get(`${BASE_URL}/category/womens-bags`),
                axios.get(`${BASE_URL}/category/womens-watches`),
                axios.get(`${BASE_URL}/category/womens-shoes`),
            ]);

            setTopsDatas(response1.data?.products)
            setDressesDatas(response2.data?.products)
            setJeweleryDatas(response3.data?.products)
            setBgsDatas(response4.data?.products)
            setWatchDatas(response5.data?.products)
            setShoesDatas(response6.data?.products)
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
    }, [])
    return (
        <div className="">
            {
                isLoading ? <div className="loader"><Loader /></div>
                    : <>
                        <div className="container">
                            <div className=" row justify-content-center pt-5">
                                <div className="col-lg-6 col-xl-8 text-center">
                                    <h3 className="ezy__testimonial1-heading m-3 w-100">{"Women's Collections"}</h3>
                                    <p className=" lead ezy__testimonial1-sub-heading mb-0">
                                        It’s easier to find your choice of Collections here. Take a look and find the right one for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="conatiner">
                            <h4 className=" p-3">{"Women's Tops Collections"}</h4>
                            <div className="products">
                                {
                                    topsDatas?.map((data) => (
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
                            <h4 className=" p-3">{"Women's Dresses Collections"}</h4>
                            <div className="products">
                                {
                                    dressesDatas?.map((data) => (
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
                            <h4 className=" p-3">{"Women's Jewelery Collections"}</h4>
                            <div className="products">
                                {
                                    jeweleryDatas?.map((data) => (
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
                            <h4 className=" p-3">{"Women's Watches Collections"}</h4>
                            <div className="products">
                                {
                                    watchDatas?.map((data) => (
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
                            <h4 className=" p-3">{"Women's Bags Collections"}</h4>
                            <div className="products">
                                {
                                    bagsDatas?.map((data) => (
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
                            <h4 className=" p-3">{"Women's Shoes Collections"}</h4>
                            <div className="products">
                                {
                                    shoesDatas?.map((data) => (
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

export default WomenProducts;
