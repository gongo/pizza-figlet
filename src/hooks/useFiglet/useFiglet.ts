import { useCallback, useState } from 'react'
import figlet from 'figlet'
import fontSource from 'figlet/importable-fonts/Old Banner.js'

figlet.parseFont('Old Banner', fontSource)

export function useFiglet(): [string, (text: string) => void] {
  const [state, setState] = useState<string>('')

  const figletize = useCallback((text: string): void => {
    figlet.text(text, { font: 'Old Banner' }, (_, result): void => {
      if (result !== undefined) {
        setState(result)
      }
    })
  }, [])

  return [state, figletize]
}
