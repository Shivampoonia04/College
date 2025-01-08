import { CollegePlacementWhereInput } from "./CollegePlacementWhereInput";
import { CollegePlacementOrderByInput } from "./CollegePlacementOrderByInput";

export type CollegePlacementFindManyArgs = {
  where?: CollegePlacementWhereInput;
  orderBy?: Array<CollegePlacementOrderByInput>;
  skip?: number;
  take?: number;
};
