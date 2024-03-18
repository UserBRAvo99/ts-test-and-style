import "./App.css";
import AddForm from "./components/addForm/AddForm";
import ListPost from "./components/listPost/ListPost";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="relative">
      <div className="flex flex-col w-200 px-20 py-10">
        <AddForm />
        <ListPost />
      </div>
      <Modal />
    </div>
  );
}

export default App;
