import * as React from "react";
import * as Select from "@radix-ui/react-select";
import styles from "./Select.module.css";
import DownArrow from '../../assets/DownArrow.svg?react';
import UpArrow from '../../assets/UpArrow.svg?react';
import Check from '../../assets/Check.svg?react';
import { Option } from "@/types/allTypes";


// Define types for the SelectItem component props
interface SelectItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        {...props}
        ref={forwardedRef}
        className={styles.Item}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.ItemIndicator}>
          <Check/>
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem"; // Always set a display name when using forwardRef

type SelectProps<T> = {
  label: string;
  defaultValue: T; 
  options: Option<T>[];
  onValueChange:  (value: T) => void;
}

const SelectDemo =<T extends unknown>({label, options, defaultValue, onValueChange}:SelectProps<T>) => {
  const isValidValue = options.some(option => option.value === defaultValue);
  return (
  <Select.Root onValueChange={(value) => {onValueChange(value as T)}} defaultValue={isValidValue ? String(defaultValue) : String(options[0].value)}>
    <div className={styles.Button}>
      <h5 className={styles.ButtonLabel}>{label}</h5>
    <Select.Trigger className={styles.Trigger} aria-label={label}>
      <Select.Value placeholder='Select a option…'/>
      <Select.Icon className={styles.Icon}>
         <DownArrow/>
      </Select.Icon>
    </Select.Trigger>
    </div>
    <Select.Portal>
      <Select.Content align="start" className={styles.Content}>
        <Select.ScrollUpButton className={styles.ScrollButton}>
          <UpArrow/>
        </Select.ScrollUpButton>
        <Select.Viewport className={styles.Viewport}>
          <Select.Group>
            <Select.Label className={styles.Label}>{label}</Select.Label>
            {options.map((option) => (
              <SelectItem key={String(option.value)} value={String(option.value)}>{option.text}</SelectItem>
            ))} 
          </Select.Group>
          <Select.Separator className={styles.Separator} />
        </Select.Viewport>
        <Select.ScrollDownButton className={styles.ScrollButton}>Z</Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
}

export default SelectDemo;
