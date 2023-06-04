import React, { useState } from "react";
import InputLink from "./Components/InputLink";
import AllLinkSec from "./Components/AllLinkSec";

const App = () => {
  const [listUp,setListUp]=useState(false)
  return (
    <section className='max-w-7xl mx-auto lg:px-5 px-3'>
      <div className='lg:flex gap-5 mb-10'>
        {/* Input Link */}
        <InputLink setListUp={setListUp} listUp={listUp}></InputLink>
        {/* All Link  */}
        <AllLinkSec setListUp={setListUp} listUp={listUp}></AllLinkSec>
      </div>
    </section>
  );
};

export default App;
