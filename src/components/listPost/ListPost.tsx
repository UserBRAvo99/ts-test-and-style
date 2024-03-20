import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { deletePost, selectPosts } from "../../redux/post/slice";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IPost } from "../../types/types";

interface IChange {
  handleChangePost: (post: IPost) => void;
  isOpen: () => void;
}

const ListPost = ({ isOpen, handleChangePost }: IChange) => {
  // отримуємо пости за допомогою селекторів useAppSelector
  const posts = useAppSelector(selectPosts);
  // оголошуємо діспатч та використовуємо калбєк функцію для кнопки, для видалення посту
  const dispatch = useAppDispatch();

  const handleClickEdit = (post: IPost) => {
    isOpen();
    handleChangePost(post);
  };

  // відмальовуємо пости за допомогою методу масивів
  return (
    <div>
      <ul className="p-2">
        {posts.map((post) => (
          <li
            key={nanoid()}
            className="flex flex-col w-60  mx-auto border border-indigo-500 rounded-md p-2 mb-3"
          >
            <div className="flex flex-col pb-3">
              <h3 className="pb-1">{post.title}</h3>
              <p className="pb-1">{post.body}</p>
            </div>
            <div className="flex w-full justify-between pb-3">
              <button
                onClick={() => handleClickEdit(post)}
                className="p-1 bg-white rounded-md border-2 border-green-500"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => dispatch(deletePost(post.id))}
                className="p-1 bg-white rounded-md border-2 border-red-500"
              >
                <MdDeleteOutline />
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
