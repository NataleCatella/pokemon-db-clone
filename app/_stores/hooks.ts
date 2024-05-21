import {useSelector, useDispatch} from "react-redux";
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from './store';

export const useAppDispatch: () => AppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector.withTypes<RootState>();