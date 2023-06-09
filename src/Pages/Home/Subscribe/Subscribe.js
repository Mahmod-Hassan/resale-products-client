import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-violet-500 text-center px-10 py-4 rounded text-white'>
        <div className="space-y-2">
          <h1 className='text-3xl'>Start for your first 30 days.</h1>
          <p className=''>
            Ready to watch? Enter your email to create or restart your membership
          </p>
          <div className="space-x-10">
            <input className='px-20 rounded py-2 outline-none' type="email" placeholder="Type your Email address" />
            <button className='btn btn-secondary'>Get Started</button>
          </div>
        </div>
      </div>
    )
}

export default Subscribe;