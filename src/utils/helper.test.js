import { describe, it, expect } from "vitest";
import {
  TODO_API,
  add,
  fetchUser,
  isAuthenticated,
  languageArray,
  reverseString,
  userObject,
} from "./helper";

describe("helper add function", () => {
  it("1+2=3", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("'1'+2=0", () => {
    expect(add("1", 2)).toBe(0);
  });

  it("[1]+[2]=0", () => {
    expect(add([1], [2])).toBe(0);
  });
});

describe("reverseString()", () => {
  it("Check if it is defined", () => {
    expect(reverseString).toBeDefined();
  });
  it("Check if string reverses properly", () => {
    expect(reverseString("123123")).toBe("321321");
  });
});

describe("TODO_API URL", () => {
  it("Check if url is correct", () => {
    expect(TODO_API).toBe("https://jsonplaceholder.typicode.com/todos");
  });
});

describe("language Array", () => {
  it("Check if languages has 4 items", () => {
    expect(languageArray).toEqual(["HTML", "JS", "CSS", "React"]); //toBe() not work in array
  });
});

describe("user Object", () => {
  it("Check if userObject has 3 property", () => {
    expect(userObject).toEqual({
      name: "Arun",
      mobile: 9400247717,
      work: "React Dev",
    }); //toBe() not work in object
  });
  it("Check if userObject has name property", () => {
    expect(userObject).toHaveProperty("name");
  });
});

describe("API", () => {
  it("Check if API returns todo data", async () => {
    const data = await fetchUser();
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("title");
    expect(data).toHaveProperty("completed");
  }, 10000); // timeout 10000s use mswjs.io
});

describe("isAuthenticated", () => {
  it("Check if user is logged in?", () => {
    expect(isAuthenticated(true)).toBeTruthy(); // not empty,0,false
  });
  it("Check if user is logged not in?", () => {
    expect(() => isAuthenticated(false)).toThrow(); // throw error use, callback fun add in before call
  });
});
