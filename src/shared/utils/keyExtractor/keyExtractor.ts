import { Identifiable } from "./types";

export const keyExtractor = <T extends Identifiable>(item: T) => {
  return item.id;
};
