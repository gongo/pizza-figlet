import React, { useState } from 'react'
import styled from 'styled-components'

import { Form } from './components/Form'
import { Previews } from './components/Previews'
import { GlobalStyle } from './themes'
import { Base, Heading, Stack, defaultSpacing } from 'smarthr-ui'

export const App: React.VFC = () => {
  const [figletText, setFigletText] = useState<string>('')

  const handleChangeFigletText = (text: string) => {
    setFigletText(text)
  }

  return (
    <Container>
      <GlobalStyle />
      <Stack gap="M">
        <Heading>Pizza FIGLet</Heading>
        <Content>
          <Form onChangeFigletText={handleChangeFigletText} />
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
