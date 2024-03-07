import { createSlice } from "@reduxjs/toolkit"
import { IPost } from "../../types/types"

// тиізуємо стейт за допомогою інтерфейсу
interface IPostSlice {
    items: IPost[]
}


// створюємо initialState та типізуємо його
const initialState: IPostSlice = {
    items: []
}
//  створюємо стандартний слайс з reducers та selectors
const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    selectors: {
        selectPosts: (state) => state.items
    }
})
// експортуємо редюсери
export const postsReducer = slice.reducer
// експортуємо селектори
export const {selectPosts} = slice.selectors