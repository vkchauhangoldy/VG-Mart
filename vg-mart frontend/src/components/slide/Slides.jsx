
import { Slide } from 'react-slideshow-image';
import img1 from "../../assets/slide.jpg"
import img2 from "../../assets/slide0.jpg"
import img3 from "../../assets/slide1.jpg"
import img4 from "../../assets/slide2.jpg"
const Slides = () => {
    const images = [
        img2,
        img1,
        img3,
        img4
    ]

    return (
        <Slide>{
            images.map((image, index) => (
                <div key={index} className="each-slide-effect">
                    <img src={image} alt="slide" height={450} width="100%" />
                </div>
            ))
        }
        </Slide>
    );
};

export default Slides;