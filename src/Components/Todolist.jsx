import { React, useState } from "react";
import ScheduleForm from "./ScheduleForm";
import Schedules from "./Schedules";
import { v4 as uuidv4 } from "uuid";
import '../styles.css'


const Todolist = (props) => {
  const [list, setList] = useState({
    schedules: [
      {
        id: uuidv4(),
        date: "13-12-22",
        time: "6:00pm",
        subject: "Prayer Time",
      },
      {
        id: uuidv4(),
        date: "14-12-22",
        time: "5:00pm",
        subject: "Prayer Time",
      },
    ],
  });

  const [popup, setpopup] = useState(false);

  const handleAddSchedule = (e) => {
    e.preventDefault();
    setpopup(!popup);
  };


  const addSchedule = (newSchedule) => {
    setList({ schedules: [...list.schedules, newSchedule] });
    console.log(list);
  };
  const updateSchedule = (newSchedule) => {
    setList({ schedules: [...list.schedules, newSchedule] });
    console.log(list);
  };

  const  deleteSchedule = (id) => {
    let undeletedSchedules = list.schedules.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setList({ schedules: undeletedSchedules });
  };

  return (
    <div className="App">
      <button className="add" onClick={handleAddSchedule}>Add Schedule</button>
      {popup ? <ScheduleForm addSchedule={addSchedule} /> : null}
      <Schedules
        scheduleInfo={list.schedules}
        deleteSchedule={deleteSchedule}
        updateSchedule={updateSchedule}
      />
    </div>
  );
};

export default Todolist;
