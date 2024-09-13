import img1 from "../../assets/slide0.jpg"
import Button from "../../utils/button/Button"
const Contact = () => {
    return (
        <div className="page">
            <section className="bg-light py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="display-5 text-center">Contact Us</h2>
                            <p className="text-secondary mb-5 text-center lead fs-4">
                                We believe in the power of teamwork and collaboration. Our diverse
                                experts work tirelessly to deliver all types of collections, electronic gadgets,jewelery and much more...
                            </p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-xl-center">
                        <div className="col-12 col-lg-6">
                            <img
                                className="img-fluid"
                                loading=""
                                src={img1}
                                alt="Get in Touch"
                            />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-11">
                                    <div className="bg-white border rounded shadow-sm overflow-hidden">
                                        <form action="#!">
                                            <div className="row gy-xl-3 gy-3 p-3">
                                                <div className="col-12">
                                                    <label htmlFor="fullname" className="form-label">
                                                        Full Name <span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="fullname"
                                                        name="fullname"
                                                        defaultValue=""
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6">
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
                                                <div className="col-12 col-md-6">
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
                                                <div className="col-12">
                                                    <label htmlFor="message" className="form-label">
                                                        Message <span className="text-danger">*</span>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="message"
                                                        name="message"
                                                        rows={3}
                                                        required=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <Button type="button" label="Contact Us" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
