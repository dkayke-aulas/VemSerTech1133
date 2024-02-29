import { FC, ReactNode } from "react";

interface LabelProps {
    children: ReactNode
    text: string
}

const Label: FC<LabelProps> = (props) => {
    const { children, text } = props

    return (
        <label>
            {text}
            {children}
        </label>
    )
} 

export { Label }