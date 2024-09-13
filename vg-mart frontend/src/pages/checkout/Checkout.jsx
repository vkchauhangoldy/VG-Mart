import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import Button from "../../utils/button/Button"
import states from "../../state.json"
const Checkout = () => {
    const cartItem = useSelector((data) => data.cart?.cart);
    const totalAmount = useSelector((data) => data.cart?.total);
    let discount = 10;
    const [stateVal, setStateVal] = useState("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //select state and cites
    const chnageStateHandler = (e) => {
        setStateVal(e.target.value);
        let cities = states.filter((state) => state.key === e.target.value)
        setCities(cities[0].cities);
    }

    return (
        <div className="container page">
            <h2 className="m-4 display-5 text-center">Checkout Here</h2>
            <div className="row">
                <div className="col-md-5 order-md-2 mb-3">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>

                    <ul className="list-group mb-3">
                        {
                            cartItem.map((item) => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <small className="my-0">{item.title.slice(0, 20)}</small>
                                    </div>
                                    <small className="">${item.price}</small>
                                </li>
                            ))
                        }
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${totalAmount?.toFixed(2)}</strong>
                        </li>

                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">-${discount}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <h6>Payable (USD)</h6>
                            <strong>${(totalAmount - discount)?.toFixed(2)}</strong>
                        </li>
                    </ul>
                    <form className="card p-2">
                        <div className="input-group gap-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Promo code"
                            />
                            <div className="input-group-append">
                                <Button label={"Reddem"} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-7 order-md-1 p-3">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate="">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name<sup className="text-danger">*</sup></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder=""

                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"

                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone Number
                            </label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fa fa-phone color" />

                                </span>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fa fa-envelope color" />
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    defaultValue=""
                                    required=""
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address1<sup className="text-danger">*</sup></label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address2">
                                Address 2 <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="address2"
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="country">State<sup className="text-danger">*</sup></label>
                                <select
                                    value={stateVal}
                                    onChange={chnageStateHandler}
                                    className="
                                     w-100 form-control"
                                    id="state"
                                >
                                    <option value="">Select State</option>
                                    {
                                        states?.map((state) => (
                                            <option key={state.key} value={state.key}>{state.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="state">City<sup className="text-danger">*</sup></label>
                                <select
                                    className=" form-control
                                     w-100"
                                    id="city"
                                >
                                    <option value="">Select City</option>
                                    {
                                        cities?.sort()?.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="zip">Zip <sup className="text-danger">*</sup></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="zip"
                                    placeholder=""

                                />
                                <div className="invalid-feedback">Zip code required.</div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="same-address"
                            />
                            <label className="custom-control-label" htmlFor="same-address">
                                Shipping address is the same as my billing address
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="save-info"
                            />
                            <label className="custom-control-label" htmlFor="save-info">
                                Save this information for next time
                            </label>
                        </div>
                        <hr className="mb-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-flex align-items-center gap-5 my-3">
                            <div className="custom-control custom-radio">
                                <input
                                    id="credit"
                                    name="paymentMethod"
                                    type="radio"
                                    className="custom-control-input"
                                    defaultChecked=""

                                />
                                <label className="custom-control-label" htmlFor="credit">
                                    Credit card
                                </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input
                                    id="debit"
                                    name="paymentMethod"
                                    type="radio"
                                    className="custom-control-input"

                                />
                                <label className="custom-control-label" htmlFor="debit">
                                    Debit card
                                </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input
                                    id="paypal"
                                    name="paymentMethod"
                                    type="radio"
                                    className="custom-control-input"

                                />
                                <label className="custom-control-label" htmlFor="paypal">
                                    PayPal
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-number">Card number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-number"
                                    placeholder=""

                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-name">Name on card</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-name"
                                    placeholder=""

                                />
                                <small className="text-muted">Full name as displayed on card</small>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">Expiration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-expiration"
                                    placeholder=""

                                />

                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-cvv">CVV</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cc-cvv"
                                    placeholder=""

                                />
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <Button label={"Proceed to pay"} type={"button"} width={"100%"} />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Checkout
