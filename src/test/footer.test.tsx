import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/component/footer";




describe("Footer  component", () => {
  test("renders Footer", () => {
    render(
      <Footer/>
    );
    const footer = screen.getByText("© 2024 CRUD Application. All rights reserved.")
    expect(footer).toBeInTheDocument()

  });


  
});
