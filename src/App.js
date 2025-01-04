import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  // Handle for open form modal
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="App">
      <center>
        <h1>User Details Modal</h1>
        <button onClick={handleOpen} className="openBtn">Open Form</button>
        {open && <Modal setIsOpen={setOpen} />}
      </center>
    </div>
  );
}

export default App;
