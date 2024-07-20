import {
    Switch as HeadlessSwitch,
    type SwitchProps as HeadlessSwitchProps,
  } from "@headlessui/react";
  
  export type SwitchProps = {
    defaultEnable?: boolean;
    variant?: "common" | "contract";
    disabled?: boolean;
    onChange?: (enabled: boolean) => void;
  };
  
  const Switch = ({
    defaultEnable: enabledByDefault,
    variant = "common",
    disabled,
    onChange,
  }: SwitchProps) => {
    return <div></div>;
  };
  
  export default Switch;