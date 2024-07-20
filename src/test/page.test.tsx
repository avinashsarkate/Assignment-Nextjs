import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";


describe("Home  component", () => {
  test("renders Home with initial user data", () => {
    render(<Home />);
    expect(screen.getByText("User Management")).toBeInTheDocument();
  });

  test("adds a new user", () => {
    render(<Home />);
    fireEvent.click(screen.getByText("Add User"));
    const FirstName = screen.getByTestId("firstName");
    const lastName = screen.getByTestId("lastName");
    fireEvent.change(FirstName, { target: { value: "vishal" } });
    fireEvent.change(lastName, { target: { value: "patel" } });
    fireEvent.click(screen.getByText("Save"));
    expect(screen.getByText("vishal")).toBeInTheDocument();
    expect(screen.getByText("patel")).toBeInTheDocument();
  });

  test("deletes a user", () => {
    render(<Home />);
    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(screen.queryByText("Avinash")).not.toBeInTheDocument();
  });
  test("edits an existing user", () => {
    render(<Home />);
    fireEvent.click(screen.getAllByText("Edit")[0]);
    const FirstName = screen.getByTestId("firstName");
    fireEvent.change(FirstName, { target: { value: "pooja" } });
    fireEvent.click(screen.getByText("Save"));
    expect(screen.getByText("pooja")).toBeInTheDocument();
  });
  test("View an existing user", () => {
    render(<Home />);
    fireEvent.click(screen.getAllByText("View")[0]);
    const FirstName = screen.getByTestId("firstName");
    expect(FirstName).toHaveAttribute("readOnly");
  });
});
