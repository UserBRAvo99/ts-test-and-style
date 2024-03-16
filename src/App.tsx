import { nanoid } from "@reduxjs/toolkit";
import "./App.css";
import AddForm from "./components/addForm/AddForm";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { deletePost, selectPosts } from "./redux/post/slice";

function App() {
  // отримуємо пости за допомогою селекторів useAppSelector
  const posts = useAppSelector(selectPosts);
  // оголошуємо діспатч та використовуємо калбєк функцію для кнопки, для видалення посту
  const dispatch = useAppDispatch();

  // відмальовуємо пости (поки що не використовуємо інший компонент, це погана практика та для прикладу можна)))))))))))
  return (
    <>
      <AddForm />
      <div>
        <ul>
          {posts.map((post) => (
            <li key={nanoid()}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => dispatch(deletePost(post.id))}>
                Delete
              </button>
              <ul>
                <li>{post.author}</li>
                <li>{post.createdAt}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
