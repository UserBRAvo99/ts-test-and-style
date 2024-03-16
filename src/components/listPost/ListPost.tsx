import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { deletePost, selectPosts } from "../../redux/post/slice";

const ListPost = () => {
  // отримуємо пости за допомогою селекторів useAppSelector
  const posts = useAppSelector(selectPosts);
  // оголошуємо діспатч та використовуємо калбєк функцію для кнопки, для видалення посту
  const dispatch = useAppDispatch();

  // відмальовуємо пости за допомогою методу масивів
  return (
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
  );
};

export default ListPost;
