import AppStyledButton from "../components/AppStyledButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: "StyledButton",
    component: AppStyledButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],

    argTypes: {
        children: {
            defaultValue: "Default Button",
            table: {
                type: { summary: "text" },
                defaultValue: { summary: "Default Button" },
            },
        },
        size: {
            options: ["xs", "sm", "md", "lg", "xl"],
            defaultValue: "large",
            control: { type: "select" },
            table: {
                type: { summary: "xs | sm | md | lg | xl" },
                defaultValue: { summary: "large" },
            },
        },
        corner: {
            options: ["simple", "round", "circle"],
            defaultValue: "simple",
            control: { type: "radio" },
            table: {
                type: { summary: "simple | round | circle" },
                defaultValue: { summary: "simple" },
            },
        },
        type: {
            options: ["default", "primary", "dashed", "link", "text"],
            defaultValue: "primary",
            control: { type: "select" },
            table: {
                type: { summary: "default | primary | dashed | link | text" },
                defaultValue: { summary: "primary" },
            },
        },
        shape: {
            options: ["circles", "default", "round"],
            defaultValue: "round",
            control: { type: "select" },
            table: {
                type: { summary: "circles | default | round" },
                defaultValue: { summary: "round" },
            },
        },
        disabled: {
            options: [true, false],
            defaultValue: false,
            control: { type: "boolean" },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false },
            },
        },
        loading: {
            options: [true, false],
            defaultValue: false,
            control: { type: "boolean" },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false },
            },
        },
        ghost: {
            options: [true, false],
            defaultValue: false,
            control: { type: "boolean" },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false },
            },
        },
        danger: {
            options: [true, false],
            defaultValue: false,
            control: { type: "boolean" },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false },
            },
        },
        block: {
            options: [true, false],
            defaultValue: false,
            control: { type: "boolean" },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false },
            },
        },
    },

    args: {
        children: "Default Button",
        size: "middle",
        corner: "simple",
        type: "primary",
        shape: "default",
        disabled: false,
        loading: false,
        ghost: false,
        danger: false,
        block: false,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
    args: {
        size: "xs",
        children: "Extra Small Button",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        children: "Small Button",
    },
};

export const Medium: Story = {
    args: {
        size: "md",
        children: "Medium Button",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        children: "Large Button",
    },
};

export const ExtraLarge: Story = {
    args: {
        size: "xl",
        children: "Extra Large Button",
    },
};
