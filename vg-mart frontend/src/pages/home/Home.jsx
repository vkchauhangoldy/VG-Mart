
import { useEffect } from "react";
import Slides from "../../components/slide/Slides";
import Testimonial from "../../components/testimonial/Testimonial";
import { useNavigate } from "react-router-dom";
import Groceries from "../../components/collections/groceries/Groceries";
import SunGlasses from "../../components/collections/sun-glasses/SunGlasses";


const Home = () => {
    const navigate = useNavigate()
    const collections = [
        {
            id: "1",
            name: "Men",
            img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            url: "men"
        },
        {
            id: "2",
            name: "Women",
            img: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
            url: "women"
        },
        {
            id: "3",
            name: "Beauty",
            img: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
            url: "beauty"
        },
        {
            id: "4",
            name: "Electronics",
            img: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
            url: "electronics"
        },
    ]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const collectionHandler = (url) => {
        navigate(`${url}`)
    }
    return (
        <div className="page">

            <Slides />
            <div className="container">
                <div className=" row justify-content-center pt-5">
                    <div className="col-lg-6 col-xl-6 text-center">
                        <h3 className="ezy__testimonial1-heading m-3">Our Categories</h3>
                        <p className=" lead ezy__testimonial1-sub-heading mb-0">
                            It’s easier to find your choice of Collections here. Take a look and find the right one for you!
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-evenly pt-5">
                {
                    collections.map((collect) => (
                        <div key={collect.id} className=" mb-3 cursor " style={{ width: "15rem" }}
                            onClick={() => collectionHandler(collect.url)}>
                            <div className="">
                                <img src={collect.img} className="card-img-top" alt="..." height="150px" width="10px" />
                            </div>
                            <div className="card-body text-center mt-2">
                                <h6 className="card-title">{collect.name}</h6>
                            </div>
                        </div>
                    ))
                }
            </div>

            <SunGlasses />
            <Groceries />
            <Testimonial />
        </div>
    )
}

export default Home

