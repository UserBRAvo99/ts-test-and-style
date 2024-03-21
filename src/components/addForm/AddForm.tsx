// використовуємо пакет реакт хук форм (бібліотека)
// так виглядає типізація react-hook-form (треба запам'ятати), якщо в нас додаються поля в формі, треба не забути доповнити інтерфейс, щоб не було помилок
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hook";
import { addPost } from "../../redux/post/slice";
import { nanoid } from "@reduxjs/toolkit";
// moment бібліотека для роботи з часом, можна вказувати різні формати для додавання дати в постах, тудушках чи в інших варіантах (формат можна корегувати - детальніше в документації)
import moment from "moment";

interface IInputsForm {
  title: string;
  body: string;
  author: string;
}

const AddForm = () => {
  //  за допомогою useForm() ми будемо збирати данні з форми, також треба типізувати useForm()
  //  register, handleSubmit - отримання данних
  const { register, handleSubmit } = useForm<IInputsForm>();

  // додаємо діспатч (відправка данних до редаксу)
  // спочатку оголошуємо змінну діспатч з урахуванням що в тайпскрипті ми використовуємо useAppDispatch()
  // така ініціалізація - хороша праутика , можна і простіше, але не треба(!!!)
  const dispatch = useAppDispatch();

  // ініціалізуємо функцію submit яка буде виводити данні з handleSubmit
  // обов'язково треба типізувати данні, напишемо інтерфейс, можливо перенесемо його до файлу types.ts

  // як і вказано в документації бібліотеки react-hook-form, для типізації потрібно використати SubmitHandler<IInputsForm> та в душки вписати наш інтерфейс

  const submit: SubmitHandler<IInputsForm> = (data) => {
    // в консолі ми отримаємо об'єкт з данними які будуть введені в форму. під капотом бібліотека робить контрольовану форму, а так ми отримуємо данні з якими можна далі працювати
    // console.log(data);

    // увожно підготовлюємо данні які відправляємо , треба додати всі портбні поля для проходження типізації - IPost
    // змінна post - буде доповнювати форму потрібнити данними перед відправкою в редакс
    const post = {
      ...data,
      id: nanoid(),
      createdAt: moment().format("DD.MM.YY"),
      edit: false,
    };
    dispatch(addPost(post));
  };
  return (
    <div className="mx-auto bg-emerald-500 p-5 rounded-md">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex w-56 h-auto flex-col gap-2"
      >
        {/* розпилюємо обєкт зі створенням потрібних полів */}
        <div className="flex flex-col gap-2 ">
          <input
            required
            {...register("title")}
            type="text"
            placeholder="Title"
            className="border border-indigo-500 rounded-md p-1"
          />
          <textarea
            required
            {...register("body")}
            placeholder="Text"
            className="border border-indigo-500 rounded-md p-1 resize-none"
          />
          <input
            required
            {...register("author")}
            type="text"
            placeholder="Author"
            className="border border-indigo-500 rounded-md p-1"
          />
        </div>
        <div className="flex w-full justify-between">
          <button className="p-1 bg-white rounded-md">Add post</button>
          <button type="reset" className="p-1 bg-white rounded-md">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
