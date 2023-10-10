import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
describe("button ui", () => {
  it("should return true", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
