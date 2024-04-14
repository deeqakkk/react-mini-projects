import { useState } from 'react'

const CustomTabs = ({ tabsContent = [{}], onChange }) => {
  const [currentIdx, setCurrentIdx] = useState(0)
  console.log(tabsContent)
  function handleOnclick(getCurrentIdx) {
    setCurrentIdx(getCurrentIdx)
    onChange(getCurrentIdx)
  }
  return (
    <div className="custom-tabs-container">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div key={tabItem.label} onClick={() => handleOnclick(index)}>
            <span className="label"> {tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentIdx] && tabsContent[currentIdx].content}
      </div>
    </div>
  )
}

export default CustomTabs
