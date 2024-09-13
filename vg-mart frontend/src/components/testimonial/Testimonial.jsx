
import './Testimonial.css'
const Testimonial = () => {
    const customers = [
        {
            name: "Shreyanka Patil",
            image: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae",
            city: "Hyderabad,Telangana"
        },
        {
            name: "Ritu Jha",
            image: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae",
            city: "Noida Sector-62"
        },
        {
            name: "Arjun Beniwal",
            image: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae",
            city: "Haldwani,Uttrakhand"
        },

    ]

    return (
        <div>
            <section className="ezy__testimonial1 light">
                <div className="container">
                    <div className="row justify-content-center mb-md-4">
                        <div className="col-lg-6 col-xl-5 text-center">
                            <h2 className="ezy__testimonial1-heading mb-3">Customer Reviews</h2>
                            <p className=" lead ezy__testimonial1-sub-heading mb-0">
                                It’s easier to reach your savings goals when you have the right
                                savings account. Take a look and find the right one for you!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            customers.map((customer, index) => (
                                <div key={index} className="col-md-6 col-lg-4 mt-4">
                                    <div className="ezy__testimonial1-item px-4 py-4">
                                        <div className="ezy__testimonial1-content mt-3">
                                            <p className="mb-4 ezy__testimonial1-rating">
                                                <span className="fas fa-star active" />
                                                <span className="fas fa-star active" />
                                                <span className="fas fa-star active" />
                                                <span className="fas fa-star-half-alt active" />
                                                <span className="fas fa-star" />
                                            </p>
                                            <p className="opacity-50 mb-4">
                                                {customer.review}
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <img
                                                        src={customer.image}
                                                        alt=""
                                                        className="img-fluid rounded-circle border"
                                                        width={47}
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="mb-0 fs-5">{customer.name}</h4>
                                                    <p className="mb-0 small">
                                                        <i>{customer.city}</i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimonial
