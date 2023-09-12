import React, { useContext } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import DataContext from './Context'



const Edit = () => {
    const navigate = useNavigate();
    const context = useContext(DataContext);
    const location = useLocation();
    const index = (location.state.data)
    // console.log(index);
    const newObj = {
        name: context.entry[index].name,
        age: context.entry[index].age,
        course: context.entry[index].course,
        batch: context.entry[index].batch,
    }
    const handleChange = (e)=> {
        newObj[e.target.name]=e.target.value
    }
    const handleUpdate = (prevObj) => {
        context.updateData(
      (prevObj)=>{
        prevObj[index]=newObj;
        return (prevObj);
      }
    );
        navigate('/student')
        
    }

  return (
      <div className='edit'>
          <div>
              <label >Name:</label>
              <input type="text" name="name" onChange={handleChange}  />
          </div>
          <div>
              <label >Age:</label>
              <input type="text" name="age" onChange={handleChange}  />
          </div>
          <div>
              <label >Course:</label>
              <input type="text" name="course" onChange={handleChange} />
          </div>
          <div>
              <label >Batch:</label>
              <input type="text" name="batch" onChange={handleChange}  />
          </div>
          <button onClick={handleUpdate} className='update'>
              Update
              
          </button>
          <button onClick={() => { navigate('/student')}} className='cancel'>
              Cancel
          </button>
          
    </div>
  )
}

export default Edit



