import React from "react";
import { useLoaderData } from "react-router-dom";

const Nextlink = () => {
  const link = useLoaderData();
  return window.location.replace(`${link[0]?.originalLink}`);
};

export default Nextlink;
