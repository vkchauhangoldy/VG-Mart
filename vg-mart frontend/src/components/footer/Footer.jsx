
import Button from "../../utils/button/Button";
import "./Footer.css"
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutubeCircular } from "react-icons/ti";
const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-row">
                <div className="footer-col">
                    <h4>Info</h4>
                    <ul className="links">
                        <li>
                            <a href="about">About Us</a>
                        </li>
                        <li>
                            <a href="contact">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Customers</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul className="links">
                        <li>
                            <a href="/men">{"Men's Collections"}</a>
                        </li>
                        <li>
                            <a href="/women">{"Women's Collections"}</a>
                        </li>
                        <li>
                            <a href="/home-livings">Home & Livings</a>
                        </li>
                        <li>
                            <a href="/beauty">Beauty</a>
                        </li>
                        <li>
                            <a href="/electronics">Electronics</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul className="links">
                        <li>
                            <a href="terms-conditions">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="privacy-policy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">GDPR</a>
                        </li>
                        <li>
                            <a href="#">Security</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <p>
                        Subscribe to our newsletter for a weekly dose of news, updates, helpful
                        tips, and exclusive offers.
                    </p>
                    <form action="/#">
                        <input type="text" placeholder="Your email" required="" />
                        <Button type={" button"} label={"SUBSCRIBE"} bgcolor={"#e03131"} />
                    </form>
                    <div className="icons">
                        <TiSocialFacebook />
                        <TiSocialTwitter />
                        <TiSocialYoutubeCircular />
                        <TiSocialLinkedin />
                    </div>
                </div>
            </div>
            <div className="p-1 text-center">
                <p className="text-white">© Copyright 2024, All rights reserved. | VG-Mart</p>
            </div>
        </section>

    )
}
export default Footer;