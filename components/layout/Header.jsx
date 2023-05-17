import React from 'react';

import Link from 'next/link';

const Header = ({ roboto }) => {
  return (
    <header className={`${roboto.variable} font-roboto bg-[#1F2937] py-4`}>
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[#5d66e1] font-mono text-3xl">
              <Link href='/'>Github Infos</Link>
            </h4>
          </div>
          <div>
            <ul className="flex gap-3">
              <li>
                <Link href='/' className='font-medium bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-700 hover:text-white'>Home</Link>
              </li>
              <li>
                <Link href='/users' className='font-medium text-gray-200 px-4 py-2 rounded-md hover:bg-slate-700 hover:text-white'>Users</Link>
              </li>
              <li>
                <Link href='/repos' className='font-medium text-gray-200 px-4 py-2 rounded-md hover:bg-slate-700 hover:text-white'>Repositories</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-right">
              <Link href='/about' className='font-bold bg-[#5d66e1] text-white px-6 py-3 rounded-md'>About</Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header