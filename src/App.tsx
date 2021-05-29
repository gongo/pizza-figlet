import React from 'react'
import { Textarea } from 'smarthr-ui'
import { useFiglet } from './hooks/useFiglet'

export const App: React.VFC = () => {
  const [figletText, setSourceText] = useFiglet()

  const handleChangeSourceText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setSourceText(e.target.value)
  }

  return (
    <>
      <Textarea name="sourceText" onChange={handleChangeSourceText} />
      <pre>{figletText}</pre>
    </>
  )
}
