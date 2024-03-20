import { SubmitHandler, useForm } from "react-hook-form";
import { IPost } from "../../types/types";
import { useAppDispatch } from "../../redux/hook";
import { changePostEdit } from "../../redux/post/slice";

interface IChangePost {
  isOpen: () => void;
  changePost: IPost;
}

interface IInputsForm {
  title: string;
  body: string;
  author: string;
  id: string;
  createdAt: string;
}

const ChangePost = ({ isOpen, changePost }: IChangePost) => {
  const { register, handleSubmit } = useForm<IInputsForm>();

  const dispatch = useAppDispatch();

  const submit: SubmitHandler<IInputsForm> = (data) => {
    const newPost = {
      ...data,
      author: changePost.author,
      id: changePost.id,
      createdAt: changePost.createdAt,
    };
    dispatch(changePostEdit(newPost));
    isOpen();
  };

  return (
    <div>
      <h3 className="pb-1">{changePost.title}</h3>
      <form onSubmit={handleSubmit(submit)}>
        <textarea {...register("title")} defaultValue={changePost.title} />
        <textarea {...register("body")} defaultValue={changePost.body} />
        <button>Click</button>
      </form>
      <ul className="flex p-1 justify-between">
        <li>{changePost.author}</li>
        <li>{changePost.createdAt}</li>
      </ul>
    </div>
  );
};

export default ChangePost;

// { post }: IPost
