import React from "react";

export type NavLink = {
    label: string;
    href: string;
    external?: boolean; // optional — for future use (e.g. external links)
    icon?: React.ReactNode; // optional — if you ever add icons
};

export type LanguageOption = {
    label: string;
    code: string;
};
