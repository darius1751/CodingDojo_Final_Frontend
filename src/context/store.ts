import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice'

export const store = configureStore({
    reducer: {
        userReducer: reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type UserDispatch = typeof store.dispatch