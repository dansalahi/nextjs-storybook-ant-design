"use client";

import AppStyledButton from "@/components/AppStyledButton";
import AppTailwindButton from "@/components/AppTailwindButton";
import React from "react";

export const playground = () => {
    return (
        <div className="flex p-10 justify-center items-center">
            <AppTailwindButton corner="simple">TailwindCss is ❤</AppTailwindButton>
            <AppStyledButton corner="simple">CSSinJS is ❤</AppStyledButton>
        </div>
    );
};

export default playground;
