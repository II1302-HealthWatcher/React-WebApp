import { render, screen } from '@testing-library/react';
import Homepage from '../js/presenters/homepage';

test('renders the homepage logo correctly', () => {
    render(<Homepage />)
    const logoElement = screen.getByTestId("logoElement");
    let srcLink = logoElement.getAttribute("src");
    let expectedLink = "android-chrome-512x512.png";
    expect(srcLink).toBe(expectedLink);
});

test('renders the homepage welcome text correctly', () => {
    render(<Homepage />)
    const welcomeTextElement = screen.getByTestId("welcomeTextElement");
    let textContent = welcomeTextElement.textContent
    let expectedTextContent = "Welcome to the HealthWatcher Webapp";
    expect(textContent).toBe(expectedTextContent);
});

test('renders the homepage title correctly', () => {
	render(<Homepage />)
	const titleTextElement = screen.getByTestId("titleTextElement");
	let texttitleContent = titleTextElement.textContent
	let expectedTitleContent = "Health Watcher";
	expect(texttitleContent).toBe(expectedTitleContent);
});