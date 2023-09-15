import React from "react";
import { Button, ButtonProps } from "antd";
import { styled, css, RuleSet } from "styled-components";

interface AppStyledButtonProps extends Omit<ButtonProps, "size"> {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    corner?: "simple" | "round" | "circle";
}



const cornerStyles: Record<string, RuleSet<object>> = {
    simple: css`
        border-radius: 1px;
    `,
    round: css`
        border-radius: 8px;
    `,
    circle: css`
        border-radius: 999px;
    `,
};

const sizeStyles: Record<string, RuleSet<object>> = {
    xs: css`
        font-size: 12px !important;
        min-height: 24px;
        min-width: 40px;
    `,
    sm: css`
        font-size: 14px;
        min-height: 32px;
        min-width: 48px;
    `,
    md: css`
        font-size: 14px;
        min-height: 40px;
        min-width: 56px;
    `,
    lg: css`
        font-size: 16px;
        min-height: 48px;
        min-width: 64px;
    `,
    xl: css`
        font-size: 16px;
        min-height: 56px;
        min-width: 72px;
    `,
};

const StyledButton = styled(Button)<AppStyledButtonProps>`
    ${({ size }) => size && sizeStyles[size]}
    ${({ corner }) => corner && cornerStyles[corner]};
`;

const AppStyledButton: React.FC<AppStyledButtonProps> = ({ size, corner, className, ...props }) => {
    return <StyledButton {...props} size={size} corner={corner} className={className} />;
};

export default AppStyledButton;
