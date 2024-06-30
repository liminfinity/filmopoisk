import Button from "../Button";
import Modal from "./component";
import { useModal } from "@shared/hook";

export default function MockProvider() {
	const { close, open, isOpen } = useModal();
	return (
		<>
			<Button variant="filled" onClick={open}>
				Открыть
			</Button>
			<Modal isOpen={isOpen} onClose={close} title="Модалка">
				<div>Привет, мир!</div>
			</Modal>
		</>
	);
}
