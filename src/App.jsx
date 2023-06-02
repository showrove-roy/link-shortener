import React, { useState } from "react";

const App = () => {
  const [originalLink, setOriginalLink] = useState(null);

  const linkCollect = (e) => {
    e.preventDefault();
    // setOriginalLink(e.target.orginalLink.value);
    addLinkBD(e.target.orginalLink.value);
  };

  const addLinkBD = (link) => {
    const linkObj = { originalLink: link };

    fetch("http://localhost:5000/link/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(linkObj),
    })
      .then((res) => res.json())
      .then((data) => {
        setOriginalLink(data.insertedId);
      });
  };
  return (
    <section className='max-w-7xl mx-auto px-10 '>
      <div className='h-screen flex items-center justify-center flex-col gap-10'>
        <form
          onSubmit={linkCollect}
          className='grid grid-cols-1 gap-5 max-w-lg border-primary'>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Product link</span>
            </label>
            <input
              type='url'
              placeholder='Type here'
              name='orginalLink'
              className='input input-bordered input-accent w-full'
              required
            />
          </div>
          <input className='btn btn-primary' type='submit' value='Add' />
        </form>

        {originalLink && (
          <div className=''>
            <h1>http://127.0.0.1:5173/next/{originalLink}</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
