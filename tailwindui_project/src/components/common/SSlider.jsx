import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SSlider = ({ children, slides = 1, infinite = true, dots = true, autoplay = false, speed = 500 }) => {
    const settings = {
        dots: dots,
        infinite: infinite,
        speed: speed,
        slidesToShow: slides,
        slidesToScroll: slides,
        autoplay: autoplay,
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
}
export default SSlider;
