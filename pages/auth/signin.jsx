import React, { useEffect, useState } from 'react';
import { signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/router';

export const Signin = () => {
  // local state
  const [inputtedData, setInputtedData] = useState({});

  // initialize session and router
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await signIn('credentials', {
      email: inputtedData.email,
      password: inputtedData.password,
      redirect: false
    });
  }

  // if logged in redirect to dashboard
  useEffect(() => {
    console.log("effect", session);
    if (status === "authenticated") {
      router.replace("/profile");
    }
  }, [session, router]);

  return (
    <section className='pt-10 pb-10'>
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex justify-center">
          <div className="w-1/3">
            <div className="shadow-lg p-6 rounded-2xl">
              <h2 className="font-bold text-2xl mb-4 text-center">Login with Credentials</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className='block'>Your email address</label>
                  <input type="email" name="email" id="email" onChange={(e) => setInputtedData({ ...inputtedData, email: e.target.value })} className='block border w-full rounded-md px-4 py-2' placeholder='admin@gmail.com' />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className='block'>Your password</label>
                  <input type="password" name="password" id="password" onChange={(e) => setInputtedData({ ...inputtedData, password: e.target.value })} className='block border w-full rounded-md px-4 py-2' placeholder='1234' />
                </div>
                <p className="text-center">
                  <button type='submit' className='font-bold bg-[#5d66e1] text-white px-6 py-3 rounded-md me-2'>Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin