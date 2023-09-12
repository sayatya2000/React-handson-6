import React, { useState } from 'react'

import DataContext from './Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const context = useContext(DataContext);
    const navigate = useNavigate();
    const [state, setData] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    });
        
    


   

    const handleOnChange =(e)=> {
        setData({...state,[e.target.name]:e.target.value})
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        context.updateData((prevState)=>{prevState.push(state); return prevState})
        navigate ('/student')
    }



  return (
      <div className='addnew'>
          <div>
              <label > Name:</label>
              <input type="text" name="name" onChange={handleOnChange}  />
          </div>
          <div>
              <label > Age:</label>
              <input type="text" name="age" onChange={handleOnChange}  />
          </div>
          <div>
              <label > Course:</label>
              <input type="text" name="course" onChange={handleOnChange}  />
          </div>
          <div>
              <label > Batch:</label>
              <input type="text" name="Batch" onChange={handleOnChange} />
          </div>
          <button onClick={handleOnClick} className='update'>
              Add Data
              
          </button>
          <button onClick={() => { navigate('/student')}} className='cancel'>
              Cancel
          </button>

    </div>
  )
}

export default Add