import { CitiesWhereInput } from "./CitiesWhereInput";
import { CitiesOrderByInput } from "./CitiesOrderByInput";

export type CitiesFindManyArgs = {
  where?: CitiesWhereInput;
  orderBy?: Array<CitiesOrderByInput>;
  skip?: number;
  take?: number;
};
