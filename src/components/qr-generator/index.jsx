import { useState } from 'react'
import QRCode from 'react-qr-code'
const QrGenerator = () => {
  const [value, setValue] = useState('')
  return (
    <div className="qr-generator">
      <input
        type="text"
        placeholder="Type something here"
        onChange={(e) => {
          e.preventDefault()
          setValue(e.target.value)
        }}
      />
      <div
        style={{
          height: 'auto',
          margin: '0 auto',
          maxWidth: 200,
          width: '100%',
        }}
      >
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  )
}
export default QrGenerator
