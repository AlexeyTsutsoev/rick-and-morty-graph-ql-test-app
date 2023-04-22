import { render } from "@testing-library/react-native";
import React from "react";
import { CharacterList } from "../ui/CharacterList";
import { VALID_MOCK_RENDER_DATA } from "../__mocks__/mockCharacterListData";

describe("Tests for main page", () => {
  it("should match snapshot when default state", () => {
    const component = render(
      <CharacterList
        data={VALID_MOCK_RENDER_DATA}
        isLoading={false}
        isError={false}
        onRefetch={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCardPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        increasePage={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should match snapshot when loading", () => {
    const component = render(
      <CharacterList
        data={VALID_MOCK_RENDER_DATA}
        isLoading={false}
        isError={false}
        onRefetch={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCardPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        increasePage={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should match snapshot when data empty and error", () => {
    const component = render(
      <CharacterList
        data={[]}
        isLoading={false}
        isError={true}
        onRefetch={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCardPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        increasePage={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
