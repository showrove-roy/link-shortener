import React from "react";
import { useLoaderData } from "react-router-dom";

const Nextlink = () => {
  const link = useLoaderData();
  if (link[0]?.isOpen === true) {
    return window.location.replace(`${link[0]?.originalLink}`);
  }
  return window.location.replace("https://showrove-roy.vercel.app/");
};

export default Nextlink;
