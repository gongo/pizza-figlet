import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { EmojiSource } from './components/EmojiSource'
import { EmojiPreview } from './components/EmojiPreview'
import { TabBar, TabItem, defaultSpacing } from 'smarthr-ui'

type Props = {
  figletText: string
}

type TabItems = 'source' | 'preview'

export const Previews: React.VFC<Props> = ({ figletText }) => {
  const [colonsText, setColonsText] = useState<string>('')
  const [currentTab, setCurrentTab] = useState<TabItems>('preview')
  const foregroundEmojiText = ':pizza:'
  const backgroundEmojiText = ':cloud:'

  useEffect(() => {
    setColonsText(figletText.replace(/\S/g, foregroundEmojiText).replace(/[^\n\S]/g, backgroundEmojiText))
  }, [figletText])

  const onClickTab = useCallback((tab: TabItems) => {
    setCurrentTab(tab)
  }, [])

  return (
    <>
      <TabBar>
        <TabItem id="tab-preview" selected={currentTab === 'preview'} onClick={() => onClickTab('preview')}>
          Emoji Preivew
        </TabItem>
        <TabItem id="tab-source" selected={currentTab === 'source'} onClick={() => onClickTab('source')}>
          Emoji Source
        </TabItem>
      </TabBar>
      <Result>
        {currentTab === 'source' ? (
          <EmojiSource text={colonsText} />
        ) : (
          <EmojiPreview foreground={foregroundEmojiText} background={backgroundEmojiText} colonsText={colonsText} />
        )}
      </Result>
    </>
  )
}

const Result = styled.div`
  height: 80vh;
  margin: ${defaultSpacing.XS} 0;
`
