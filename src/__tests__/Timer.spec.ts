/**
 * @jest-environment jsdom
 */
// import { render } from "@testing-library/svelte";
// import Timer from "../components/Timer.svelte";

// test("render local timer", () => {
//   const { getByText, container, getByTestId } = render(Timer, {
//     propsString: "Timer",
//   });
//   const btn = document.querySelector("button");
//   const para = container.querySelector("p");
//   const cancel = getByTestId("cancel");

//   expect(getByText("Timer"));
//   expect(btn).not.toBeNull();
//   expect(cancel);
//   expect(para).not.toBeNull();
// });

import { render } from "@testing-library/svelte";
import Timer from "../components/Timer.svelte";

test("should match snapshot", () => {
  const { container } = render(Timer);

  expect(container).toMatchSnapshot();
});
