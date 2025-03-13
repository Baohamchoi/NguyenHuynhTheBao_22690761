import React from 'react'
import logo from '../images/Lab_01/Group 9.png'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';

function Nav() {
  return (
    <div>
        <nav className='bg-while border-b border-gray-100'>
            <div className='max-w-screen-xl flex flex-wrap justify-start mx-auto p-4'>
              <Link className='flex items-center rtl:space-x-reverse'>
                <img src={logo} alt="" className=''/>
              </Link>
              <div className='relative flex items-center'>
                <FaSearch size={16} className='absolute left-6 text-gray-700'/>
                <input type="text" name="" id="" className='w-80 h-8 rounded-lg bg-gray-100 pl-8 ml-4' placeholder='What would you like to cook?'/>
              </div>
              <div>
                <ul className='flex rtl:space-x-reverse p-4 ml-16 space-x-6'>
                  <li>What to cook</li>
                  <li>Recipes</li>
                  <li>Ingredients</li>
                  <li>Occasions</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div className='flex rtl:space-x-reverse space-x-4 ml-auto items-center'>
                <button className='bg-pink-100 text-pink-400 h-10 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:scale-105 transition-all duration-300'>
                  Login
                </button>
                <button className='bg-pink-500 text-white h-10 px-4 rounded-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300'>
                  Subscribe
                </button>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav