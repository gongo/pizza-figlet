import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Emoji, EmojiSet } from 'emoji-mart'
import { defaultColor, defaultSpacing } from 'smarthr-ui'

type Props = {
  foreground: string
  background: string
  colonsText: string
}

type emojiComponentTableType = {
  [key: string]: React.ReactNode
}

const generateEmojiComponentTable = (foreground: string, background: string): emojiComponentTableType => {
  const options = { set: 'apple' as EmojiSet, size: 16 }
  const fallback = () => <Emoji {...options} emoji=":x:" />

  return {
    [foreground]: <Emoji {...options} emoji={foreground} fallback={fallback} />,
    [background]: <Emoji {...options} emoji={background} fallback={fallback} />,
  }
}

export const EmojiPreview: React.VFC<Props> = ({ foreground, background, colonsText }) => {
  const [emojiList, setEmojiList] = useState<string[]>([])
  const emojiComponentTable = useMemo(() => generateEmojiComponentTable(foreground, background), [foreground, background])

  useEffect(() => {
    const reResult = colonsText.matchAll(/(?::([\w+-]+?):|\r?\n)/g) // Array<":emoji-syntax:" | [linefeed]>
    const list = Array.from(reResult).map((m: string[]) => m[0])

    setEmojiList(list)
  }, [colonsText])

  return (
    <Container>
      {emojiList.map((v: string, i: number) => {
        return v in emojiComponentTable ? <span key={i}>{emojiComponentTable[v]}</span> : <br key={i} />
      })}
    </Container>
  )
}

const Container = styled.div`
  white-space: nowrap;
  overflow: scroll;
  height: 100%;
  border: 1px solid ${defaultColor.BORDER};
  padding: ${defaultSpacing.XXS};
`
