import { cva, VariantProps, cx } from "class-variance-authority";

const button = cva("", {
    variants: {}
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export default function Button({className, ...props}: ButtonProps) {
    return <button className={button({className})} {...props} />
}