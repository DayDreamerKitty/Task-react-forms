import React from "react";
import Student from "./Student";

function StudentsList(props) {
  const list = props.list.map((student) => (
    <Student student={student} deleteInfo={props.deleteInfo} />
  ));
  return <div>{list}</div>;
}

export default StudentsList;
