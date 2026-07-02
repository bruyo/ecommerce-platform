import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mock axios entirely
jest.mock('axios');

beforeEach(() => {
  // Return fake product data instead of hitting real API
  axios.get.mockResolvedValue({
    data: [{ id: 1, name: 'Laptop', price: 999 }]
  });
});

test('renders e-commerce store heading', () => {
  render(<App />);
  expect(screen.getByText(/e-commerce store/i)).toBeInTheDocument();
});

test('renders login section', () => {
  render(<App />);
  expect(screen.getByText(/user login/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
});

test('renders products section', () => {
  render(<App />);
  expect(screen.getByText(/products/i)).toBeInTheDocument();
});

test('renders place order section', () => {
  render(<App />);
  expect(screen.getByText(/place order/i)).toBeInTheDocument();
  expect(screen.getByText(/order laptop/i)).toBeInTheDocument();
});
