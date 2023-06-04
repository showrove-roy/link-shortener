import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

const AllLinkSec = ({ listUp,setListUp }) => {
  const [allLink, setAllLink] = useState([]);


  useEffect(() => {
    fetch("https://link-shortener-server.vercel.app/link/all")
      .then((res) => res.json())
      .then((data) => setAllLink(data));
  }, [listUp]);


  return (
    <section className="w-3/5">
      <div className='mt-5'>
        <h3 className='text-center text-3xl text-secondary'>All Links</h3>
      </div>
      <div className='divider'></div>
      <div className=''>
        <div className='overflow-x-auto'>
          <table className='table table-zebra'>
            {/* head */}
            <thead>
              <tr className='bg-primary text-white font-semibold text-center'>
                <th>No:</th>
                <th>ON/OFF</th>
                <th>URL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
            {allLink.map((link, index) => <TableRow key={link?._id} listUp={listUp} setListUp={setListUp} index={index} link={link}></TableRow>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllLinkSec;
