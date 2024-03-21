import { useState } from "react";
import "./App.css";
import AddForm from "./components/addForm/AddForm";
import ChangePost from "./components/changePost/ChangePost";
import ListPost from "./components/listPost/ListPost";
import Modal from "./components/modal/Modal";
import { IPost } from "./types/types";

function App() {
  const [post, setPost] = useState<IPost>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleChangePost = (item: IPost) => {
    setPost(item);
  };
  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <div className="relative">
      <div className="flex flex-col w-200 px-20 py-10">
        <AddForm />
        <ListPost isOpen={handleModal} handleChangePost={handleChangePost} />
      </div>
      {isOpenModal && post && (
        <Modal isOpen={handleModal}>
          <ChangePost isOpen={handleModal} changePost={post} />
        </Modal>
      )}
    </div>
  );
}

export default App;
