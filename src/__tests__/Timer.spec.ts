/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/svelte";
import Timer from "../components/Timer.svelte";

test("render local timer", () => {
  const { getByText } = render(Timer, { propsString: "Timer" });

  expect(getByText("Timer"));
});
