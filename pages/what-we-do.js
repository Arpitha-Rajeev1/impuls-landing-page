import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function what() {
  return (
    <section className="text-white body-font relative">

      <section className="bg-[#0D0823] px-5 py-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="title-font sm:text-[48px] text-3xl mb-4 font-[800] leading-[3rem] text-white">What Impuls can do?</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Choose from our different survey templates that will capture the ideal insights for you.</p>
        </div>
      </section>

      <section className='hidden md:block bg-[#FAF9FF]'>
        <div className="flex md:flex-row flex-col flex-wrap justify-center items-center px-[5rem] lg:px-[12rem]">
          <div className="mt-[-8rem] py-4 w-1/4 md:w-1/4 xl:w-1/4">
            <div className="border-r-2 bg-white border-black px-4 py-6 rounded-tl-lg rounded-bl-lg">
              <Image className='m-auto' src={'/101.svg'} width={100} height={100} alt='101' />
              <h2 className="text-center title-font font-bold py-5 text-[1.1rem] text-[#6C52E3]">Customer Satisfaction</h2>
            </div>
          </div>
          <div className="mt-[-8rem] py-4 w-1/4 md:w-1/4 xl:w-1/4">
            <div className="border-r-2 bg-white border-black px-4 py-6">
              <Image className='m-auto' src={'/101.svg'} width={100} height={100} alt='101' />
              <h2 className="text-center title-font font-bold py-5 text-[1.1rem] text-[#6C52E3]">Net Promoter Score</h2>
            </div>
          </div>
          <div className="mt-[-8rem] py-4 w-1/4 md:w-1/4 xl:w-1/4">
            <div className="border-r-2 bg-white border-black px-4 py-6">
              <Image className='m-auto' src={'/101.svg'} width={100} height={100} alt='101' />
              <h2 className="text-center title-font font-bold py-5 text-[1.1rem] text-[#6C52E3]">Customer Effort Score</h2>
            </div>
          </div>
          <div className="mt-[-8rem] py-4 w-1/4 md:w-1/4 xl:w-1/4">
            <div className="bg-white border-black px-4 py-6 rounded-tr-lg rounded-br-lg">
              <Image className='m-auto' src={'/101.svg'} width={100} height={100} alt='101' />
              <h2 className="text-center title-font font-bold py-5 text-[1.1rem] text-[#6C52E3]">Brand Perception</h2>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#FAF9FF]'>
        <div className="flex flex-wrap py-[5rem] px-[5rem] lg:px-[12rem]">
          <div className="lg:w-[100%]">
            <div className="bg-gray-100 rounded-lg">
              <Image className='m-auto' src={'/1.svg'} width={1200} height={1000} alt='101' />
              <h3 className="px-5 py-5 text-black text-xl font-[700]">Customer Satisfaction</h3>
              <div className='flex pb-[3rem] justify-between sm:flex-row flex-col px-5'>
                <p className="leading-relaxed text-black">Learn how satisfied your customers are with your organization, and understand how you can provide the best for them.</p>
                <button className="inline-flex items-center w-fit m-auto bg-transparent border-2 sm:mx-3 border-black text-black py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0">Inquire</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap py-[5rem] px-[5rem] lg:px-[12rem]">
          <div className="lg:w-[100%]">
            <div className="bg-gray-100 rounded-lg">
              <Image className='m-auto' src={'/1.svg'} width={1200} height={1000} alt='101' />
              <h3 className="px-5 py-5 text-black text-xl font-[700]">Net Promoter Score</h3>
              <div className='flex pb-[3rem] justify-between sm:flex-row flex-col px-5'>
                <p className="leading-relaxed text-black">Determine how willing your customers are in promoting you to others, and find means to improve on it.</p>
                <button className="inline-flex items-center w-fit m-auto bg-transparent border-2 mx-3 border-black text-black py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0">Inquire</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap py-[5rem] px-[5rem] lg:px-[12rem]">
          <div className="lg:w-[100%]">
            <div className="bg-gray-100 rounded-lg">
              <Image className='m-auto' src={'/1.svg'} width={1200} height={1000} alt='101' />
              <h3 className="px-5 py-5 text-black text-xl font-[700]">Customer Effort Score</h3>
              <div className='flex pb-[3rem] justify-between sm:flex-row flex-col px-5'>
                <p className="leading-relaxed text-black">Understand how easy it is for your customers to interact with your brand and create ways on how to improve on it.</p>
                <button className="inline-flex items-center w-fit m-auto bg-transparent border-2 mx-3 border-black text-black py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0">Inquire</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap py-[5rem] px-[5rem] lg:px-[12rem]">
          <div className="lg:w-[100%]">
            <div className="bg-gray-100 rounded-lg">
              <Image className='m-auto' src={'/1.svg'} width={1200} height={1000} alt='101' />
              <h3 className="px-5 py-5 text-black text-xl font-[700]">Brand Perception</h3>
              <div className='flex pb-[3rem] justify-between sm:flex-row flex-col px-5'>
                <p className="leading-relaxed text-black">Find out how likely customers are willing to choose you over the competition and create meaningful changes based on market shifts.</p>
                <button className="inline-flex items-center w-fit m-auto bg-transparent border-2 mx-3 border-black text-black py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0">Inquire</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative text-white px-2 py-5 lg:px-[4rem] bg-[#FAF9FF] body-font flex justify-center">
        <Image className="sm:hidden object-cover object-center rounded" alt="hero" src="/ctam.svg" width={1000} height={1000} />
        <Image className="hidden sm:block object-cover object-center rounded" alt="hero" src="/cta.png" width={1000} height={1000} />
        <div className="hidden lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 sm:flex flex-col absolute sm:right-[-50px] sm:top-[80px] sm:text-right md:items-start mb-16 md:mb-0 items-center">
          <h1 className="title-font sm:text-[48px] text-3xl mb-4 font-[800] leading-[3rem] text-white text-right">Get started for <span className='text-[#FFA551]'>free</span>
            <br className="hidden lg:inline-block" /> today
          </h1>
          <p className="mb-8 leading-relaxed lg:w-3/5 text-right">Start your free account now by signing up with our Freemium plan.</p>
          <div className="text-right sm:w-[60%]">
            <button className="inline-flex text-white bg-black border-0 py-2 px-3 lg:px-6 focus:outline-none rounded lg:text-sm">Register now</button>
          </div>
        </div>
      </section>

    </section>
  )
}

export default what