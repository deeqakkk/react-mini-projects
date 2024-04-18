import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import TabsTest from './components/custom-tabs/tabs-test'
import StarRating from './components/star-rating/index'
import GithubProfile from './components/github-profile/index'


export default function App() {
  return (
    <BrowserRouter>
      <div className="parent-container">
        <Routes>
          <Route path="/" element={
            <>
              <h1>This is homepage</h1>
              <Link to='starRating'>Star rating</Link>
              <hr></hr>
              <Link to='tabsTest'>Custom Tabs</Link>
              <hr></hr>
              <Link to='githubProfile'>Github Profile</Link>
            </>
          } />
          <Route path="/starRating" element={<StarRating />} />
          <Route path="/githubProfile" element={<GithubProfile />} />
          <Route path='/customTabs' element={<TabsTest />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}