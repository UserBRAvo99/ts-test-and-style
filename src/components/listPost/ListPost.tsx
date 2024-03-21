import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { deletePost, selectPosts } from "../../redux/post/slice";
import { FaEdit, FaUserCircle } from "react-icons/fa";
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
            className="flex flex-col w-64  mx-auto border border-indigo-500 rounded-md p-3 mb-3"
          >
            <div className="flex flex-col pb-3">
              <div className="flex items-center py-2">
                <FaUserCircle className="w-10 h-10 mr-5" />
                <h3>{post.author}</h3>
              </div>
              <div>
                <h3 className="pb-2 text-2xl">{post.title}</h3>
                <p className="pb-4 text-lg">{post.body}</p>
              </div>
            </div>
            <div className="flex w-full justify-between pb-5">
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
            <div className="flex justify-end">
              {post.edit && <FaEdit className="mr-2 fill-gray-400" />}
              <span className="text-sm text-stone-400">{post.createdAt}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPost;
