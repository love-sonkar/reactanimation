import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { ContexNotes } from "../context/ContextApi";
import Input from "./Input";

const AddNote = () => {
  const { Notes, setNotes } = ContexNotes();
  const [input, setInput] = useState("");

  const AddNotes = () => {
    if (input !== "") {
      const newNote = {
        id: Date.now(),
        notes: input,
        time: new Date(),
      };
      setNotes([...Notes, newNote]);
    }
    setInput("");
  };

  return (
    <div className="p-4 ">
      <label
        htmlFor="note"
        className="block font-medium leading-6 text-gray-900 text-2xl"
      >
        Note
      </label>
      <div className="relative mt-2 rounded-md shadow-sm flex ">
        <Input
          whileTap={{ scale: 0.97 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          title="Enter Notes"
        />
        <m.button
          whileTap={{ scale: 0.8 }}
          onClick={AddNotes}
          className="bg-blue-400 px-3 py-2  rounded text-white"
        >
          Submit
        </m.button>
      </div>
    </div>
  );
};

export default AddNote;
