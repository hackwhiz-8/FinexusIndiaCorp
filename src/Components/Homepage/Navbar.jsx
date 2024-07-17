import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex flex-row justify-between bg-black p-5 mx-auto'>
                {/* logo */}
                <p className='mx-5 font-bebas-neue font-bold text-purple-medium text-[20px]'>FinexusIndiaCorp</p>
                {/* <img src="" alt="" /> */}
                {/* links */}
                <div className='mx-[100px]'>
                   <ul className='flex gap-5 hover:text-purple-richPlum font-bebas-neue '>
                    <li >Home</li>
                    <li >Projects</li>
                    <li >Services</li>
                    <li >ContactMe</li>
                   </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
