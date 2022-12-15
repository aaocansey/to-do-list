import { React } from "react";

const Schedule = (props) => {
  

  const handleDelete = () => {
    props.deleteSchedule(props.scheduleInfo.id);
  };

  return (
    <>
      <td>{props.scheduleInfo.date}</td>
      <td>{props.scheduleInfo.time}</td>
      <td>{props.scheduleInfo.subject}</td>
      <button onClick={handleDelete} className='deleteButton'>Delete</button>
    </>
  );
};

export default Schedule;
