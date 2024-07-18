/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import img from "./../assets/header1.png"
import logo from "../assets/log.png"
import ReactPlayer from "react-player";
import Headerpulse from './Headerpuls';
const Header: React.FC = () => {
    const [isImageVisible, setIsImageVisible] = useState(true);

    const handleHideImage = (hide: any) => {
        setIsImageVisible(!hide);
    };
    return (
        <div className='mx-auto lg:px-0 px-4 max-w-[1240px]'>
            <div className='flex justify-between items-center gap-10'>
                <img className='md:w-[151px] md:scale-100  md:h-[60px] w-[120px]' src={logo} alt="" />
                <div>
                    <button className='md:py-4 md:px-6 border md:w-[161px] w-[120px] text-[14px] md:h-[67px] h-[50px]  rounded-[16px] flex justify-center items-center opensans font-[400] text-white md:text-[20px]'>Book a Call</button>
                </div>
            </div>
            <div className=' mx-auto  max-w-[1240px] flex justify-center items-center flex-col'>

                <div className="relative mt-[120px] md:mt-[174px]">
                    <div className='flex justify-center flex-col items-center z-20'>
                        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#25AAE1] poppins font-bold lg:text-[96px] md:text-[64px] text-[32px] leading-[35px]  flex justify-center items-center lg:leading-[96px] md:leading-[64px] text-center lg:w-[1153px] '>GET YOUR FIRST SHORTS VIDEO FREE</h1>
                        <p className='opensans mt-[34px] font-[600] text-[14px] leading-[16px] md:text-[16px] lg:text-[20px] text-[#D9D9D9] md:leading-[25.6px] px-2'>There are numbers of video editing agencies out there but we stand out for a reason. </p>
                        <div className='flex flex-wrap gap-2 mt-[59px]'>
                            <button className='py-4 px-6 border bg-[#FFFFFF] rounded-[16px] flex justify-center items-center opensans font-[700] md:text-[20px] text-[#03070D] shadow text-[12px]'>Book a Call</button>
                            <button className='py-4 px-6 border  rounded-[16px] flex justify-center items-center opensans font-[700] text-[12px] text-white md:text-[20px]'>See Our Works</button>
                        </div>
                    </div>
                    <div className='bg-[#82C8E5] lg:w-[325px] md:w-[220px] h-[780px] -z-10 absolute -top-40 lg:left-[38%] md:left-[32%] filter blur-[95px] bg-opacity-75 '  >
                    </div>


                </div>
                <div className='md:mt-[102px] mt-[80px] '>
                    <div className=" rounded-xl overflow-hidden   lg:scale-100 scale-95   z-40   lg:w-[993px] lg:h-[562px]    md:h-[400px] w-full mx-auto h-[210px] relative ">
                        {isImageVisible && (
                            <>
                                <img src={img} className="lg:w-[993px] lg:h-[562px]" />
                                <div className="absolute  lg:top-[38%] md:top-[30%] top-[20%] md:h-[80px] md:w-[80px] h-[40px] w-[40px] img-fluid md:left-[39%] lg:left-[44%] left-[30%]">
                                    <Headerpulse
                                        link={'https://youtu.be/isR_XyP9Mfw?si=vw048NX1Cs5xS5Qo'}
                                        onHideImage={handleHideImage}
                                    />
                                </div>
                            </>
                        )}

                        <div className=" lg:w-[993px] lg:h-[562px] md:w-[720px] md:h-[400px]  rounded-xl bg-black  h-[205px] mx-auto overflow-hidden ">
                            {!isImageVisible && (
                                <div className=" lg:w-[1220px] lg:h-[690px] md:w-[720px] md:h-[400px] w-[320px] h-[205px] flex justify-center items-center mx-auto  ">
                                    <ReactPlayer
                                        url={"https://youtu.be/isR_XyP9Mfw?si=vw048NX1Cs5xS5Qo"}
                                        playing
                                        height={"100%"}
                                        width={"100%"}
                                        controls
                                        className=" lg:w-[1220px] lg:h-[690px] md:w-[720px] md:h-[400px] w-[350px] h-[200px]"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;