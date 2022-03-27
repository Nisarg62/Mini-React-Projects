import React, { useState } from 'react';

function List(props) {

    const [editing, setEditing] = useState({id:'', status: false})
    const [disableAll, setDisableAll] = useState(true)
    const [disableSelected, setDisableSelected] = useState(true)
    const [selectAll, setSelectAll] = useState(false)
    const [selected, setSelected] = useState([])

    const delHandler = (index) =>{
        const temp = props.info.filter(inf => props.info[index] !== inf )
        props.setInfo(temp)
    }

    const editHandler = (index) =>{
        setEditing({id: index, status:true})
    }

    const onSave = (name, age, phnnum, index, time) =>{
        let temp = props.info[index]
        temp = {name: name, age: age, phnnum: phnnum, time: time}
        props.info.splice(index, 1)
        props.setInfo([temp, ...props.info])
        setEditing({id:'' , status:false})
    }

    const checkBoxHandler = () =>{
        const checkboxes = document.querySelectorAll('.checkbox')
        checkboxes.forEach((checkbox,index) =>{
            if(checkbox.checked === true && selectAll === false){
                setDisableSelected(false)
                setSelected([...selected, index])
            }
        })
    }

    const deleteSelected = () =>{
        props.info.splice(selected[0], selected.length)
        props.setInfo(props.info)
        setDisableSelected(!disableSelected)
    }

    const selectAllHandler = () =>{
        setSelectAll(true)
        const checkboxes = document.querySelectorAll('.checkbox')
        checkboxes.forEach(checkbox =>{
            checkbox.checked = !checkbox.checked
        })
        setDisableAll(!disableAll)
    }

    const deleteAll = () =>{
        props.setInfo([])
        setSelectAll(false)
        setDisableAll(!disableAll)
    }

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th><input checked={selectAll} className='selectAll' type="checkbox" onChange={() => selectAllHandler()}/></th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Date and Time</th>
                    </tr>
                        {
                            props.info.map((inf, index) =>(
                                editing.status === false || editing.id!==index ? (
                                    <tr key={index}>
                                        <th><input type="checkbox" className='checkbox' onClick={() => checkBoxHandler()}/></th>
                                        <td>{inf.name}</td>
                                        <td>{inf.age}</td>
                                        <td>{inf.phnnum}</td>
                                        <td>{inf.time}</td>
                                        <td><button onClick={() => editHandler(index)}>Edit</button></td>
                                        <td><button onClick={() => delHandler(index)}>Delete</button></td>
                                    </tr>
                                ): (
                                    <tr key={index}>
                                        <td><input type='text' defaultValue={inf.name} onChange = {e => inf.name = e.target.value}/></td>
                                        <td><input type='text' defaultValue={inf.age} onChange = {e => inf.age = e.target.value} /></td>
                                        <td><input type='text' defaultValue={inf.phnnum} onChange = {e => inf.phnnum = e.target.value} /></td>
                                        <td><button onClick={() => onSave(inf.name, inf.age, inf.phnnum, index,inf.time = new Date().toLocaleString())}>Save</button></td>
                                    </tr>
                                )
                            ))
                        }
                </tbody>
            </table>
            <div>
                <button disabled = {disableAll} className='deleteAllBtn' onClick={() => deleteAll()}>Delete All</button>
                <button disabled = {disableSelected} className='deleteSelectedBtn' onClick={() => deleteSelected()}>Delete Selected</button>
            </div>
            
        </div>
        
    )
}

export default React.memo(List);
