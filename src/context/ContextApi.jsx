import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext();

const ContextApi = ({ children }) => {
  const [Notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider value={{ Notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default ContextApi;

export const ContexNotes = () => {
  return useContext(NotesContext);
};
