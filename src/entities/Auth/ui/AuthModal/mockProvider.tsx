import { Button } from "@shared/ui"
import AuthModal from "./component"

import { useModal } from "@shared/hook"

export default function MockProvider() {
    const {close, open, isOpen} = useModal()
    return (
      <>
        <Button variant="filled" onClick={open}>Войти</Button>
        <AuthModal
          isOpen={isOpen}
          onClose={close}
        />
      </>
    )
}