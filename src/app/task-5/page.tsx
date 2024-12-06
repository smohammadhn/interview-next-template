/*
Task Description:

Implement the `randomItemPicker` function.
It takes an array as input and returns a random item from the array.

Time estimation: 8 mins

*/

import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Todo {
  id: number;
  title: string;
  completed?: boolean;
  description?: string;
}

type editUserDto = ???; // 👉 should be a User type but all fields are optional
type requiredTodoDto = ???; // 👉 only select the fields that are required for the editTodo endpoint

export default async function PageTaskFive() {
  // Bonus point: is there a way to make these two calls in parallel?
  const users = await axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data);

  const todos = await axios
    .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.data);

  // implement the `randomItemPicker` function here: 👇

  // ----------

  return (
    <main>
      <div>
        A random user:
        {randomItemPicker(users)?.name}
      </div>
      <div>
        A random todo:
        {randomItemPicker(todos)?.title}
      </div>
    </main>
  );
}
