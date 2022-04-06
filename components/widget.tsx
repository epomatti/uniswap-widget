import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { useEffect, useState } from 'react';

declare var window: any;

// Infura endpoint
const jsonRpcEndpoint = process.env.REACT_APP_POLYGON_NODE;

const getSystemTheme = () => {
  
}

const Widget = () => {

  const [provider, setProvider] = useState();
  useEffect(() => {
    setProvider(window.ethereum);
  }, []);

  const [theme, setTheme] = useState(darkTheme);
  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  let darkMode = true

  return <div className="Uniswap">
    <SwapWidget
      provider={provider}
      jsonRpcEndpoint={jsonRpcEndpoint}
      width={450}
      theme={darkMode ? darkTheme : lightTheme}
    />
  </div>
}

export default Widget;