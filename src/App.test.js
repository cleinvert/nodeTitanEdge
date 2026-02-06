// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nodeTitan title', () => {
    render(<App />);
    const titleElement = screen.getByText(/nodeTitan/i);
    expect(titleElement).toBeInTheDocument();
});
