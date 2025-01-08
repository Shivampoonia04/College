import { States as TStates } from "../api/states/States";

export const STATES_TITLE_FIELD = "id";

export const StatesTitle = (record: TStates): string => {
  return record.id?.toString() || String(record.id);
};
