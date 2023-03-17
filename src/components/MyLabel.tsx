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

export const MyLabel = ({
    label = "No label",
    size = "normal",
    allCaps = false,
    color = "primary",
    fontColor
}: Props) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{color: fontColor}}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};

export default MyLabel;
