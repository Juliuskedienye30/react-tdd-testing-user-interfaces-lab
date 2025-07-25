// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';


test("displays a top-level heading with the text `Hi, I'm`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of the user with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/portrait of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining(".jpg"));
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const subHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(subHeading).toBeInTheDocument();
});

test("displays a paragraph with biography text", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a software developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("displays a link to the GitHub profile", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("displays a link to the LinkedIn profile", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
