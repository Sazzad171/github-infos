import React from 'react';
import { useSession } from 'next-auth/react';

export const Profile = () => {

  const { data: session, status } = useSession();

  if ( status === "authenticated" ) {
    return (
      <h1 className='text-2xl font-bold'>This is your profile page</h1>
    )
  }

  return <a href="/auth/signin">Sign in to View User</a>
  
}

export default Profile