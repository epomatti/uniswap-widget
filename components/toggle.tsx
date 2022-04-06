import React from "react";
import { Switch } from 'antd';

export interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggle: Function;
}

export const DarkModeToggle = (props: DarkModeToggleProps) => {
  return (
    <Switch
      className="toggle"
      checked={props.isDarkMode}
      onChange={() => props.toggle()}
      unCheckedChildren={'☀️'}
      checkedChildren={'🌙'}
    />
  );
};
