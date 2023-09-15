import React from 'react';
import { Button, ButtonProps } from 'antd';

export interface AppTailwindButtonProps extends Omit<ButtonProps, 'size'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  corner?: 'simple' | 'round' | 'circle';
}

const AppTailwindButton: React.FC<AppTailwindButtonProps> = ({ size, corner, className, ...props }) => {
  const customClasses = size ? `custom-button-${size}` : '';
  const cornerClasses = corner ? `custom-button-${corner}` : '';

  return (
    <Button className={` ${customClasses} ${cornerClasses} ${className}`} {...props} />
  );
};

export default AppTailwindButton;
