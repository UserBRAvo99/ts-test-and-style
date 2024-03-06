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
})

export const postsReducer = slice.reducer