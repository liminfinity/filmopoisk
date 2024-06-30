import { useEffect } from "react";
import { useSelector } from "react-redux";
import { actions, selectors } from "../model";
import { useAppDispatch } from "@app/hook";

export function useIsAuth() {
  const isAuth = useSelector(selectors.isAuth)
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!isAuth) {
      dispatch(actions.setIsAuth(!!token));
    }
  }, [isAuth, dispatch]);

  return isAuth;
}
