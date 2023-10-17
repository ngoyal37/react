import SSlider from "../common/SSlider";
import Typed from 'react-typed';

const MainBanner = () => {
    const slidesContent = [
        {
            title: "My first slide",
            img: 'hand.jpg'
        }, {
            title: "My 2nd slide",
            img: `blue.jpg`
        }
    ];

    const bgImage = (src) => ({
        backgroundImage: 'url(/images/' + src + ')'
    })

    const bgImageClass = (src) => {
        return ('bg-[url(`/images/' + src + '`)]');
    }

    return (
        <section className="block mb-4 pb-6">
            <SSlider slides={1} dots={true} autoplay={true}>
                {slidesContent.map((slide, index) => (
                    <>
                        <div key={index} className='flex items-center justify-center bg-cover min-h-[380px]' style={bgImage(slide.img)}>
                            {/* <div className={`${bgImageClass(slide.img)}`}></div> */}
                            <h3 className='capitalize text-6xl font-bold text-white drop-shadow-xl'>
                                <Typed
                                    strings={[slide.title, slide.title]}
                                    typeSpeed={140}
                                    loop={true} />
                            </h3>
                        </div>
                    </>
                ))}
            </SSlider>
        </section >
    );
}
export default MainBanner;



