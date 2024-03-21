import { SubmitHandler, useForm } from "react-hook-form";
import { IPost } from "../../types/types";
import { useAppDispatch } from "../../redux/hook";
import { changePostEdit } from "../../redux/post/slice";
import { FaUserCircle } from "react-icons/fa";
import moment from "moment";

interface IChangePost {
  isOpen: () => void;
  changePost: IPost;
}

const ChangePost = ({ isOpen, changePost }: IChangePost) => {
  const { register, handleSubmit } = useForm<IPost>();

  const dispatch = useAppDispatch();

  const submit: SubmitHandler<IPost> = (data) => {
    const newPost = {
      ...data,
      author: changePost.author,
      id: changePost.id,
      createdAt: moment().format("DD.MM.YY"),
      edit: true,
    };
    dispatch(changePostEdit(newPost));
    isOpen();
  };

  return (
    <div className="p-5">
      <div className="flex items-center py-3">
        <FaUserCircle className="w-10 h-10 mr-5" />
        <h3>{changePost.author}</h3>
      </div>
      <form onSubmit={handleSubmit(submit)} className="py-2">
        <textarea
          {...register("title")}
          defaultValue={changePost.title}
          className="resize-none border border-indigo-500 rounded-md p-1 w-full"
        />
        <textarea
          {...register("body")}
          defaultValue={changePost.body}
          className="resize-none border border-indigo-500 rounded-md p-1 w-full mb-3"
        />
        <div className="flex justify-center">
          <button className="p-1 px-3 border border-black bg-white rounded-md ">
            Edit
          </button>
        </div>
      </form>
      <ul className="flex p-1 justify-between"></ul>
    </div>
  );
};

export default ChangePost;
