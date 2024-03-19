import { useState } from "react";
import "./App.css";
import AddForm from "./components/addForm/AddForm";
import ChangePost from "./components/changePost/ChangePost";
import ListPost from "./components/listPost/ListPost";
import Modal from "./components/modal/Modal";
import { useAppSelector } from "./redux/hook";
import { selectModal } from "./redux/post/slice";
import { IPost } from "./types/types";

interface IAppTypes {
  isOpen: boolean;
  handleChangePost: (post: IPost) => void;
}

function App() {
  const [post, setPost] = useState<IPost | undefined>();
  const { isOpen } = useAppSelector<boolean>(selectModal);

  const handleChangePost = (item: IPost) => {
    setPost(item);
  };
  return (
    <div className="relative">
      <div className="flex flex-col w-200 px-20 py-10">
        <AddForm />
        <ListPost handleChangePost={handleChangePost} />
      </div>
      {isOpen && (
        <Modal>
          <ChangePost post={post} />
        </Modal>
      )}
    </div>
  );
}

export default App;
