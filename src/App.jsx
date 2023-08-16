import React, { Suspense } from "react";
import AddNote from "./animation/AddNote";
import LoadingAnimation from "./animation/LoadingAnimation";
import Header from "./Header";

const Notes = React.lazy(() => import("./animation/Notes"));

function App() {
  return (
    <div>
      <Header />
      <AddNote />
      <Suspense fallback={<LoadingAnimation />}>
        <Notes />
      </Suspense>
    </div>
  );
}

export default App;
