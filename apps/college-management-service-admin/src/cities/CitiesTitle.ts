import { Cities as TCities } from "../api/cities/Cities";

export const CITIES_TITLE_FIELD = "id";

export const CitiesTitle = (record: TCities): string => {
  return record.id?.toString() || String(record.id);
};
