import '../styles/globals.css'
import { Web3Wrapper } from "../context/web3Context";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Wrapper>
      <Component {...pageProps} />
    </Web3Wrapper>
  )
}

export default MyApp
