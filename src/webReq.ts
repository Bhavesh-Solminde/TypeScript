import axios, { AxiosResponse, isAxiosError } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchdata = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response.data);
  } catch (error: any) {
    if (isAxiosError(error)) {
      console.log(error.message);
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }
};

fetchdata();

//
const fetchData2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error(`Http error ${response.status}`);
  }
  const data: Todo = await response.json();
};
