import React from "react";
import { motion as m } from "framer-motion";

const Input = ({ title, value, onchange, ...args }) => {
  return (
    <m.input
      type="text"
      value={value}
      onChange={onchange}
      placeholder={title}
      {...args}
      className="block rounded-md w-full border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
    />
  );
};

export default Input;
