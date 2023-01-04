import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, UserState } from "../store/store";
import { getToken, loginUser } from "../store/reducers/userSlicer";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<UserState> = useSelector;
export const loginUserAndRefreshToken = (dispatch: AppDispatch, auth: any) => {
  dispatch(loginUser({ auth })).then(() => {
    dispatch(getToken({ auth }));
  });
};
