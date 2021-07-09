import React, { useEffect } from 'react'
import { FormGroup, Textarea } from 'smarthr-ui'

import { useFiglet } from 'react-hook-figlet'

type Props = {
  onChangeFigletText: (figletText: string) => void
}

export const Form: React.VFC<Props> = ({ onChangeFigletText }) => {
  const [figletText, setSourceText] = useFiglet('Old Banner')

  const handleChangeSourceText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setSourceText(e.target.value)
  }

  useEffect(() => {
    onChangeFigletText(figletText)
  }, [figletText])

  return (
    <FormGroup
      title="Enter the text want to emojinize! (Only ASCII printable characters)"
      titleType="blockTitle"
      labelId="form-source-text"
    >
      <Textarea width="100%" onChange={handleChangeSourceText} aria-labelledby="form-source-text" />
    </FormGroup>
  )
}
