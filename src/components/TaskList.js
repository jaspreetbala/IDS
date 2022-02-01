import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../styles/TaskList.css';
import TaskItem from './TaskItem';
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {

const [initialValues, setInitialValues] = useState(null);

const [showModal, setShowModal] = useState(false);

const [name, setName] = useState('');

const datafromRedux = useSelector((state) => state);
console.log(datafromRedux.task[0].name);

useEffect(function effectFunction() {
const initialArr = [{ id: 1, isSelected: true, name: 'Call the Dentist' }, { id: 2, isSelected: true, name: 'Schedule a dinner with Peter'},
{ id: 3, isSelected: true, name: 'Dailyui 43' }, { id: 4, isSelected: true, name: 'Call the vet'},
{ id: 5, isSelected: false, name: 'Kates birthday present' }, { id: 6, isSelected: false, name: 'Zero-index'},
{ id: 7, isSelected: false, name: 'No alcohol today' }, { id: 8, isSelected: false, name: 'Check-in to flight'}];
   

setInitialValues(initialArr);
}, []);



const toggleModal = () => {
setShowModal(!showModal);
};

const handleSubmit = () => {
        const addedValues = initialValues.concat({id: null, name: name});
        setInitialValues(addedValues);
        setName('');
        setShowModal(!showModal);
}

const onItemChange = (tNameValue) => {
        setName(tNameValue);
}

const onChangeSelection = (e, index) => {
        const isChecked = e.target.checked;

        const changedValues = initialValues.map((item, i) => {
                if(i === index){
                   return{
                           ...item,
                           isSelected: isChecked
                   }
                   
                } else 
                return item;
        });

        setInitialValues(changedValues);
}

return(
<div className="TaskListMain">

<div className="TaskList">
<div><h3>Task List</h3></div>
<div className="TaskListItems">
{initialValues !== null && (initialValues.map((item, i) => {
            
                
               return(
               <div>
               <input type="checkbox" checked={item.isSelected} onChange={e => onChangeSelection(e, i)}></input>
               {item.name}</div>
                
               );
        })
        
)} 
</div>
<div className="btnWrapper">
<div className="btnContainer" onClick={toggleModal}>+</div>
</div>
</div>
{showModal && (
        <TaskItem onItemChange={onItemChange} toggleModal={toggleModal} handleSubmit={handleSubmit} />
)}
</div>);
}

export default TaskList;