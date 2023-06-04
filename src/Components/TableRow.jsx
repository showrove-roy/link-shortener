import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const TableRow = ({ index, link,setListUp ,listUp}) => {
  //   tooltip data
  const [isCopy, setIsCopy] = useState("Copy to clipboard");
  const [selected, setSelected] = useState(link?.isOpen);
  //   copy to clipboard
  const handelCopy = () => {
    setIsCopy("Copied");
  };

  // mouse out event
  const handelMouseOut = () => {
    setIsCopy("Copy to clipboard");
  };

  // on off event
  const handleChange = () => {
    fetch(`https://link-shortener-server.vercel.app/link/update/${link?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isOpen: !selected }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1){
            setSelected(!selected);
            setListUp(!listUp)
        }
      });
  
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <th>
          <input
            type='checkbox'
            className='toggle'
            onChange={handleChange}
            checked={selected}
          />
        </th>
        <td>http://127.0.0.1:5173/next/{link?._id}</td>
        <td className='flex gap-3'>
          {/* copy icon */}
          <CopyToClipboard text={`http://127.0.0.1:5173/next/${link?._id}`}>
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
                <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
                <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
              </svg>
            </div>
          </CopyToClipboard>

          {/* Delete icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#f28c18'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='cursor-pointer hover:stroke-red-600'>
            <polyline points='3 6 5 6 21 6'></polyline>
            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
            <line x1='10' y1='11' x2='10' y2='17'></line>
            <line x1='14' y1='11' x2='14' y2='17'></line>
          </svg>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
