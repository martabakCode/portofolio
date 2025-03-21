import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div className="">
                            <div className="">
                                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Hello, Welcome to my web porto</h1>
                            </div>
                            <div className="">
                                <div className=" py-4 font-sans text-Snow pb-4 text-xs h-20 lg:h-auto">
                                    <span>{"<"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                        {">"} <span className="text-Snow sm:text-xl xl:text-2xl font-bold "> I am a  <span className="inline-block">
                                            <Typewriter
                                                options={{
                                                    strings:
                                                        ['Fullstack Web Developer',
                                                            'Cloud Enthusiast', 'Former GDSC Lead'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                        </span> {"</"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-52 h-52 relative hidden md:block">
                            <img className='absolute top-8 w-full h-full' src="images/emoji.png" alt="emoji" />
                        </div>
                    </div>
                </div>
            </div>
        </BannerLayout>
    )
}

export default Banner