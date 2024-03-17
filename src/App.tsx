import "./App.css";
import AddForm from "./components/addForm/AddForm";
import ListPost from "./components/listPost/ListPost";

function App() {
  return (
    <div className="flex flex-col w-200 px-20 py-10">
      <AddForm />
      <ListPost />
    </div>
  );
}

export default App;
