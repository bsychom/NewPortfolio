import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AOSWrapper from '@/components/AOSWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AOSWrapper>
      <Component {...pageProps} />
    </AOSWrapper>
  ) 
}
