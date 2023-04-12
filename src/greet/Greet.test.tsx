import { render, screen } from "@testing-library/react";
import Greet from "./Greet";


describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/greet/i);  //i = case insensitive
        expect(textElement).toBeInTheDocument();
    });

})
// describe('Nested', () => {
//     test('renders a name', () => {
//         render(<Greet name="John" />);
//         const textElement = screen.getByText('greet John');
//         expect(textElement).toBeInTheDocument();
//     })
// })