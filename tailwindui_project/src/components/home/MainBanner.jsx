import SSlider from "../common/SSlider";

const MainBanner = () => {
    const slidesContent = [
        {
            title: "title 1",
            img: "/logo512.png"
        }, {
            title: "title 2",
            img: "/logo512.png"
        }, {
            title: "title 3",
            img: "/logo512.png"
        }
    ];

    return (
        <section className="block mb-4 pb-6">
            <SSlider slides={1} dots={true}>
                {slidesContent.map((slide, index) => (
                    <div key={index} className="!flex">
                        <h3>{slide.title}</h3>
                        <img src={slide.img} width={'140px'} />
                    </div>
                ))}
            </SSlider>
        </section>
    );
}
export default MainBanner;



