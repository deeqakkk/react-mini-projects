import ScrollIndicator from './components/scroll-indicator'

function App() {
  return (
    <div className="App">
    <ScrollIndicator apiURL={'https://dummyjson.com/products?limit=100'}/>
    </div>
  )
}

export default App
