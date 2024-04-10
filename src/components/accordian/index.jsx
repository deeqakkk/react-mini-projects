import { useState } from "react"
import data from './data'
import './style.css'

const Accordian = () => {
  const [selection, setSelection] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multipleSelected, setMultipleSelected] = useState([])

  function handleSingleSelection(getCurrentId) {
    setSelection(getCurrentId === selection ? null : getCurrentId)
  }

  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multipleSelected]
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)

    setMultipleSelected(copyMultiple)
  }
  return (
    <div className="wrapper">
      <button onClick={() => {
        setEnableMultiSelection(!enableMultiSelection)
      }}>
        {enableMultiSelection ? 'Enable Single Select' : 'Enable Multi Selection'}
      </button>

      <div className="accordian">
        {
          data && data.length > 0 ? (
            data.map((dataValue) => {
              return <div className="item" key={dataValue.id}>
                <div className="question"
                  onClick={enableMultiSelection ?
                    () => handleMultipleSelection(dataValue.id) :
                    () => handleSingleSelection(dataValue.id)}>
                  <h3>{dataValue.question}</h3>
                  <span>+</span>
                </div>
                {
                  enableMultiSelection ?
                    multipleSelected.indexOf(dataValue.id) !== -1 && <div className="answer">{dataValue.answer}</div>
                    : selection === dataValue.id && (
                      <div className="answer">{dataValue.answer}</div>
                    )
                }
              </div>
            })
          ) 
          : (<h3>Nothing found</h3>)
        }
      </div>
    </div>
  )
}

export default Accordian