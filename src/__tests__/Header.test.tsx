import { render, screen } from '@testing-library/react'
import Header from "../components/Header";
test("Testing Header component", () => {
  render(<Header />);

  const element = screen.getByText(/to do list/i);

  expect(element).toBeInTheDocument();
})
