import { IAuthModalProps } from "./component.props";
import { Button, Input, Modal } from "@shared/ui";
import { useImmer } from "use-immer";
import { ICredentials } from "@entities/Auth/types";
import { ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "@app/hook";
import { actions } from "@entities/Auth/model";
import { isFulfilled } from "@shared/lib";
import styles from "./component.module.scss";

export default function AuthModal({ onClose, ...props }: IAuthModalProps) {
	const [credentials, setCredentials] = useImmer<ICredentials>({
		username: "",
		password: "",
	});
	const dispatch = useAppDispatch();

	const handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement & { name: keyof ICredentials }>) => {
		setCredentials(draft => {
			draft[name] = value;
		});
	};

	const login = async (e: FormEvent) => {
		e.preventDefault();

		const res = await dispatch(actions.login(credentials));

		if (isFulfilled(res)) {
			onClose && onClose();
		}
	};
	return (
		<Modal onClose={onClose} title="Авторизация" {...props}>
			<form onSubmit={login} className={styles.form}>
				<Input
					label="Логин"
					required
					placeholder="Введите логин"
					type="text"
					name="username"
					value={credentials.username}
					onChange={handleChange}
				/>
				<Input
					label="Пароль"
					required
					placeholder="Введите пароль"
					type="password"
					name="password"
					value={credentials.password}
					onChange={handleChange}
				/>
				<div className={styles.buttons}>
					<Button variant="filled">Войти</Button>
					<Button variant="outlined" onClick={onClose}>
						Отменить
					</Button>
				</div>
			</form>
		</Modal>
	);
}
