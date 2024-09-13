
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from "../../assets/slide.jpg";
import img2 from "../../assets/slide0.jpg";
import img3 from "../../assets/slide1.jpg";
import img4 from "../../assets/slide2.jpg";
// import './Slide.css'
const FadeSlide = () => {
    const images = [
        img1,
        img2,
        img3,
        img4
    ];

    return (
        <div>
            <Fade>
                {
                    images.map((image, index) => (
                        <div key={index} className="each-slide">
                            <div>
                                <img src={image} height={450} width="100%" />
                            </div>
                        </div>

                    ))
                }
            </Fade>
        </div>
    );
};

export default FadeSlide;