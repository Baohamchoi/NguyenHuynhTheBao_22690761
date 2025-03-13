import React, { useEffect } from 'react'
import { useState } from 'react'
import {FaArrowRight} from 'react-icons/fa'
import background from '../../images/Lab_01/Image 73.png'
import avtMini from '../../images/Lab_04/avatar.png'
import ModalIntroduce from '../../components/ModalIntroduce'

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        setIsModalOpen(true);
    }, []) 

    return (
        <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='h-screen'>
            <ModalIntroduce isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          <div className='relative h-full flex items-center justify-start'>
            <div className='w-60 bg-amber-400 h-10 rounded-md text-base flex items-center justify-center absolute transform -translate-y-52 left-45 z-1'>
              Recipe of the day
            </div>
            <div className='w-1/4 h-6/12 bg-white border border-dotted border-purple-800 absolute top-1/2 left-28 transform -translate-y-1/2 z-0 flex flex-col items-center'>
              <h2 className='text-pink-500 font-bold text-xl mt-20'>Salad Caprese</h2>
              <div className='flex items-center justify-center'>
                <p className='text-center'>
                  Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, 
                  and balsamic vinegar create a refreshing dish for lunch or appetizer.
                </p>
              </div>
              <div className='flex flex-col items-center justify-center mt-12'>
                <img src={avtMini} alt="" />
                <h3 className='mt-2 mb-8'>Salad Caprese</h3>
                <button className='bg-pink-500 text-white p-3 rounded-xl flex items-center rtl:space-x-reverse hover:bg-pink-600 hover:scale-105 transition-all duration-300'>View now <FaArrowRight size={20} color='white' className='ml-4'/></button>
              </div>
            </div>
          </div>
        </div>
      )
}

export default HomePage