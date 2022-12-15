import React, { Component} from "react";
import {v4 as uuidv4} from 'uuid';
import '../formStyles.css'

class EditScheduleForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      date:'',
      time:"",
      subject:''
    }
  }

handleChange = (e) => {
  this.setState({id: uuidv4(),[e.target.name]: e.target.value})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.updateSchedule(this.state)
  console.log(this.state);
} 
  render(){
    return (
      <form onSubmit={this.handleSubmit} className='editForm'>
        <div>
          <label>Date</label>
          <input type="Date" value={this.state.date} name="date" onChange={this.handleChange}/>
        </div>
        <div>
          <label>Time</label>
          <input type="text" value={this.state.time} name="time" onChange={this.handleChange}/>
        </div>
        <div>
          <label>Subject</label>
          <input type="text" value={this.state.subject} name="subject" onChange={this.handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
  );
  }
};

export default EditScheduleForm;
