/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/svelte";
import App from "../App.svelte";

test("render App component", () => {
  const results = render(App, { name: "world" });

  expect(() => results.getByText("Hello world!")).not.toThrow();
});
