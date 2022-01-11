/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/svelte";
import { sum } from "../utils/sum";

test("should 10 + 20 = 30", () => {
  expect(sum(10, 20)).toBe(30);
});
