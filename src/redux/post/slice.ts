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

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    selectors: {
        selectPost: (state) => state.items
    }
})

export const postsReducer = slice.reducer