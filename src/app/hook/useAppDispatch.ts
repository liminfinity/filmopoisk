import { AppDispatch } from "../types";
import { useDispatch } from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
