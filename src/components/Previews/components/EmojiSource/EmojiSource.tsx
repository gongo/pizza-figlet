import React from 'react'
import styled from 'styled-components'
import { Textarea as BaseTextarea } from 'smarthr-ui'

type Props = {
  text: string
}

export const EmojiSource: React.VFC<Props> = ({ text }) => (
  <Textarea
    readOnly
    onClick={(e: React.MouseEvent<HTMLTextAreaElement>) => {
      e.currentTarget.select()
    }}
    value={text}
  />
)

const Textarea = styled(BaseTextarea)`
  width: 100%;
  height: 100%;
`
