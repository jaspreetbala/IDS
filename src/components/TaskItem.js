import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/TaskItem.css';

const TaskItem = (props) => {

    const handleClose = () => {
          
          props.toggleModal(); 
    }

    const handleSubmit = () => {
          
        props.handleSubmit(); 
  }

  const onItemChange = (e) => {
    props.onItemChange(e.target.value);
  }

    return (
        
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <form>
            <h3>Add Task</h3>
            <label>
              Name:
              <input type="text" name="name" onChange={onItemChange} />
            </label>
            <br />
            <input type="submit" onClick= {handleSubmit}/>
          </form>
        </div>
      </div>
        
      );
}

export default TaskItem;