import React from "react";
import { motion as m } from "framer-motion";

const FilterList = ({ sortt, setsortt }) => {
  const FilterList = [
    {
      id: 1,
      label: "Sort",
      func: function () {
        setsortt(!sortt);
      },
    },
    { id: 2, label: "Search" },
  ];

  const variantvisible = {
    visible: {
      opacity: 1,
      height: "auto",
    },
    hide: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <m.div
      variants={variantvisible}
      initial="hide"
      animate="visible"
      exit="hide"
      className="rounded bg-slate-50 shadow-lg -translate-x-12 translate-y-1 absolute z-50"
    >
      <div className="p-4 flex flex-col gap-3 text-center">
        {FilterList.map((item) => (
          <m.h2
            whileTap={{ scale: 0.87 }}
            onClick={item?.func}
            className="cursor-pointer px-3 py-2 bg-blue-400 text-white rounded shadow"
            key={item.id}
          >
            {item.label}
          </m.h2>
        ))}
      </div>
    </m.div>
  );
};

export default FilterList;
