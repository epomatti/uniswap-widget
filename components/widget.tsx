import { darkTheme, lightTheme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { useEffect, useState } from 'react';
import { useDarkMode } from 'usehooks-ts'

declare var window: any;

const jsonRpcEndpoint = process.env.NEXT_PUBLIC_POLYGON_NODE;

const Widget = () => {
  const [provider, setProvider] = useState();
  useEffect(() => {
    setProvider(window.ethereum);
  }, [provider]);

  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <div className="Uniswap">
      <SwapWidget
        provider={provider}
        jsonRpcEndpoint={jsonRpcEndpoint}
        // width={450}
        // theme={theme}
      />
    </div>
  )
}

export default Widget;