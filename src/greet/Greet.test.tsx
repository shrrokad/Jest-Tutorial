import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test('Greet renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('greet');  //i = case insensitive
    expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText('greet John');
    expect(textElement).toBeInTheDocument();
})