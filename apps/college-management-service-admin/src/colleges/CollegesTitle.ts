import { Colleges as TColleges } from "../api/colleges/Colleges";

export const COLLEGES_TITLE_FIELD = "id";

export const CollegesTitle = (record: TColleges): string => {
  return record.id?.toString() || String(record.id);
};
