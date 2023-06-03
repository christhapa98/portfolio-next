import { bio } from "@/constants/about";
import { Carousel } from "react-responsive-carousel";

function About() {
    return (
        <div id="about" className="flex items-center justify-center h-screen p-40 bg-gradient-to-r from-red-500 to-pink-500">
            <div className="w-full p-5 transition-all bg-white shadow max-w-7xl rounded-xl">
                <div className="flex items-center gap-12 p-8 ">
                    <div className="w-1/2 mt-4 md:mt-0">
                        <p className="text-lg text-justify">{bio}
                        </p>
                    </div>
                    <div className="w-1/2">
                        <Carousel className="h-[60VH]" showThumbs={false} infiniteLoop={true} autoPlay={true} >
                            <img src="./me.jpg" className="object-cover object-bottom rounded-xl h-[55vh]" />
                            <img src="./me.jpg" className="object-cover object-bottom rounded-xl h-[55vh]" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
