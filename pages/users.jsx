import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = ({usersData}) => {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    setUsers(usersData);
  }, []);

  return (
    <section className="py-4">
      <div className="max-w-6xl mx-auto px-2">
        {/* search box */}

        {/* users card area */}
        <div className="flex flex-wrap -mx-2">
          {
            users.map((item, i) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4" key={i}>
                <div className=' bg-slate-100 rounded-md shadow-md p-4'>
                  <div className="flex gap-4">
                    <h4 className='font-medium text-xl'>User className</h4>
                  </div>
                  <p className='text-gray-800 mb-2'>User bio is here</p>
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-gray-700 text-sm">343</p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">343</p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">343</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(process.env.BASE_URL + '/users');
  const usersData = await res.data;

  return {
    props: {
      usersData
    }
  }
}

export default Users