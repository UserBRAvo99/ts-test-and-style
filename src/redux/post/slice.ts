import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../types/types";

// тиізуємо стейт за допомогою інтерфейсу
interface IPostSlice {
  items: IPost[];
  modalIsOpen: boolean;
}

// створюємо initialState та типізуємо його
const initialState: IPostSlice = {
  items: [],
  modalIsOpen: false,
};
//  створюємо стандартний слайс з reducers та selectors
const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //   додавання одного поста
    // також треба типізувати action.payload - щоб зрозуміти що приходить
    addPost: (state, action: PayloadAction<IPost>) => {
      state.items.push(action.payload);
    },
    // обов'язково типізуєми actions - PayloadAction<в цих дужках треба вказати тип данних які мають бути типізованими>
    deletePost: (state, actions: PayloadAction<string>) => {
      state.items = state.items.filter((post) => post.id !== actions.payload);
    },
  },
  selectors: {
    selectPosts: (state) => state.items,
    selectModal: (state) => state.modalIsOpen,
  },
});
// експортуємо редюсери
export const postsReducer = slice.reducer;
// експортуємо селектори
export const { selectPosts, selectModal } = slice.selectors;
// експортуємо action (дії)
export const { addPost, deletePost } = slice.actions;
