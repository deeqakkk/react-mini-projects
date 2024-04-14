import { useState } from 'react'

const GithubProfile = () => {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [userData, setUserData] = useState({})
  const [username, setUserName] = useState('')

  async function fetchUserProfile(username) {
    try {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${username}`)
      const data = await response.json()
      if (response.status !== 200) {
        setErrorMsg(data.message)
      }
      setUserData(data)
      setUserName('')
      setLoading(false)
    } catch (err) {
      console.log(err)
      setErrorMsg(err.message)
      setLoading(false)
    }
  }

  async function handleClick() {
    await fetchUserProfile(username)
  }

  if (loading) return <p>Data is being fetched...</p>
  if (errorMsg)
    return (
      <div>
        <p>Error : {errorMsg}</p>
        <button onClick={() => setErrorMsg(null)}>Try Again</button>
      </div>
    )
  return (
    <div className="github-profile">
      <div className="input-container">
        <input
          placeholder="Enter Github username..."
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        ></input>
        <button
          disabled={username === '' || loading ? true : false}
          onClick={handleClick}
        >
          Fetch Details
        </button>
        <button
          disabled={Object.keys(userData).length === 0}
          onClick={() => {
            setUserData({})
          }}
        >
          Clear Data
        </button>
      </div>
      {Object.keys(userData).length !== 0 && (
        <div className="profile-details">
          <h1>{userData.name}</h1>
          <img
            src={userData.avatar_url}
            alt="profile-img"
            height={200}
            width={200}
          />
        </div>
      )}
    </div>
  )
}

export default GithubProfile
