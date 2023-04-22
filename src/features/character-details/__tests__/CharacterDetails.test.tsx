import { render } from "@testing-library/react-native";
import React from "react";

import { CharacterDetails } from "../ui/CharacterDetails";
import { VALID_MOCK_CHARACTER_DETAILS_RENDER_DATA } from "../__mocks__/mockCharacterDetails";

describe("Tests for main page", () => {
  it("should match snapshot when default state", () => {
    const component = render(
      <CharacterDetails
        data={VALID_MOCK_CHARACTER_DETAILS_RENDER_DATA}
        isLoading={false}
        isError={false}
        onRefetch={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should match snapshot when loading", () => {
    const component = render(
      <CharacterDetails
        data={VALID_MOCK_CHARACTER_DETAILS_RENDER_DATA}
        isLoading={true}
        isError={false}
        onRefetch={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should match snapshot when data empty and error", () => {
    const component = render(
      <CharacterDetails
        data={null}
        isLoading={false}
        isError={true}
        onRefetch={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
