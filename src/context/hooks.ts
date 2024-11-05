import { useDispatch, useSelector } from 'react-redux'
import type { RootState, UserDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<UserDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()