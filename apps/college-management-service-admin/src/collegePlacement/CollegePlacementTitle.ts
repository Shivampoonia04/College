import { CollegePlacement as TCollegePlacement } from "../api/collegePlacement/CollegePlacement";

export const COLLEGEPLACEMENT_TITLE_FIELD = "id";

export const CollegePlacementTitle = (record: TCollegePlacement): string => {
  return record.id?.toString() || String(record.id);
};
