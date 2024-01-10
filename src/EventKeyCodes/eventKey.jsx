import { useState } from "react"
import "./eventKey.scss"
export const EventKeyCodes = () => {
  const [keyDown, setKeyDown] = useState({
    key: "a",
    kCode: "65",
    code: "KeyA"
  })

  // window event for key values to get ====>
  window.addEventListener("keydown", (e) => {
    console.log(e)
    setKeyDown({
      key: e.key === " " ? 'space' : e.key,
      kCode: e.keyCode,
      code: e.code
    })
  })

  // data to show webpage =======>
  const KeyPressData = [
    {
      name: "Key Name",
      KeyValue: keyDown.key
    },
    {
      name: "Key Code",
      KeyValue: keyDown.kCode
    },
    {
      name: "Code",
      KeyValue: keyDown.code
    }
  ]
  return (
    <div className="event-key-code-container">
      <h1>Press Any key ⌨</h1>
      {
        KeyPressData.map((_) => {
          return (
            <div className="key">
              <div className="key-name">{_.name}</div>
              <div className="key-value">{_.KeyValue}</div>
            </div>
          )
        })
      }
    </div>
  )
}