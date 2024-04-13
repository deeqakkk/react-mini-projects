import { useState } from 'react'
import menu from './data'
import { FaMinus, FaPlus } from 'react-icons/fa'
function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} key={item.label} />)
        : null}
    </ul>
  )
}

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    })
  }
  return (
    <li>
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        {item.label}
        <div>
          {item && item.children && item.children.length ? (
            <span onClick={() => handleToggleChildren(item.label)}>
              {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
            </span>
          ) : null}
        </div>
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item?.children} />
      ) : null}
    </li>
  )
}
const DynamicMenu = () => {
  return <MenuList list={menu} />
}

export default DynamicMenu
