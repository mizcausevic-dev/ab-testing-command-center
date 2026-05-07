import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('A/B Testing Command Center', () => {
  it('renders the main experimentation title and decision queue', () => {
    render(<App />);

    expect(screen.getByText(/active experiments, segment lift/i)).toBeTruthy();
    expect(screen.getByText(/experiment portfolio snapshots/i)).toBeTruthy();
    expect(screen.getByText(/ship, hold, expand, and rerun actions/i)).toBeTruthy();
  });
});
