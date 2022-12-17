import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Example = () => {
    const employeeList = useSelector((state) => state.employee.user)
    return (
        <>
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
        </>
    )
}

export default Example