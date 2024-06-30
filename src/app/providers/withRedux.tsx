import { Provider } from "react-redux";
import { IDefaultProps } from "@shared/types";
import { Store } from "@app/model";

export default function ReduxProvider({ children }: IDefaultProps) {
	return <Provider store={Store}>{children}</Provider>;
}
