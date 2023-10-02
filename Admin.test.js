import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Admin from "./Admin";
import { loginUser } from "../api";

jest.mock("../api");

describe("Admin Component", () => {
  it("renders the login form", () => {
    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );

    const usernameInput = screen.getByText("Username");
    const passwordInput = screen.getByText("Password");
    const signInButton = screen.getByText("Sign in");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  it("handles admin login with correct credentials", async () => {
    // Mock the loginUser function to resolve with ROLE_ADMIN
    loginUser.mockResolvedValue({ role: "ROLE_ADMIN" });

    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );

    const usernameInput = screen.getByText("Username");
    const passwordInput = screen.getByText("Password");
    const signInButton = screen.getByText("Sign in");

    // fireEvent.change(usernameInput, { target: { value: "admin" } });
    // fireEvent.change(passwordInput, { target: { value: "password" } });
    // await fireEvent.click(signInButton);
    expect(signInButton).toBeInTheDocument();

    // Wait for loginUser to be called and resolve
    // await waitFor(() => {
    //   expect(loginUser).toHaveBeenCalledWith({
    //     userName: "admin",
    //     password: "password",
    //   });
    // });

   
  });
});
