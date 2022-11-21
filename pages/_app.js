import Link from 'next/link'
import '../styles/globals.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {

  let win;
  if (typeof window !== 'undefined') {
    win = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
  }

  const [home, sethome] = useState(false)
  const [what, setwhat] = useState(false)
  const [faq, setfaq] = useState(false)
  const [price, setprice] = useState(false)
  const [contact, setcontact] = useState(false)
  const [show, setshow] = useState(false)

  useEffect(() => {
    if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1) === 'what-we-do') {
      setwhat(true)
      setfaq(false)
      setprice(false)
      setcontact(false)
      sethome(false)
    }
    else if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1) === 'faqs') {
      setfaq(true)
      setwhat(false)
      setprice(false)
      setcontact(false)
      sethome(false)
    }
    else if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1) === 'pricing') {
      setprice(true)
      setfaq(false)
      setwhat(false)
      setcontact(false)
      sethome(false)
    }
    else if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1) === 'contact') {
      setcontact(true)
      setfaq(false)
      setprice(false)
      setwhat(false)
      sethome(false)
    }
    else {
      sethome(true)
      setfaq(false)
      setprice(false)
      setcontact(false)
      setwhat(false)
    }
  }, [win])

  return <>
    <header className="text-white body-font bg-[#0D0823] px-2 lg:px-[4rem] w-[100%]">
      <div className="mx-auto flex flex-wrap p-5 justify-evenly md:flex-row items-center">

        <button onClick={() => setshow(!show)} className="sm:hidden flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={'/ham.svg'} width={20} height={20} alt='logo' />
        </button>
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={'/logo.svg'} width={120} height={120} alt='logo' />
        </a>
        <Link href={'https://dev.impuls.cx/'} className='block sm:hidden'><button className="inline-flex bg-transparent border-white focus:outline-none text-[1.2rem] rounded"><u>Login</u></button></Link>

        <nav className="hidden md:ml-auto md:mr-auto sm:flex md:flex-1 md:flex-wrap items-center text-base justify-evenly">
          <Link href={'/'} className="mx-3 lg:mx-5" style={{ color: home ? '#6C52E3' : 'white' }}>Home</Link>
          <Link href={'/what-we-do'} className="mx-3 lg:mx-5" style={{ color: what ? '#6C52E3' : 'white' }}>What we do</Link>
          <Link href={'/faqs'} className="mx-3 lg:mx-5" style={{ color: faq ? '#6C52E3' : 'white' }}>FAQs</Link>
          <Link href={'/pricing'} className="mx-3 lg:mx-5" style={{ color: price ? '#6C52E3' : 'white' }}>Pricing</Link>
          <Link href={'/contact'} className="mx-3 lg:mx-5" style={{ color: contact ? '#6C52E3' : 'white' }}>Contact</Link>
        </nav>

        <Link href={'https://dev.impuls.cx/'} className='hidden sm:block'><button className="inline-flex items-center bg-transparent border-2 mx-3 border-white py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0">Login
        </button></Link>
        <Link href={'https://dev.impuls.cx/'} className='hidden md:block'><button className="inline-flex items-center bg-[#6C52E3] border-2 border-[#6C52E3] py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0">Sign up
        </button></Link>
      </div>
      {show && <nav className="sm:hidden ml-auto mr-auto flex flex-1 flex-col flex-wrap items-center text-base justify-evenly">
        <Link href={'/'} className="my-2 lg:mx-5" style={{ color: home ? '#6C52E3' : 'white' }}>Home</Link>
        <Link href={'/what-we-do'} className="my-2 lg:mx-5" style={{ color: what ? '#6C52E3' : 'white' }}>What we do</Link>
        <Link href={'/faqs'} className="my-2 lg:mx-5" style={{ color: faq ? '#6C52E3' : 'white' }}>FAQs</Link>
        <Link href={'/pricing'} className="my-2 lg:mx-5" style={{ color: price ? '#6C52E3' : 'white' }}>Pricing</Link>
        <Link href={'/contact'} className="my-2 lg:mx-5" style={{ color: contact ? '#6C52E3' : 'white' }}>Contact</Link>
      </nav>}
    </header>

    <Component {...pageProps} />

    <footer className="text-white py-4 lg:px-[4rem] bg-[#0D0823] body-font">

      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={'/logo.svg'} width={120} height={120} alt='logo' />
          </a>
          <p className="py-3 text-[1.1rem] text-white">Impuls is your one stop shop for your survey needs. From survey creation up to survey distribution and analysis, Impuls is geared for anything.</p>
          <input type="email" placeholder='Enter your email here' className='w-50 py-2 text-center mt-3 text-black' /><button className='rounded-tr rounded-br py-2 px-1 w-[7rem] bg-[#6C52E3]'>SIGN UP</button>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-[1.2rem] mb-3">Home</h2>
            <nav className="list-none mb-10">
              <li className='py-2'>
                <a className="text-white">Features</a>
              </li>
              <li className='py-2'>
                <a className="text-white">Testimonials</a>
              </li>
              <li className='py-2'>
                <a className="text-white">FAQs</a>
              </li>
              <li className='py-2'>
                <a className="text-white">Book a demo</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-2">
            <h2 className="title-font font-medium text-white tracking-widest text-[1.1rem] mb-3">What we do</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-2">
            <h2 className="title-font font-medium text-white tracking-widest text-[1.1rem] mb-3">FAQs</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-2">
            <h2 className="title-font font-medium text-white tracking-widest text-[1.1rem] mb-3">Pricing</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-2">
            <h2 className="title-font font-medium text-white tracking-widest text-[1.1rem] mb-3">Contact</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800"></a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <p>© 2022 lorem ipsum. All Rights Reserved.</p>
      </div>
    </footer>
  </>
}

export default MyApp
