import { CollegesWhereInput } from "./CollegesWhereInput";
import { CollegesOrderByInput } from "./CollegesOrderByInput";

export type CollegesFindManyArgs = {
  where?: CollegesWhereInput;
  orderBy?: Array<CollegesOrderByInput>;
  skip?: number;
  take?: number;
};
