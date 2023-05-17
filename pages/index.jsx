import Head from 'next/head';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Github Infos</title>
        <meta name="description" content="A NextJS App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='py-6 lg:py-20'>
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-8">
              <div className='bg-gradient-to-b from-[#111827] to-[#412755] px-4 lg:px-14 py-6 lg:py-24 rounded-xl lg:me-4'>
                <h4 className='text-center text-white font-bold text-4xl mb-4'>Github All Users</h4>
                <p className='text-center text-gray-300 text-xl mb-14'>View github all users from here. Also you can search if you want.</p>
                <p className='text-center'>
                  <Link href='/users' className='font-bold bg-white text-[#15192A] hover:bg-gray-200 px-6 py-3 rounded-md'>View Here</Link>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-8">
              <div className='bg-gradient-to-b from-[#412755] to-[#111827] px-4 lg:px-14 py-6 lg:py-24 rounded-xl lg:ms-4'>
                <h4 className='text-center text-white font-bold text-4xl mb-4'>Github All Repositories</h4>
                <p className='text-center text-gray-300 text-xl mb-14'>View github all Repositories from here. Also you can search if you want.</p>
                <p className='text-center'>
                  <Link href='/repos' className='font-bold bg-white text-[#15192A] hover:bg-gray-200 px-6 py-3 rounded-md'>Show Here</Link>
                </p>
              </div>
            </div>
          </div>

          {/* about */}
          <div className='bg-gradient-to-b from-[#1F2937] to-[#454dbd] px-4 lg:px-14 py-6 lg:py-24 rounded-xl lg:ms-4'>
            <h4 className='text-center text-white font-bold text-4xl mb-4'>About the Developer</h4>
            <p className='text-center text-gray-300 text-xl mb-14'>This is a NextJS application developed for experiment new features of NextJS 13.</p>
            <p className='text-center'>
              <Link href='/about' className='font-bold bg-white text-[#15192A] hover:bg-gray-200 px-6 py-3 rounded-md'>Show More</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
