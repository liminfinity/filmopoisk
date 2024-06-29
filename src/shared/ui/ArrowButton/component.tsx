import classNames from "classnames";
import { IArrowButtonProps } from "./component.props";
import styles from './component.module.scss'
import Button from "../Button";


export default function ArrowButton({
  className,
  direction = 'right',
  ...props
}: IArrowButtonProps) {
  return (
    <Button
      variant="icon"
      className={classNames(styles.default, className)}
      {...props}
    >
      <svg className={classNames(styles.arrow, styles[direction])} width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.88003 23.56C1.62669 23.56 1.37336 23.4667 1.17336 23.2667C0.786695 22.88 0.786695 22.24 1.17336 21.8534L9.86669 13.16C10.5067 12.52 10.5067 11.48 9.86669 10.84L1.17336 2.14669C0.786695 1.76003 0.786695 1.12003 1.17336 0.733359C1.56003 0.346693 2.20003 0.346693 2.58669 0.733359L11.28 9.42669C11.96 10.1067 12.3467 11.0267 12.3467 12C12.3467 12.9734 11.9734 13.8934 11.28 14.5734L2.58669 23.2667C2.38669 23.4534 2.13336 23.56 1.88003 23.56Z" fill="#1B1F23"/>
      </svg>
    </Button>
  )
}