import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import DataContext from './Context'




const Student = () => {
    const context = useContext(DataContext);
  return (
      <div className='student'>
          <button className={'add'}>
              <NavLink to='/add' className={'addlink'}  >Add New Student</NavLink >
              
          </button>
          <div className='table'>
              <table border={'1px solid'}>
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Course</th>
                      <th>Batch</th>
                      <th>Edit</th>
                  </tr>
                  
                  {
                      context.entry.map((item, index) => {
                          return (
                              <tr key={index}>
                                  <td>{ item.name}</td>
                                  <td>{ item.age}</td>
                                  <td>{ item.course}</td>
                                  <td>{item.batch}</td>
                                  <td>
                                      <NavLink to={'/edit'} state={{ data:index}} >Edit</NavLink>
                                  </td>
                              </tr>
                          )
                      }
                        
                      )
                      }
                  
              </table>
              
          </div>


          
    </div>
  )
}

export default Student