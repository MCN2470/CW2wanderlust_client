import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlightsPage from "./FlightsPage";
import FlightService from "../services/flight.service";

// Mock the flight service
jest.mock("../services/flight.service");

const mockFlights = [
  {
    id: "1",
    itineraries: [
      {
        segments: [
          {
            departure: { iataCode: "JFK", at: "2025-07-07T10:00:00" },
            arrival: { iataCode: "LHR", at: "2025-07-07T22:00:00" },
            carrierCode: "BA",
            number: "178",
            duration: "PT8H",
          },
        ],
      },
    ],
    price: { total: "500.00" },
    validatingAirlineCodes: ["BA"],
  },
];

const mockDictionaries = {
  carriers: {
    BA: "British Airways",
  },
  locations: {
    JFK: {
      cityCode: "NYC",
      countryCode: "US",
    },
    LHR: {
      cityCode: "LON",
      countryCode: "GB",
    },
  },
};

const mockSearchResponse = {
  data: {
    data: mockFlights,
    dictionaries: mockDictionaries,
  },
};

describe("FlightsPage", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test("searches for flights and displays them", async () => {
    // Mock the successful API call
    (FlightService.searchFlights as jest.Mock).mockResolvedValue(
      mockSearchResponse
    );

    render(<FlightsPage />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/origin/i), {
      target: { value: "JFK" },
    });
    fireEvent.change(screen.getByLabelText(/destination/i), {
      target: { value: "LHR" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-07-07" },
    });

    // Click the search button
    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    // Wait for the results to appear
    await waitFor(() => {
      // Check if the service was called correctly
      expect(FlightService.searchFlights).toHaveBeenCalledWith({
        origin: "JFK",
        destination: "LHR",
        date: "2025-07-07",
        airline: "",
      });

      // Check if the flight info is displayed
      expect(screen.getByText(/British Airways/i)).toBeInTheDocument();
      expect(screen.getByText(/€500.00/i)).toBeInTheDocument();
    });
  });

  test("displays a message when no flights are found", async () => {
    // Mock the API call returning no flights
    (FlightService.searchFlights as jest.Mock).mockResolvedValue({
      data: { data: [], dictionaries: null },
    });

    render(<FlightsPage />);

    // Fill out the form and search
    fireEvent.change(screen.getByLabelText(/origin/i), {
      target: { value: "JFK" },
    });
    fireEvent.change(screen.getByLabelText(/destination/i), {
      target: { value: "LHR" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-07-07" },
    });
    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    // Wait for the "no flights found" message
    await waitFor(() => {
      expect(
        screen.getByText(/no flights found for the selected criteria./i)
      ).toBeInTheDocument();
    });
  });

  test("displays an error message on API failure", async () => {
    // Mock the API call to reject with an error
    const errorMessage = "Network Error";
    (FlightService.searchFlights as jest.Mock).mockRejectedValue({
      response: { data: { message: errorMessage } },
    });

    render(<FlightsPage />);

    // Fill out the form and search
    fireEvent.change(screen.getByLabelText(/origin/i), {
      target: { value: "JFK" },
    });
    fireEvent.change(screen.getByLabelText(/destination/i), {
      target: { value: "LHR" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-07-07" },
    });
    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    // Wait for the error message
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
