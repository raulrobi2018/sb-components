/// <reference types="react" />
import "./mylabel.css";
export interface Props {
    /**
     * Content of the label
     */
    label: string;
    /**
     * What size to use
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Convert the content to UpperCase
     */
    allCaps?: boolean;
    /**
     * Color of the content
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Custom font color
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
