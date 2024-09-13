/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Loader from "../../../utils/loader/Loader";
import { useNavigate } from "react-router-dom";
import Button from "../../../utils/button/Button";
import { addProduct } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import DisplayToast from "../../../utils/toast/DisplayToast";
import { BASE_URL } from "../../../../config";

const SunGlasses = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMenShirt();
        window.scrollTo(0, 0)
    }, [])

    const [sunGlasses, setSunGlasses] = useState([])
    const fetchMenShirt = async () => {
        try {
            const response = await fetch(`${BASE_URL}/category/sunglasses`);
            const data = await response.json();
            setSunGlasses(data.products);
        } catch (error) {
            console.error("Error fetching product:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const productDetailsHandler = (id, data) => {
        navigate(`../product/${id}?category=${data.category}&title=${data.title}`)
    }

    return (
        <>
            {
                isLoading ? <div className="loader"><Loader /></div>
                    : <>
                        <h3 className="pt-5 px-4">Sun Glasses</h3>
                        <div className="products">
                            {
                                sunGlasses.map((data) => (
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
                    </>
            }
        </>
    )
}

export default SunGlasses;
