import classNames from "classnames";
import { IButtonProps } from "./component.props";
import styles from './component.module.scss'

export default function Button({
    variant = 'filled',
    children,
    className,
    ...props
}: IButtonProps) {
  return (
    <button
        className={
            classNames(styles.default, styles[variant], className)
        }
        {...props}
    >
        {children}
    </button>
  )
}