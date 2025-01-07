import { StatesWhereInput } from "./StatesWhereInput";
import { StatesOrderByInput } from "./StatesOrderByInput";

export type StatesFindManyArgs = {
  where?: StatesWhereInput;
  orderBy?: Array<StatesOrderByInput>;
  skip?: number;
  take?: number;
};
