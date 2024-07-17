import React, { useState } from 'react'
import img2 from '../../data/images/img2.jpg'
import Navbar from './Navbar';
import Intro from './Intro';
const Home = () => {

    const [visibility, setvisibility] = useState(1);
    const handleClick = () => {
        setvisibility(2)
    }

    return (
        <div className='text-white relative'>
            <Intro handleClick={handleClick} visibility={visibility}/>
            <Navbar />
            {/* section-1 */}
            <div className={`transition-all duration-500  ${visibility !== 2 ? "opacity-0" : "opacity-100"} `}>
                <div className='relative mx-auto grid grid-cols-2  gap-10 h-[700px] w-11/12 max-w-maxContent items-center text-white justify-center max-auto'>
                    <div className='p-10 overflow-hidden rounded-sm ml-10'>
                        <img src={img2} alt="" width={"400px"} className='rounded-[30%] hover:bg-purple-medium  ' />
                    </div>
                    <div>
                        <p className='text-[20px] text-purple-richPlum font-kaushanScript'>Hello Im Mohit</p>
                        <h1 className='text-[50px] font-bold mb-5'> I'm a Full <span className='text-purple-richPlum'> Stack</span> Developer</h1>
                        <p className='text-[20px] font-bebas-neue  opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex laudantium qui aliquid corporis illum beatae assumenda? Aperiam, temporibus dicta?</p>
                    </div>
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}

export default Home




//     < div className = 'relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center
// text - white justify - between'>
// {/* section1 */ }
// <div
//     onClick={handleClick}
//     className={`flex flex-col absolute top-[300px] font-semibold text-3xl transition-all duration-300 ease-in-out ${visibility !== 1 ? "opacity-0" : "opacity-100"}`} >
//     <div className='flex flex-col  my-2'>
//         <TypeAnimation
//             className='text-caribbeangreen-700 '
//             sequence={["DivDevelopers.", 8000, ""]}
//             repeat={Infinity}
//             cursor={true}
//             style={
//                 {
//                     whiteSpace: "pre-line",
//                     display: "block",
//                 }
//             }
//             omitDeletionAnimation={false}
//         />
//         <div className='text-[10px] text-center justify-self-center mt-5 hover:translate-y-[-10px] transition-transform font-bold duration-500 ease-out text-caribbeangreen-400  tracking-[2px] '>click to start</div>
//     </div>
// </div>
// {/* section2 */ }

// <div className={`relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center
// text-white justify-between  transition-all duration-800 ease-in  ${visibility === 2 ? "opacity-100" : "opacity-0"}`}>
//     <div className=' '>
//         <img src={userImg} alt="" />
//         <div><p>hello</p></div>
//     </div>
// </div>
