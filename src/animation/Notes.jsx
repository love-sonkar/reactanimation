import React, { useState, Suspense } from "react";
import { ContexNotes } from "../context/ContextApi";
import { AnimatePresence, motion as m } from "framer-motion";
import FilterList from "./FilterList";
import Notesitem from "./Notesitem";

const Notes = () => {
  const { Notes } = ContexNotes();
  const [filtershow, setFilterShow] = useState(false);
  const [sortt, setsortt] = useState(false);

  const FilterNotes = () => {
    let filtering = Notes;
    if (sortt) {
      filtering = [...Notes].sort((a, b) => (a.notes > b.notes ? 1 : -1));
    }
    return filtering;
  };

  return (
    <div className="px-4">
      <div className="flex py-3">
        <h2 className="text-2xl">Your Notes</h2>
        <div className="ml-auto relative select-none">
          <m.button
            whileTap={{ scale: 0.87 }}
            onClick={() => setFilterShow((prev) => !prev)}
            className=" bg-blue-400 px-3 py-2  rounded text-white "
          >
            Filter
          </m.button>
          <AnimatePresence>
            {filtershow && <FilterList sortt={sortt} setsortt={setsortt} />}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <AnimatePresence layout>
          {Notes &&
            FilterNotes().map((item) => (
              <Notesitem key={item.id} note={item} />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Notes;
