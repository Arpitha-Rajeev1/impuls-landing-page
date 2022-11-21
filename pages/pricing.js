import Image from 'next/image'
import React, { useState } from 'react'

function pricing() {

  const [basic, setbasic] = useState(true)
  const [premium, setpremium] = useState(false)

  return (
    <section className="text-white body-font relative">
      <section className="bg-[#0D0823] px-5 py-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="title-font sm:text-[48px] text-3xl mb-4 font-[800] leading-[3rem] text-white">Get started now, <br /> pick your plan later</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Check what plan best suits your business needs. <br /> <u>Start your free account</u> now by signing up with our Freemium plan</p>
          <p className="pt-5"><u>See pricing below</u></p>
          <div className='py-3 m-auto'>
            <Image className="object-cover object-center rounded" alt="hero" src="/arrow.svg" width={15} height={15} />
          </div>
        </div>
        <div className='flex border-2 border-white rounded-md w-fit m-auto bg-white p-1'>
          <button onClick={() => { setbasic(true); setpremium(false) }} className="inline-flex items-center w-fit m-auto bg-transparent border-0 sm:mx-3 text-black py-[0.5rem] px-[2.8rem] focus:outline-none rounded text-base mt-4 md:mt-0" style={{ background: basic ? '#6C52E3' : 'none', color: basic ? 'white' : 'black' }}>Basic plans</button>
          <button onClick={() => { setbasic(false); setpremium(true) }} className="inline-flex items-center w-fit m-auto bg-transparent border-0 sm:mx-3 py-[0.5rem] px-[2.8rem] text-black focus:outline-none rounded text-base mt-4 md:mt-0" style={{ background: premium ? '#6C52E3' : 'none', color: premium ? 'white' : 'black' }}>Premium plans</button>
        </div>
      </section>

      <section className='bg-[#FAF9FF]'>
        <div className="flex md:flex-row flex-col flex-wrap justify-center items-center">
          <div className="p-4 lg:w-1/3 md:w-2/5 xl:w-1/4 pt-5 mt-[-5rem]">
            <div className="border-2 bg-white border-white px-4 py-6 rounded-lg">
              <h2 className="text-transparent text-center text-4xl bg-clip-text bg-gradient-to-r from-[#6C52E3] to-[#E84D96] font-bold py-5 text-[1.2rem] text-gray-900">Freemium</h2>
              <h1 className='text-black text-center text-2xl'><span className='font-bold'>$$$ / </span>Month</h1>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>1 survey only</p>
              </div>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>Templated survey builder</p>
              </div>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>up to 100 responses only</p>
              </div>
              <div className='flex border-2 border-white rounded-md w-fit m-auto bg-white p-1 pt-[3rem]'>
                <button className="inline-flex items-center w-fit m-auto border-0 sm:mx-3 py-[0.5rem] px-[1.4rem] lg:px-[1.8rem] bg-[#6C52E3] text-white focus:outline-none rounded mt-4 md:mt-0 text-xl">Get started for free</button>
              </div>
              <p className='text-center text-black pt-5'><u>See detailed inclusions below</u></p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-2/5 xl:w-1/4 pt-5 mt-5 md:mt-[-5rem]">
            <div className="border-2 bg-white border-white px-4 py-6 rounded-lg">
              <h2 className="text-transparent text-center text-4xl bg-clip-text bg-gradient-to-r from-[#6C52E3] to-[#E84D96] font-bold py-5 text-[1.2rem] text-gray-900">Light</h2>
              <h1 className='text-black text-center text-2xl'><span className='font-bold'>$$$ / </span>Month</h1>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>3 surveys only</p>
              </div>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>Templated survey builder</p>
              </div>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>up to 500 responses only</p>
              </div>
              <div className='flex border-2 border-white rounded-md w-fit m-auto bg-white p-1 pt-[3rem]'>
                <button className="inline-flex items-center w-fit m-auto border-0 sm:mx-3 py-[0.5rem] px-[2.8rem] bg-[#6C52E3] text-white focus:outline-none rounded mt-4 md:mt-0 text-xl">Choose plan</button>
              </div>
              <p className='text-center text-black pt-5'><u>See detailed inclusions below</u></p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-2/5 xl:w-1/4 pt-5 mt-5 lg:mt-[-5rem]">
            <div className="border-2 bg-white border-white px-4 py-6 rounded-lg">
              <h2 className="text-transparent text-center text-4xl bg-clip-text bg-gradient-to-r from-[#6C52E3] to-[#E84D96] font-bold py-5 text-[1.2rem] text-gray-900">Growth</h2>
              <h1 className='text-black text-center text-2xl'><span className='font-bold'>$$$ / </span>Month</h1>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>5 surveys only</p>
              </div>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>Custom survey builder</p>
              </div>
              <div className="flex px-5 pt-[1.4rem]">
                <img src="/tick.svg" className='mr-5' width={25} alt="" />
                <p className='text-black text-xl'>up to 1000 responses only</p>
              </div>
              <div className='flex border-2 border-white rounded-md w-fit m-auto bg-white p-1 pt-[3rem]'>
                <button className="inline-flex items-center w-fit m-auto border-0 sm:mx-3 py-[0.5rem] px-[2.8rem] bg-[#6C52E3] text-white focus:outline-none rounded mt-4 md:mt-0 text-xl">Choose plan</button>
              </div>
              <p className='text-center text-black pt-5'><u>See detailed inclusions below</u></p>
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

      <section className="hidden md:block px-2 pb-5 lg:px-[4rem] bg-[#FAF9FF]">
        <div className="text-center">
          <h1 className="sm:text-[48px] text-3xl mb-4 font-[800] leading-[3rem] text-black text-center">Detailed pricing overview</h1>
          <div className="flex md:flex-row flex-col flex-wrap justify-center items-center">

            <div className="p-4 w-1/4 md:w-1/5 pt-5">
              <div className="border-2 bg-white border-white px-4 py-6 rounded-lg">
                <h2 className="text-transparent text-center lg:text-3xl xl:text-4xl bg-clip-text bg-gradient-to-r from-[#6C52E3] to-[#E84D96] font-bold py-5 text-[1.2rem] text-gray-900">Freemium</h2>
                <div className='flex border-2 border-white rounded-md w-fit m-auto bg-white p-1'>
                  <button className="inline-flex items-center w-fit m-auto border-0 sm:mx-2 py-[0.5rem] lg:px-[1rem] xl:px-[2.5rem] bg-[#6C52E3] text-white focus:outline-none rounded mt-4 md:mt-0 text-xl">Choose plan</button>
                </div>
              </div>
            </div>
            <div className="p-4 w-1/4 md:w-1/5 pt-5">
              <div className="border-2 bg-white border-white px-4 py-6 rounded-lg">
                <h2 className="text-transparent text-center lg:text-3xl xl:text-4xl bg-clip-text bg-gradient-to-r from-[#6C52E3] to-[#E84D96] font-bold py-5 text-[1.2rem] text-gray-900">Light</h2>
                <div className='flex border-2 border-white rounded-md w-fit m-auto bg-white p-1'>
                  <button className="inline-flex items-center w-fit m-auto border-0 sm:mx-2 py-[0.5rem] lg:px-[1rem] xl:px-[2.5rem] bg-[#6C52E3] text-white focus:outline-none rounded mt-4 md:mt-0 text-xl">Choose plan</button>
                </div>
              </div>
            </div>
            <div className="p-4 w-1/4 md:w-1/5 pt-5">
              <div className="border-2 bg-white border-white px-4 py-6 rounded-lg">
                <h2 className="text-transparent text-center lg:text-3xl xl:text-4xl bg-clip-text bg-gradient-to-r from-[#6C52E3] to-[#E84D96] font-bold py-5 text-[1.2rem] text-gray-900">Growth</h2>
                <div className='flex border-2 border-white rounded-md w-fit m-auto bg-white p-1'>
                  <button className="inline-flex items-center w-fit m-auto border-0 sm:mx-2 py-[0.5rem] lg:px-[1rem] xl:px-[2.5rem] bg-[#6C52E3] text-white focus:outline-none rounded mt-4 md:mt-0 text-xl">Choose plan</button>
                </div>
              </div>
            </div>
          </div>

          <section className="text-black bg-white body-font mr-[18rem] mt-[-2rem] my-5">
            <div className="px-5">
              <div className="xl:w-[110%] md:w-[150%] lg:w-[122%] bg-white 2xl:w-[95%] mx-auto overflow-auto">
                <table className="table-auto w-full whitespace-no-wrap">
                  <tbody>
                    <tr>
                      <td className="py-3 w-[25%]">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Survey</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="px-4 py-3 w-[25%] text-center">Able to create a survey <span className='font-bold'>once (1)</span></td>
                      <td className="px-4 py-3 w-[25%] text-center">Able to create a survey <span className='font-bold'>thrice (3)</span></td>
                      <td className="px-4 py-3 w-[25%] text-center text-gray-900">Able to create a survey <span className='font-bold'>5</span> times</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Survey builder</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">Template</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">Template</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900">Custom</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Responses per survey</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">up to 100</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">up to 500</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900">up to 1000</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Language forms</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">1 only</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">5 only</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900">10 only</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Directory</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">None</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">None</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900">-</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Workflows</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">None</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">None</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900">Intermidiate</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Distribution channels</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">Link <br /> QR</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">Link <br /> QR</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900">Link<br />  QR<br />  Email</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Data</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">Export all data fields and types</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">Export all data fields and types</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900">Export all data fields and types</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Analysis</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3"><span className='font-bold'>Basic</span> <br /> <br /> Tables <br /> Basic Statistics <br /> Basic Computations</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3"><span className='font-bold'>Basic</span> <br /> <br /> Tables <br /> Basic Statistics <br /> Basic Computations</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900"><span className='font-bold'>Intermediate
                      </span> <br /> <br /> Tables <br /> Basic Statistics <br /> Basic Computations <br /> Hypothesis Testing <br /> (Correlation, T, ANOVA, Chi-square, + non-parametric counterparts) </td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Visualizations</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3"><span className='font-bold'>Basic</span> <br /> <br /> Pie Chart <br /> Bar Chart <br /> Histogram <br /> Line Graph</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3"><span className='font-bold'>Basic</span> <br /> <br /> Pie Chart <br /> Bar Chart <br /> Histogram <br /> Line Graph</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3"><span className='font-bold'>Basic</span> <br /> <br /> Pie Chart <br /> Bar Chart <br /> Histogram <br /> Line Graph</td>
                    </tr>
                    <tr className='border-t-2'>
                      <td className="w-[25%] border-gray-200 py-3">
                        <div className="flex justify-between">
                          <p className='font-bold text-left'>Dashboard</p>
                          <img src="/info.svg" alt="" />
                        </div>
                      </td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">None</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3">None</td>
                      <td className="w-[25%] text-center border-gray-200 px-4 py-3text-gray-900">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}

export default pricing