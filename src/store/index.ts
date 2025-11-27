import { createStore } from "redux";
import { rootReducer } from './root-reducer';
import { useDispatch } from "react-redux";



export const store = createStore(
    rootReducer
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

