
import img1 from "../../assets/slide.jpg"
import { useEffect } from "react"
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="page">
            <section className="py-3 py-md-5 py-xl-3">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="display-5 text-center">About Us</h2>
                            <p className="text-secondary mb-5 text-center lead fs-4">
                                We believe in the power of teamwork and collaboration. Our diverse
                                experts work tirelessly to deliver all types of collections, electronic gadgets,jewelery and much more...
                            </p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6">
                            <img
                                className="img-fluid rounded border border-dark"
                                loading="lazy"
                                src={img1}
                                alt="About Us"
                            />
                        </div>
                        <div className="col-12 col-lg-6 col-xxl-6">
                            <div className="row justify-content-lg-end">
                                <div className="col-12 col-lg-11">
                                    <div className="about-wrapper">
                                        <p className="lead mb-4 mb-md-5">
                                            As a socially responsible entity, we are deeply committed to
                                            positively impacting the communities we serve and the world at
                                            large. Through various initiatives and partnerships, we
                                            actively contribute to environmental sustainability, social
                                            welfare, and educational advancement.
                                        </p>
                                        <div className="row gy-4 mb-4 mb-md-5">
                                            <div className="col-12 col-md-6">
                                                <div className="card border border-dark">
                                                    <div className="card-body p-4">
                                                        <h3 className="display-5 fw-bold color text-center mb-2">
                                                            370+
                                                        </h3>
                                                        <p className="fw-bold text-center m-0">
                                                            Qualified Experts
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="card border border-dark">
                                                    <div className="card-body p-4">
                                                        <h3 className="display-5 fw-bold color text-center mb-2">
                                                            18k+
                                                        </h3>
                                                        <p className="fw-bold text-center m-0">
                                                            Satisfied Customers
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default About
