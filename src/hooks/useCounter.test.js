/* eslint-disable no-undef */

import { renderHook, act } from "@testing-library/react"; // renderHook => access custom hook in test cases, act => access action perform and access function in the custom hook
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("render default initial count 0", () => {
    const { result } = renderHook(useCounter); // Arrange
    expect(result.current.count).toBe(0); // Assert
  });
  it("render initial count send 10", () => {
    const { result } = renderHook(() => useCounter(10)); // Arrange
    expect(result.current.count).toBe(10); // Assert
  });
  it("render count increment", () => {
    const { result } = renderHook(useCounter); // Arrange
    act(() => result.current.onIncrement()); // Act
    expect(result.current.count).toBe(1); // Assert
  });
  it("render count decrement", () => {
    const { result } = renderHook(() => useCounter(10)); // Arrange
    act(() => result.current.onDecrement()); // Act
    expect(result.current.count).toBe(9); // Assert
  });
});
