import React, { useState } from 'react'
import data from '../Constants/data'

const Accordion = () => {

  const [selected, setSelected] = useState(null)
  const [enableMultiselection, setEnableMultiselection] = useState(false)
  const [multipleIds, setMultipleIds] = useState([])


    const handleSingleclick = (getCurrentId) =>{
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultipleClick(getCurrentId){
      let copyOfMultipleIds = [...multipleIds]

      let findIndexOfCurrentId = copyOfMultipleIds.indexOf(getCurrentId)

      if (findIndexOfCurrentId === -1) copyOfMultipleIds.push(getCurrentId)
        else copyOfMultipleIds.splice(findIndexOfCurrentId, 1)

      setMultipleIds(copyOfMultipleIds)

    }


  return (
    <div className='wrapper'>
    <button onClick={()=> setEnableMultiselection((previousState)=> !previousState) } >{enableMultiselection ? "Multiple Selection" : "Single Selection"}</button>
        <div className='accordian'>
        <h1 className='header'>Accordian List</h1>
          { (data && data.length > 0) ? data.map((item)=> <div className='item' key={item.id}>
              <div 
              className='title' 
              onClick={ enableMultiselection ? ()=>handleMultipleClick(item.id) : ()=>handleSingleclick(item.id)}
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              { (selected === item.id) || (multipleIds.indexOf(item.id) !== -1) ? <div className='content'>{item.answer}</div> : null}
          </div>
          ) : <div>Sorry, No Data Available </div>}
        </div>
    </div>
  )
}

export default Accordion
