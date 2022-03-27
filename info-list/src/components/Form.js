import React, {useState} from 'react';
import List from './List';

function Form() {
    
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] = useState(0)
    const [phnnum, setphnnum] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault();
        setId(prevId => prevId + 1)
        setInfo([ {name: name, age: age, phnnum: phnnum, time: new Date().toLocaleString()},...info])
        setName('')
        setAge('')
        setphnnum('')
    }

  return(
      <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div>
                <label>Age: </label>
                <input type='number' value={age} onChange={e => setAge(e.target.value)}></input>
            </div>
            <div>
                <label>Phone Number: </label>
                <input type='number' value={phnnum} onChange={e => setphnnum(e.target.value)}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
        {id !== 0 ? <List info = {info} setInfo = {setInfo} /> : ''}

    </div>
  )
}

export default Form;
