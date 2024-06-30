import classNames from "classnames";
import Button from "../Button";
import styles from "./component.module.scss"
import { IModalProps } from "./component.props";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";


export default function Modal({
  isOpen = false,
  onClose,
  title,
  className,
  children
}: IModalProps) {
  const modalRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const inertAll = (isOpen: boolean, isUnmounted = false) => {
      if (!modalRef.current && !isUnmounted) return
      for (const el of document.body.children) {
        if (el !== modalRef.current && el instanceof HTMLElement) el.inert = isOpen
      }
    }
    inertAll(isOpen)
    return () => inertAll(false, true)

  }, [isOpen])

  return createPortal((
    <article
      ref={modalRef} 
      className={classNames(styles.default, { [styles.open]: isOpen} , className)} 
      onClick={onClose}
    > 
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <header className={classNames(styles.header, { [styles.noTitle]: !title })}>
          {title && <span className={styles.title}>{title}</span>}
          <Button className={styles.close} variant="icon" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.7074 18.2925C19.8004 18.3854 19.8741 18.4957 19.9243 18.6171C19.9746 18.7385 20.0005 18.8686 20.0005 19C20.0005 19.1314 19.9746 19.2615 19.9243 19.3829C19.8741 19.5043 19.8004 19.6146 19.7074 19.7075C19.6145 19.8004 19.5042 19.8741 19.3828 19.9244C19.2614 19.9747 19.1313 20.0006 18.9999 20.0006C18.8686 20.0006 18.7384 19.9747 18.6171 19.9244C18.4957 19.8741 18.3854 19.8004 18.2924 19.7075L9.99995 11.4138L1.70745 19.7075C1.5198 19.8951 1.26531 20.0006 0.999946 20.0006C0.734582 20.0006 0.480086 19.8951 0.292446 19.7075C0.104805 19.5199 -0.000610346 19.2654 -0.000610352 19C-0.000610357 18.7346 0.104805 18.4801 0.292446 18.2925L8.5862 10L0.292446 1.70751C0.104805 1.51987 -0.000610352 1.26537 -0.000610352 1.00001C-0.000610352 0.734643 0.104805 0.480147 0.292446 0.292507C0.480086 0.104866 0.734582 -0.000549316 0.999946 -0.000549316C1.26531 -0.000549316 1.5198 0.104866 1.70745 0.292507L9.99995 8.58626L18.2924 0.292507C18.4801 0.104866 18.7346 -0.000549322 18.9999 -0.000549316C19.2653 -0.000549311 19.5198 0.104866 19.7074 0.292507C19.8951 0.480147 20.0005 0.734643 20.0005 1.00001C20.0005 1.26537 19.8951 1.51987 19.7074 1.70751L11.4137 10L19.7074 18.2925Z" fill="#ABABAB"/>
            </svg>
          </Button>
        </header>
        <main className={styles.content}>
          {children}
        </main>
      </div>
      
    </article>
  ), document.body)
}
