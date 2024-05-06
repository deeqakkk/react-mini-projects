import { useState } from 'react'
import './styles.css'
import usePasswordGenerator from './usePasswordGenerator'
const PasswordGenerator = () => {
  const [checkboxData, setCheckboxData] = useState([
    { title: 'Include uppercase letters', state: false },
    { title: 'Include lowercase letters', state: false },
    { title: 'Include Numbers', state: false },
    { title: 'Include symbols', state: false },
  ])
  const [length, setLength] = useState(4)
  const { password, errorMsg, generatePassword } = usePasswordGenerator()
  const [copied, setCopied] = useState(false)

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData]
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state
    setCheckboxData(updatedCheckboxData)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="password-generator">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={() => handleCopy()}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
      <div className="charLength">
        <span>
          <label htmlFor="">Character Length </label>
          <label htmlFor="">{length}</label>
        </span>
        <input
          type="range"
          name=""
          id=""
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="checkboxes">
        {checkboxData.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.state}
              name={item.title}
              id={item.title}
              onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor={item.title}>{item.title}</label>
          </div>
        ))}
      </div>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <button
        className="generateBtn"
        onClick={() => generatePassword(checkboxData, length)}
      >
        Generate button
      </button>
    </div>
  )
}

export default PasswordGenerator
