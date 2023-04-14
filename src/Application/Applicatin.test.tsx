import Application from "./Application";
import {render, screen} from "@testing-library/react";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application/>);

        const pageHadingElement = screen.getByRole('heading', {
            // name: 'Job Appliction from',
            level: 1,
            // hidden: true,
        });
        expect(pageHadingElement).toBeInTheDocument();

        const sectionHeadingElement = screen.getByRole('heading', {
            // name: 'Section 1',
            level: 2,
        });
        expect(sectionHeadingElement).toBeInTheDocument();

        const textElement = screen.getByRole('textbox', {
            name: 'Name',
        });
        expect(textElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio',
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    });
})