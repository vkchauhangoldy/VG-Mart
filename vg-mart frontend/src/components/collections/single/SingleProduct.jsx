
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Loader from "../../../utils/loader/Loader"
import { useParams } from "react-router-dom"
import DisplayToast from "../../../utils/toast/DisplayToast"
import Button from "../../../utils/button/Button"
import { addProduct } from "../../../features/cart/cartSlice"
import { BASE_URL } from "../../../../config"

const SingleProduct = () => {
    const params = useParams();
    const [product, setProduct] = useState("");
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${BASE_URL}/${params.id}`);
                const data = await response.json();
                setProduct(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
        window.scrollTo(0, 0)
    }, [params.id]);
    return (
        <div className="container page p-5">
            {
                isLoading ? <div className="loader"><Loader /></div> :

                    <div className="row">
                        <div className="col-md-6  p-3 ">
                            <img src={product?.thumbnail} alt={product.title} height="300px" width={300} />
                        </div>
                        <div className="col-md-6">
                            <h4>{product?.title}</h4>
                            <p className="lead"><strong>Description:</strong> {product.description?.slice(0, 300)}</p>
                            <p className="lead"><strong>Category:</strong> {product.category}</p>
                            <p className="lead"><strong>Price:</strong> ${product.price}</p>
                            <Button label={"Add to Cart"} onClick={() => dispatch(addProduct(product))} />
                        </div>
                        <DisplayToast />
                    </div>
            }
        </div>
    )
}

export default SingleProduct;
