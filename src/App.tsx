import React from 'react'
import { Textarea } from 'smarthr-ui'
import { useFiglet } from 'react-hook-figlet'
import { Previews } from './components/Previews'

export const App: React.VFC = () => {
  const [figletText, setSourceText] = useFiglet('Old Banner')

  const handleChangeSourceText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setSourceText(e.target.value)
  }

  return (
    <>
      <Textarea name="sourceText" onChange={handleChangeSourceText} />
      <Previews figletText={figletText} />
    </>
  )
}
