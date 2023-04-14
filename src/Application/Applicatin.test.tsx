import Application from "./Application";
import {render, screen} from "@testing-library/react";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application/>);

        // getByRole

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
            name: 'BioDescription',
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();

        // getBylabelText

        const nameElement = screen.getByLabelText('Name');
        expect(nameElement).toBeInTheDocument();

        const bioElement1 = screen.getByLabelText('BioDescription');
        expect(bioElement1).toBeInTheDocument();

        // getByPlaceholderText

        const nameElement1 = screen.getByPlaceholderText('Please Enter Your Name');
        expect(nameElement1).toBeInTheDocument();

       // getByText

        const textElement1 = screen.getByText('All fields are mandatory');
        expect(textElement1).toBeInTheDocument();

        // getByDisplayValue

        const nameElement2 = screen.getByDisplayValue('Shruti');
        expect(nameElement2).toBeInTheDocument();

        // getByAltText

        const imageElement = screen.getByAltText('Image');
        expect(imageElement).toBeInTheDocument();

        // getByTitle

        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        // getByTestId

        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();
    });
})