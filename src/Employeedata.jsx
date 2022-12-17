import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUser } from './Redux/Reduceremployee'

const Employeedata = () => {
  const dispatch = useDispatch()
  const employeeList = useSelector((state) => state.employee.user)

  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")
  const [email, setemail] = useState("")
  const [age, setage] = useState("")

  return (
    <>
      <label >First name:</label>
      <input type="text" onChange={(event) => { setfname(event.target.value) }} /><br /><br />
      <label >Last name:</label>
      <input type="text" onChange={(event) => { setlname(event.target.value) }} /><br /><br />
      <label >Email:</label>
      <input type="email" onChange={(event) => { setemail(event.target.value) }} /><br /><br />
      <label >Age:</label>
      <input type="number" onChange={(event) => { setage(event.target.value) }} /><br /><br />
      <button onClick={() => { dispatch(addUser({ fname, lname, email, age })) }}>Add Employee</button>
      <Link to="/example">Example</Link>

      <div>
      <table>
              {employeeList.map((record, index) => {
                return (
                  <tr
                    key={index}
                    id={index}>
                    <td>{record.fname}</td>
                    <td>{record.lname}</td>
                    <td>{record.age}</td>
                    <td>{record.email}</td>
                  </tr>
                )
              })}
            </table>
      </div>
    </>
  )
}

export default Employeedata