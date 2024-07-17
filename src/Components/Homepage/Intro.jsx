import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const Intro = (props) => {
    return (
        <div className='relative'>
            <div
                onClick={props.handleClick}
                className={`flex flex-col  absolute  bg-black  h-[700px] w-full z-10 justify-center items-center  font-semibold text-3xl transition-all duration-300 ease-in-out ${props.visibility !== 1 ? "opacity-0" : "opacity-100"}`} >
                <div className=' w-[500px] text-[30px] text-purple-richPlum text-center px-24 py-5 '>
                    <TypeAnimation

                        sequence={["Finexus India Corp .", 8000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace: "pre-line",
                                display: "block",
                            }
                        }
                        omitDeletionAnimation={false}
                    />
                    <div className='text-[10px] text-center justify-self-center m-5 p-5 hover:translate-y-[-10px] transition-transform font-bold duration-500 ease-out text-white   tracking-[2px] '>click to start</div>
                </div>

            </div>
        </div>
    )
}

export default Intro
