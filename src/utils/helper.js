import axios from "axios";

export const add = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") return 0;
  return num1 + num2;
};

export const reverseString = (input) => {
  return input.split("").reverse().join("");
};

export const TODO_API = "https://jsonplaceholder.typicode.com/todos";

export const languageArray = ["HTML", "JS", "CSS", "React"];

export const userObject = {
  name: "Arun",
  mobile: 9400247717,
  work: "React Dev",
};

export const fetchUser = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/todos/1");
  return response.data;
};

export const isAuthenticated = (isLogged = false) => {
  if (isLogged) return "Welcome AJOIN";
  throw new Error("User is not Logged in");
};
