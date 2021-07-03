import React from 'react'
import styled from 'styled-components'

import { useFiglet } from 'react-hook-figlet'
import { Previews } from './components/Previews'
import { GlobalStyle } from './themes'
import { Base, Heading, Stack, Textarea, defaultSpacing } from 'smarthr-ui'

export const App: React.VFC = () => {
  const [figletText, setSourceText] = useFiglet('Old Banner')

  const handleChangeSourceText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setSourceText(e.target.value)
  }

  return (
    <Container>
      <GlobalStyle />
      <Stack gap="M">
        <Heading>Pizza FIGLet</Heading>
        <Content>
          <Textarea width="100%" onChange={handleChangeSourceText} />
        </Content>
        <Content>
          <Previews figletText={figletText} />
        </Content>
      </Stack>
    </Container>
  )
}

const Content = styled(Base)`
  padding: ${defaultSpacing.S};
`

const Container = styled.div`
  margin-top: ${defaultSpacing.M};
  width: 1024px;
  margin-right: auto;
  margin-left: auto;
`
