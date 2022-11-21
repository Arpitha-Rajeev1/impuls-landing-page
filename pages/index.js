import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>impuls.cx</title>
        <meta name="description" content="Providing solutions for all survey needs" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>

        <section className="text-white px-2 lg:px-[4rem] bg-[#0D0823] body-font">
          <div className="mx-auto flex px-5 py-[4rem] sm:py-[6rem] md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-[48px] text-3xl mb-4 font-[800] leading-[3rem] text-white">Providing solutions for
                <br className="hidden lg:inline-block" /> all survey needs
              </h1>
              <p className="mb-8 leading-relaxed lg:w-3/5">Capture the data you need with all your survey needs in one platform. Take your  survey game to the next level, with Impuls.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-[#6C52E3] border-0 py-2 px-3 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded lg:text-lg">Sign up for free</button>
                <button className="ml-4 inline-flex text-white bg-transparent border-2 px-3 border-white py-2 lg:px-6 focus:outline-none rounded lg:text-lg">Learn more</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" alt="hero" src="/landing-page-hero-img-1.png" width={500} height={500} />
            </div>
          </div>
        </section>

        <section className="text-black bg-[#FAF9FF] body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-[48px] text-3xl font-[800] mb-4 text-gray-900">Features we provide</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Learn more from your customers</p>
            </div>

            <div className="flex md:flex-row flex-col flex-wrap justify-center items-center">
              <div className="p-4 w-3/4 md:w-2/4 xl:w-2/5">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Image className='m-auto' src={'/102.png'} width={200} height={200} alt='101' />
                  <h2 className="text-center title-font font-bold py-5 text-[1.2rem] text-gray-900">Survey Options</h2>
                  <p className="text-center leading-relaxed text-[1.1rem]">Choose from our different survey templates that will capture the ideal insights for you.</p>
                </div>
              </div>
              <div className="p-4 w-3/4 md:w-2/4 xl:w-2/5">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <Image className='m-auto' src={'/101.png'} width={200} height={200} alt='101' />
                  <h2 className="text-center title-font font-bold py-5 text-[1.2rem] text-gray-900">Multichannel Distribution</h2>
                  <p className="text-center leading-relaxed text-[1.1rem]">Use the appropriate channels to send in your questions directly to where your customers are.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-black px-2 lg:px-[4rem] bg-[#FAF9FF] body-font">
          <div className="mx-auto flex px-5 py-[4rem] sm:py-[6rem] md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-[48px] text-3xl mb-4 font-[800] leading-[3rem] text-black">Frequently asked
                <br className="hidden lg:inline-block" /> questions
              </h1>
              <p className="mb-8 leading-relaxed lg:w-3/5">Everything you need to know about Impuls. Can't find the answer you're looking for? <u className='cursor-pointer'>Contact us now.</u></p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" alt="hero" src="/faq.svg" width={500} height={500} />
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

      </main>
    </div>
  )
}
