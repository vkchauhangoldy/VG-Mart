/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Loader from "../../../utils/loader/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../utils/button/Button";
import { addProduct } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import DisplayToast from "../../../utils/toast/DisplayToast";
import HomeLivingProducts from "./HomeLivingProducts";
import { BASE_URL } from "../../../../config";

const HomeLivings = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    let query = new URLSearchParams(location.search);
    query = query.get('category');

    useEffect(() => {
        fetchMenShirt();
        window.scrollTo(0, 0)
    }, [query])

    const [menCollections, setMenCollections] = useState([])

    let url;
    if (query && query == "furniture") {
        url = `${BASE_URL}/category/furniture`
    }
    else if (query && query == "home-decoration") {
        url = `${BASE_URL}/category/home-decoration`
    }
    else if (query && query == "kitchen-accessories") {
        url = `${BASE_URL}/category/kitchen-accessories`
    }

    const fetchMenShirt = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMenCollections(data.products);
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
        <div className="page">
            {query ?
                <>
                    {
                        isLoading ? <div className="loader"><Loader /></div>
                            : <>
                                <div className="d-flex flex-wrap justify-content-between p-3">
                                    <h4 className="text-center">{query.toUpperCase()}</h4>
                                </div>
                                <div className="products">
                                    {
                                        menCollections.map((data) => (
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
                </> : <HomeLivingProducts />
            }
        </div>
    )
}

export default HomeLivings;


