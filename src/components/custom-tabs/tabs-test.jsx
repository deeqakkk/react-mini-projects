import CustomTabs from './tabs'

function RandomTest() {
  return <p>This is a test component</p>
}

export default function TabTest() {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div> Hello WOrld 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>This is content for tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: RandomTest(),
    },
  ]

  function handleChange(currentTabIdx) {
    console.log(currentTabIdx)
  }
  return (
    <div className="tabs-test">
      <CustomTabs tabsContent={tabs} onChange={handleChange} />
    </div>
  )
}
