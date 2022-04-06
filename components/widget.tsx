import { darkTheme, lightTheme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { useEffect, useState } from 'react';
import { useDarkMode } from 'usehooks-ts'
import { ethers } from "ethers";

declare var window: any;

const jsonRpcEndpoint = process.env.NEXT_PUBLIC_POLYGON_NODE;

const Widget = () => {

  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum));
  }, []);

  const theme = useDarkMode() ? darkTheme : lightTheme;

  return (
    <div className="Uniswap">
      <SwapWidget
        provider={provider}
        jsonRpcEndpoint={jsonRpcEndpoint}
        width={400}
        theme={theme}
      />
    </div>
  )
}

export default Widget;