import React from "react";
import { useDarkMode } from 'usehooks-ts'
import { Switch } from 'antd';

export const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <Switch
      checked={isDarkMode}
      onChange={() => toggle()}
      unCheckedChildren={'☀️'}
      checkedChildren={'🌙'}
    />
  );
};
