import React from 'react'
import HeaderData from './HeaderData.json'

const Navbar = () => {
    return (
        <div>
            {/* Header Top */}
            <div className='bg-black text-white py-3 px-10 flex flex-row md:justify-between justify-center'>

                <div className='hidden md:block'>
                    <ul className='flex flex-row text-2xl'>
                        <li className='mx-3'><a href="https://www.facebook.com/riddhidisplaypvtltd"><i class="fa-brands fa-facebook"></i></a></li>
                        <li className='mx-3'><a href="https://twitter.com/riddhidisplay"><i class="fa-brands fa-twitter"></i></a></li>
                        <li className='mx-3'><a href="https://www.instagram.com/riddhidisplay/"><i class="fa-brands fa-instagram"></i></a></li>
                        <li className='mx-3'><a href="https://www.linkedin.com/in/riddhidisplay/"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>

                <div className=''>
                    <ul className='flex md:flex-row flex-col md:mx-5  '>
                        <li className='mx-3 text-center'><a href="tel:+91 9825072799"><i class="fa-solid fa-phone"></i> +91 9825072799</a></li>
                        <li className='mx-3 text-center'><a href="mailto:info@riddhidisplay.com"><i class="fa-regular fa-envelope"></i> info@riddhidisplay.com</a></li>

                    </ul>

                </div>
            </div>


            {/* Header Bottom */}
            <nav className="flex md:flex-row flex-col shadow-xl justify-between overflow-hidden md:py-2  md:px-14">
                <div className='flex flex-row justify-between md:px-2 px-5 py-3'>
                    <img src="https://www.riddhidisplay.com/wp-content/uploads/2021/04/logo.png" alt="Logo" />

                    <div className='py-4 text-3xl md:hidden block'>
                        <i class="fa-solid fa-bars"></i>
                    </div>

                </div>

                <div className='menu'>
                    <ul className='md:flex md:flex-row flex-col md:text-center font-semibold text-lg text-center md:py-7 py-10'>
                        {HeaderData.map(nav => {
                            return (
                                <li className='md:px-5 md:py-1 py-2'>
                                    <a href={nav.link}>{nav.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar