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
      <ul className="p-2">
        {posts.map((post) => (
          <li
            key={nanoid()}
            className="flex flex-col w-60  mx-auto border border-indigo-500 rounded-md p-2"
          >
            <div className="flex flex-col pb-3">
              <h3 className="pb-1">{post.title}</h3>
              <p className="pb-1">{post.body}</p>
            </div>
            <div className="flex w-full justify-between pb-3">
              <button className="p-1 bg-white rounded-md border-2 border-green-500">
                Change
              </button>
              <button
                onClick={() => dispatch(deletePost(post.id))}
                className="p-1 bg-white rounded-md border-2 border-red-500"
              >
                Delete
              </button>
            </div>
            <ul className="flex p-1 justify-between">
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
