import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Header = ({ roboto }) => {

  // initialize session status
  const { data: session, status } = useSession();

  // logout
  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut({ 
      callbackUrl: '/auth/signin',
      redirect: false
    });
  }

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
              <li>
                <Link href='/profile' className='font-medium text-gray-200 px-4 py-2 rounded-md hover:bg-slate-700 hover:text-white'>Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-right">
              <Link href='/about' className='font-bold bg-[#5d66e1] text-white px-6 py-3 rounded-md me-2'>About</Link>
              {
                status && status === "authenticated" ? (
                  <button onClick={handleSignOut} className='font-bold bg-rose-600 text-white px-6 py-3 rounded-md'>Signout</button>
                ) : (
                  <Link href='/auth/signin' className='font-bold bg-emerald-700 text-white px-6 py-3 rounded-md me-2'>Signin</Link>
                )
              }
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header