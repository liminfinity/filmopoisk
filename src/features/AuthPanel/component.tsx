import { IAuthPanelProps } from './component.props'
import { AccountPanel, AuthModal } from '@entities/Auth/ui'
import { useModal } from '@shared/hook'
import { Button } from '@shared/ui'
import { useIsAuth } from '@entities/Auth/hook'

export default function AuthPanel({
  className
}: IAuthPanelProps) {
  const {isOpen, close, open} = useModal()
  const isAuth = useIsAuth()

  return (
    <div className={className}>
      {isAuth && <AccountPanel/>}
      {!isAuth && (
        <>
          <Button
            variant="filled" 
            onClick={open}
          >
            Войти
          </Button>
          <AuthModal
            isOpen={isOpen}
            onClose={close}
          />
        </>
      )}
    </div>
  )
}