import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <input type="number" placeholder="Habit Nickname" name="usersId" ref={register} />
    </div>
    <div>
      <input type="number" placeholder="Habits List" name="habitsId" ref={register({maxLength: 80})} />
    </div>
    <div>
      <input type="text" placeholder="Notes" name="memo" ref={register} />
    </div>
    <div></div>
      <select name="routineId" ref={register({ required: true })}>
        <option value="1">1</option>
        <option value=" 2"> 2</option>
        <option value=" 3"> 3</option>
        <option value=" 4"> 4</option>
        <option value=" 5"> 5</option>
        <option value=" 6"> 6</option>
        <option value=" 7"> 7</option>
        <option value=" 8"> 8</option>
        <option value=" 9"> 9</option>
        <option value=" 10"> 10</option>
      </select>
      <input type="text" placeholder="How Often?" name="repetition" ref={register} />
      <input type="date" placeholder="startDate" name="startDate" ref={register({required: true, maxLength: 11, pattern: /^\S+@\S+$/i})} />
      <input type="date" placeholder="endDate" name="endDate" ref={register({required: true, maxLength: 12, pattern: /^\S+@\S+$/i})} />

      <input type="submit" />
    </form>
  );
}