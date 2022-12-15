import { React, useState } from "react";
import Schedule from "./Schedule";
import EditScheduleForm from "./EditScheduleForm";
import '../formStyles.css'


const Schedules = (props) => {
  const [show, setShow] = useState(false);

  const handleupdateSchedule = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div className="tableContainer">
       <table className="tableHead">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </table>
      <table className="table">
        <tbody>
          {props.scheduleInfo.map((item, index) => {
            return (
              <tr key={item.id} className='tableRow'>
                <Schedule
                  key={item.id}
                  scheduleInfo={item}
                  deleteSchedule={props.deleteSchedule}
                  updateSchedule={props.updateSchedule}
                />
                <button className="edit" onClick={handleupdateSchedule}>Edit</button>
              </tr>
            );
          })}
        </tbody>
      </table>
      {show ? (
                  <EditScheduleForm updateSchedule={props.updateSchedule} />
                ) : null}
    </div>
  );
};

export default Schedules;
