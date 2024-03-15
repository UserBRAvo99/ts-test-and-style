// використовуємо пакет реакт хук форм (бібліотека)
// так виглядає типізація react-hook-form (треба запам'ятати), якщо в нас додаються поля в формі, треба не забути доповнити інтерфейс, щоб не було помилок
import { SubmitHandler, useForm } from "react-hook-form";

interface IInputsForm {
  title: string;
  body: string;
  author: string;
}

const AddForm = () => {
  //  за допомогою useForm() ми будемо збирати данні з форми, також треба типізувати useForm()
  //  register, handleSubmit - отримання данних
  const { register, handleSubmit } = useForm<IInputsForm>();

  // ініціалізуємо функцію submit яка буде виводити данні з handleSubmit
  // обов'язково треба типізувати данні, напишемо інтерфейс, можливо перенесемо його до файлу types.ts

  // як і вказано в документації бібліотеки react-hook-form, для типізації потрібно використати SubmitHandler<IInputsForm> та в душки вписати наш інтерфейс

  const submit: SubmitHandler<IInputsForm> = (data) => {
    // в консолі ми отримаємо об'єкт з данними які будуть введені в форму. під капотом бібліотека робить контрольовану форму, а так ми отримуємо данні з якими можна далі працювати
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        {/* розпилюємо обєкт зі створенням потрібних полів */}
        <input {...register("title")} type="text" />
        <textarea {...register("body")} />
        <input {...register("author")} type="text" />
        <button>Add post</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default AddForm;
