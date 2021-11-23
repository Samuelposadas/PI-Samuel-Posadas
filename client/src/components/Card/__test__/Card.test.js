import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Card from "../Card.js";

test("should render <Card />", () => {
  // mocks para testear mi componente Card
  const props = {
    title: "Milanese with potato chips",
    diets: "carnivorous",
    score: 10,
  };

  const components = render(<Card {...props} />);

  components.getByText("Milanese with potato chips");
  components.getByText("Type of Diet:");
  components.getByText("carnivorous");
  components.getByText("Score:");
  components.getByText("favorite");
  components.getByText(10);
});
