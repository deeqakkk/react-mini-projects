import useLocalStorage from './useLocalStorage'
import './theme.css'
const DarkLightMode = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="dark-light-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!!!</p>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </div>
    </div>
  )
}

export default DarkLightMode
