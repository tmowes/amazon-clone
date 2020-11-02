import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import reducer, { initialState } from '~/hooks/reducer'
import { StateProvider } from '~/hooks/StateProvider'
import GlobalStyle from '~/styles/GlobalStyles'
import * as themes from '~/styles/themes'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </ThemeProvider>
  )
}
