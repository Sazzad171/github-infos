import React from 'react';

const Users = () => {
  return (
    <section className="py-4">
      <div className="max-w-6xl mx-auto px-2">
        {/* search box */}

        {/* users card area */}
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/3 px-2">
            <div className=' bg-slate-100 rounded-md p-4'>
              <div className="flex gap-4">
                <h4 className='font-medium text-xl'>User name</h4>
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
        </div>
      </div>
    </section>
  )
}

export default Users