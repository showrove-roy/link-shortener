import React, { useState } from "react";

const App = () => {

  const [originalLink, setOriginalLink] = useState(null);

  const linkCollect =(e)=>{
    e.preventDefault();
    setOriginalLink(e.target.orginalLink.value);

  }
  return (
    <section className='max-w-7xl mx-auto px-10 '>
      <div className='h-screen flex items-center justify-center'>
        <form onSubmit={linkCollect} className='grid grid-cols-1 gap-10 max-w-lg border-primary'>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Product link</span>
            </label>
            <input
              type='url'
              placeholder='Type here'
              name="orginalLink"
              className='input input-bordered input-accent w-full'
              required
            />
          </div>
          <input className='btn btn-primary' type="submit" value="Add" />
          
        </form>
      </div>
    </section>
  );
};

export default App;
