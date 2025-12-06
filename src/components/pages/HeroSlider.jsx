import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import swiper2 from '../../assets/swiper2.jpg'
import swiper1 from '../../assets/swiper1.jpg'
import swiper3 from '../../assets/swiper3.jpg'
import swiper4 from '../../assets/swiper4.jpg'
import swiper5 from '../../assets/swiper5.jpg'


const HeroSlider = () => {

    return (
        <section className="w-full h-[80vh] md:h-[90vh] relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="w-full h-full"
            >
                <SwiperSlide >
                    <div
                        className="relative w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${swiper1})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                                Exchange Your Skills, Expand Your World 🌍
                            </h1>
                            <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
                                Learn from locals — teach what you know.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide >
                    <div
                        className="relative w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${swiper2})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                                Master Music & Art 🎸🎨
                            </h1>
                            <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
                                Join creative sessions with talented people around you.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide >
                    <div
                        className="relative w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${swiper3})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                                Boost Your Tech Skills 💻
                            </h1>
                            <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
                                Get coding help, design mentorship, and digital workshops.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide >
                    <div
                        className="relative w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${swiper4})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                                Find Balance with Yoga 🧘‍♀️
                            </h1>
                            <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
                                Join wellness & fitness sessions guided by local trainers.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide >
                    <div
                        className="relative w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${swiper5})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                                Speak with Confidence 🗣️
                            </h1>
                            <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
                                Practice languages and improve communication skills.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default HeroSlider;


