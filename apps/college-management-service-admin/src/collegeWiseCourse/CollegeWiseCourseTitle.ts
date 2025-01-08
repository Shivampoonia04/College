import { CollegeWiseCourse as TCollegeWiseCourse } from "../api/collegeWiseCourse/CollegeWiseCourse";

export const COLLEGEWISECOURSE_TITLE_FIELD = "id";

export const CollegeWiseCourseTitle = (record: TCollegeWiseCourse): string => {
  return record.id?.toString() || String(record.id);
};
