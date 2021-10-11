import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const createInfo = (newInfo) => {
    const id = studentsInfo[studentsInfo.length - 1] + 1;
    const nInfo = { ...newInfo, id: id };
    console.log(nInfo);
    setStudentsInfo([...studentsInfo, nInfo]);
  };

  const deleteInfo = (id) => {
    let tempInfo = studentsInfo.filter((student) => student.id !== id);
    setStudentsInfo(tempInfo);
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} deleteInfo={deleteInfo} />
      ) : (
        <Form createInfo={createInfo} />
      )}
    </div>
  );
}

export default App;
