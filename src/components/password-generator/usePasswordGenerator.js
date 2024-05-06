import { useState } from "react"
const usePasswordGenerator = () => {
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const generatePassword = (checkboxData, length) => {
    let charset = ""
    let generatedPassword = ""

    const selectedOptions = checkboxData.filter(item => item.state)

    if (selectedOptions.length === 0) {
      setErrorMsg("Select at least one option!")
      setPassword("")
      return
    }

    selectedOptions.forEach(element => {
      switch (element.title) {
        case "Include uppercase letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          break;
        case "Include lowercase letters":
          charset += "abcdefghijklmnopqrstuvwxyz"
          break;
        case "Include Numbers":
          charset += "1234567890"
          break;
        case "Include symbols":
          charset += "!@#$%^&*()"
          break;
        default: break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIdx = Math.floor(Math.random() * charset.length)
      generatedPassword += charset[randomIdx]
    }

    setPassword(generatedPassword)
    setErrorMsg(
      ""
    )
  }

  return { password, errorMsg, generatePassword }
}

export default usePasswordGenerator