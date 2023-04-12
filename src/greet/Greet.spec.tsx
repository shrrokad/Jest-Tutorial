import { render, screen } from "@testing-library/react";
import Greet from "./Greet";



// fit = test.only
// xit = test.skip
describe('Greet', () => {
    xit('renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText('greet');  //i = case insensitive
        expect(textElement).toBeInTheDocument();
    });

})
describe('Nested', () => {
    it('renders a name', () => {
        render(<Greet name="John" />);
        const textElement = screen.getByText('greet John');
        expect(textElement).toBeInTheDocument();
    })
})