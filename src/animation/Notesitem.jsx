import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { ContexNotes } from "../context/ContextApi";
import Input from "./Input";

const Notesitem = ({ note }) => {
  const { Notes, setNotes } = ContexNotes();
  const [Edit, setEdit] = useState(false);
  const [noteUpdata, setNoteUpdata] = useState(note.notes);

  const DeleteNotes = (item) => {
    setNotes(Notes.filter((e) => e.id !== item.id));
  };

  const UpdateNotes = (item) => {
    setEdit(!Edit);
    setNotes(
      Notes.filter((e) => (e.id == item.id ? (e.notes = noteUpdata) : e))
    );
  };

  const HideShowVariant = {
    visible: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <m.div
      layout
      key={note.id}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ x: -100, opacity: 0 }}
      className="bg-gray-200 p-2 rounded flex gap-2"
    >
      {Edit ? (
        <Input
          variants={HideShowVariant}
          initial="hide"
          animate={Edit ? "visible" : "hide"}
          transition={{ duration: 0.3, ease: "easeIn" }}
          whileTap={{ scale: 0.97 }}
          value={noteUpdata}
          onChange={(e) => setNoteUpdata(e.target.value)}
        />
      ) : (
        <m.h2
          variants={HideShowVariant}
          initial="hide"
          animate={Edit ? "hide" : "visible"}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1 text-2xl break-words"
        >
          {note.notes}
        </m.h2>
      )}

      <m.button
        whileTap={{ scale: 0.8 }}
        onClick={() => UpdateNotes(note)}
        className="bg-yellow-400 p-2 text-white rounded-lg"
      >
        {Edit ? "Submit" : "Edit"}
      </m.button>
      <m.button
        whileTap={{ scale: 0.8 }}
        className="bg-red-400 p-2 text-white rounded-lg"
        onClick={() => DeleteNotes(note)}
      >
        Delete
      </m.button>
    </m.div>
  );
};

export default Notesitem;
