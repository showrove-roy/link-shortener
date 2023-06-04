import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const InputLink = ({ setListUp, listUp }) => {
  const [originalLink, setOriginalLink] = useState(null);

  //   tooltip data
  const [isCopy, setIsCopy] = useState("Copy to clipboard");

  const linkCollect = (e) => {
    e.preventDefault();
    addLinkBD(e.target.orginalLink.value);
  };

  const addLinkBD = (link) => {
    const linkObj = {
      originalLink: link,
      created_time: new Date(),
      isOpen: true,
    };

    fetch("https://link-shortener-server.vercel.app/link/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(linkObj),
    })
      .then((res) => res.json())
      .then((data) => {
        setListUp(!listUp);
        setOriginalLink(data.insertedId);
      });
  };

  //   copy to clipboard
  const handelCopy = () => {
    setIsCopy("Copied");
  };

  // mouse out event
  const handelMouseOut = () => {
    setIsCopy("Copy to clipboard");
  };

  //   reset link
  const resetLink = () => {
    setOriginalLink(null);
  };

  return (
    <>
      <div className='flex justify-center flex-col gap-10 w-2/5 mt-28'>
        <div className='border border-secondary max-w-lg w-full p-10 rounded'>
          <form onSubmit={linkCollect} className='grid grid-cols-1 gap-5 '>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Product link</span>
                <input
                  onClick={resetLink}
                  className='label-text cursor-pointer hover:text-red-600'
                  type='reset'
                  value='Reset'
                />
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
            <div className='mt-10 flex gap-5'>
              <h1>https://link-shorts.vercel.app/next/{originalLink}</h1>
              {/* copy icon */}

              <CopyToClipboard
                text={`https://link-shorts.vercel.app/next/${originalLink}`}>
                <div
                  onClick={handelCopy}
                  onMouseEnter={handelMouseOut}
                  className='lg:tooltip'
                  data-tip={isCopy}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#afa8bd'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='cursor-pointer hover:stroke-secondary'>
                    <rect
                      x='9'
                      y='9'
                      width='13'
                      height='13'
                      rx='2'
                      ry='2'></rect>
                    <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                  </svg>
                </div>
              </CopyToClipboard>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InputLink;
