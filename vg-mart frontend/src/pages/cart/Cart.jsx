import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import DisplayToast from "../../utils/toast/DisplayToast";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../../utils/button/Button";
import { useEffect } from "react";
const Cart = () => {
    const cartItem = useSelector((data) => data.cart?.cart);
    const totalPrice = useSelector((data) => data.cart?.total);

    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const productDetailsHandler = (id, data) => {
        navigate(`../product/${id}?category=${data.category}&title=${data.title}`)
    }
    const checkOutHandler = () => {
        navigate(`../checkout`)
    }
    return (
        <>
            <div className="page d-flex flex-column gap-3 p-3 cart-page">
                {
                    cartItem.length > 0 ?
                        cartItem.map((product) => (
                            <div key={product.id} className="cart-items">
                                <div onClick={() => productDetailsHandler(product.id, product)} className="cursor">
                                    <img src={product.thumbnail} className="card-img-top" alt="..." height="30px" />

                                </div>
                                <h6 onClick={() => productDetailsHandler(product.id, product)} className="card-title cursor">{product.title.slice(0, 20)}</h6>

                                <h6 className="card-title text-right">$ {product.price}</h6>
                                <p>{product.quantity}</p>

                                <div className="text-danger cursor" onClick={() => dispatch(removeProduct(product))}>
                                    <FaRegTrashAlt />
                                </div>
                            </div>
                        )) : <span className="text-center">No items in cart</span>
                }
                {cartItem.length > 0 ?
                    <div className="cart-total">
                        <div>
                            <h4>Total Amount:</h4>
                            <h5>$ {totalPrice?.toFixed(2)}</h5>
                        </div>
                        <div>
                            <Button label={"Procced to checkout"} onClick={checkOutHandler} />
                        </div>
                    </div> : ""}
                <DisplayToast />
            </div>
        </>
    )
}

export default Cart
