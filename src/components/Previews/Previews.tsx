import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { EmojiSource } from './components/EmojiSource'
import { EmojiPreview } from './components/EmojiPreview'
import { Base, TabBar, TabItem, defaultSpacing } from 'smarthr-ui'

type Props = {
  figletText: string
}

export const Previews: React.VFC<Props> = ({ figletText }) => {
  const [colonsText, setColonsText] = useState<string>('')
  const foregroundEmojiText = ':pizza:'
  const backgroundEmojiText = ':cloud:'

  useEffect(() => {
    setColonsText(figletText.replace(/\S/g, foregroundEmojiText).replace(/[^\n\S]/g, backgroundEmojiText))
  }, [figletText])

  return (
    <>
      <Base>
        <Heading type="sectionTitle">FIGlet source</Heading>
        <EmojiSource text={colonsText} />
      </Base>
      <Base>
        <Heading type="sectionTitle">Preview</Heading>
        <EmojiPreview foreground={foregroundEmojiText} background={backgroundEmojiText} colonsText={colonsText} />
      </Base>
    </>
  )
}
