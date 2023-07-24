import React, {useState, useEffect} from 'react'
import navLogo from '../assets/Logo.svg'
import Hamburger from 'hamburger-react'
import { BiSolidHome, BiHistory, BiSolidBookContent, BiSolidInfoCircle} from 'react-icons/bi'

const navbar = () => {

    const navigation = [
        {
            id: 1,
            name: 'Beranda',
            link: '/',
            icon: <BiSolidHome size={24} />
          
        },
        {
            id: 2,
            name: 'Sejarah',
            link: '/sejarah',
            icon: <BiHistory size={24} />
            
          
        },
        {
            id: 3,
            name: 'Blog',
            link: '/blog',
            icon: <BiSolidBookContent size={24} />
          
        },
        {
            id: 4,
            name: 'Tentang Kami',
            link: '/about',
            icon: <BiSolidInfoCircle size={24} />
          
        }
    ]

    const [isOpen, setOpen] = useState(false)
    
    window.onscroll = () => {
        const header = document.querySelector("nav");
        const fixedNav = header.offsetTop;
    
        if (window.pageYOffset > fixedNav) {
          header.classList.add("navbar-fixed");
        } else {
          header.classList.remove("navbar-fixed");
        }
      };
    

  return (
    <nav className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className="container">
            <div className='flex items-center justify-between relative '>
                <div className=''>
                    <a className='flex items-center gap-4 py-6' href=''>
                        <img src={navLogo} alt="navlogo" />
                        <span className='text-xl font-bold text-primary tracking-widest'>SportIns</span>
                    </a>
                </div>
                <div className='flex items-center lg:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    <div>
                        <ul className={isOpen ? 'absolute right-2 top-full w-full max-w-[250px] rounded-lg bg-secondary py-5 shadow-lg duration-500 ease-in-out': 'fixed left-[-100%] duration-500 ease-in-out'}>
                            {navigation.map((items) => (
                                <li key={items.id} className='flex flex-row items-center'>
                                    <a className='gap-4 font-semibold mx-8 flex py-2 text-base hover:cursor-pointer text-textColor hover:text-primary duration-200 transition' href={items.link}>
                                    {items.icon}
                                    {items.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='hidden lg:flex items-center'>
                    <ul className='flex items-center space-x-10'>
                        {navigation.map((items) => (
                            <li key={items.id}>
                                <a className='font-semibold text-sm text-textColor hover:text-primary duration-200 transition' href={items.link}>{items.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default navbar