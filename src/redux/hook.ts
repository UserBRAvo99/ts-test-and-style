import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// надалі ми дудемо використовувати useAppDispatch замість useDispatch, та useAppSelector замість useSelector. Це надбудова , яка допомагає покращити та оптимізувати роботу редаксу з тайпскриптом