import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/component/Header";



describe("Header  component", () => {
  test("renders Header component", () => {
    render(
      <Header/>
    );
    const header = screen.getByText("User Management")
    expect(header).toBeInTheDocument()

  });


  
});
