import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Userform from "@/component/user-from";

const mockSetUsers = jest.fn();
const mockSetSelectedUser = jest.fn();
const setIsFormOpen = jest.fn();

const user = {
  id: 1,
  firstName: "avinash",
  lastName: "Sarkate",
};
describe("UserForm  component", () => {
  test("renders UserForm with initial user data", () => {
    render(
      <Userform
        user={user}
        setUsers={mockSetUsers}
        setSelectedUser={mockSetSelectedUser}
        readOnly={false}
        setIsFormOpen={setIsFormOpen}
      />
    );
  });

  test("renders UserForm with initial user data", () => {
    render(
      <Userform
        user={user}
        setUsers={mockSetUsers}
        setSelectedUser={mockSetSelectedUser}
        readOnly={false}
        setIsFormOpen={setIsFormOpen}
      />
    );
    const FirstName = screen.getByTestId("firstName");
    const lastName = screen.getByTestId("lastName");
    fireEvent.change(FirstName, { target: { value: "Avi" } });
    fireEvent.change(lastName, { target: { value: "sar" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);
    expect(mockSetUsers).toHaveBeenCalledWith(expect.any(Function));
    expect(mockSetSelectedUser).toHaveBeenCalledWith(null);
  });
  test("renders UserForm with initial user data", () => {
    render(
      <Userform
        user={user}
        setUsers={mockSetUsers}
        setSelectedUser={mockSetSelectedUser}
        readOnly={false}
        setIsFormOpen={setIsFormOpen}
      />
    );

    const cancelButton = screen.getByText("cancel");
    fireEvent.click(cancelButton);
    expect(mockSetSelectedUser).toHaveBeenCalledWith(null);
  });
});
