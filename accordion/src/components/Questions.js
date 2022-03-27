import React,{useState} from 'react'
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

function Questions(props) {

    const [showAns, setShowAns] = useState(false)
    const expand = () =>{
        
    }

    const {question} = props
  return (
      showAns ? 
        (
            <div className='questions'>
                <h2 className='question'>{question.title}</h2>
                <span className='btn' onClick={() => setShowAns(!showAns)}><AiOutlineMinus size={16}/></span>
                <p className='answer'>{question.info}</p>
            </div>
        )
        :
        (
            <div className='questions'>
                <h2 className='question'>{question.title}</h2>
                <span className='btn' onClick={() => setShowAns(!showAns)}><AiOutlinePlus size={16}/></span>
            </div>
        )
  )
}

export default Questions