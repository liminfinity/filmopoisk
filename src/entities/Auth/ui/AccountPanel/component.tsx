import { Button } from "@shared/ui";
import { IAccountPanelProps } from "./component.props";
import styles from "./component.module.scss";
import classNames from "classnames";
import { useAppDispatch } from "@app/hook";
import { actions } from "@entities/Auth/model";

export default function AccountPanel({ className }: IAccountPanelProps) {
	const dispatch = useAppDispatch();
	const logout = () => dispatch(actions.logout());

	return (
		<article className={classNames(styles.default, className)}>
			<div className={styles.avatar}>
				<svg
					width="23"
					height="23"
					viewBox="0 0 26 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5.33333 8.33335C5.33333 12.56 8.77333 16 13 16C17.2267 16 20.6667 12.56 20.6667 8.33335C20.6667 4.10669 17.2267 0.666687 13 0.666687C8.77333 0.666687 5.33333 4.10669 5.33333 8.33335ZM7.33333 8.33335C7.33333 5.21335 9.88 2.66669 13 2.66669C16.12 2.66669 18.6667 5.21335 18.6667 8.33335C18.6667 11.4534 16.12 14 13 14C9.88 14 7.33333 11.4534 7.33333 8.33335ZM23.4535 28.3334C23.4535 28.88 23.9069 29.3334 24.4535 29.3334C25.0002 29.3334 25.4535 28.88 25.4535 28.3334C25.4535 22.64 19.8669 18 13.0002 18C6.13354 18 0.546875 22.64 0.546875 28.3334C0.546875 28.88 1.00021 29.3334 1.54688 29.3334C2.09354 29.3334 2.54688 28.88 2.54688 28.3334C2.54688 23.7334 7.2402 20 13.0002 20C18.7602 20 23.4535 23.7334 23.4535 28.3334Z"
						fill="#333333"
					/>
				</svg>
			</div>
			<Button variant="outlined" onClick={logout}>
				Выйти
			</Button>
		</article>
	);
}
