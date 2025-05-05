import React from "react";

type Props = {
    children: React.ReactNode;
};

export function MobileOnly({ children }: Props) {
    return (
        <div className="block md:hidden container-mobile">
            {children}
        </div>
    );
}
