import React from "react";

const App = () => {
  return (
    <section className='max-w-7xl mx-auto px-10 '>
      <div className='h-screen flex items-center justify-center'>
        <div className="grid grid-cols-1 gap-10">
        <div className='form-control w-full max-w-md'>
          <label className='label'>
            <span className='label-text'>Product link</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered input-accent w-full max-w-md'
          />
        </div>
        <div className='form-control w-full max-w-md'>
          <label className='label'>
            <span className='label-text'>Product link</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered input-accent w-full max-w-md'
          />
        </div>
        <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </section>
  );
};

export default App;
