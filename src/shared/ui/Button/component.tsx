import classNames from "classnames";
import { IButtonProps } from "./component.props";
import styles from './component.module.scss'
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
  variant = 'text', 
  children, 
  className, 
  ...props
}, ref) => {

  return (
    <button
        ref={ref}
        className={
            classNames(styles.default, styles[variant], className)
        }
        {...props}
    >
        {children}
    </button>
  )
})

export default Button