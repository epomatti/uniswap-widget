import { darkTheme, lightTheme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { useEffect, useState } from 'react';

declare var window: any;

// Infura endpoint
const jsonRpcEndpoint = process.env.REACT_APP_POLYGON_NODE;

const Widget = () => {
  const [provider, setProvider] = useState();
  useEffect(() => {
    setProvider(window.ethereum);
  }, []);

  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userTheme = isDarkMode ? darkTheme : lightTheme;
    setTheme(userTheme);
  }, [theme]);

  return <div className="Uniswap">
    <SwapWidget
      provider={provider}
      jsonRpcEndpoint={jsonRpcEndpoint}
      width={450}
      theme={theme}
    />
  </div>
}

export default Widget;