export type AddHistoryAction = {
  type: "add";
  payload: string;
};

export type ClearHistoryAction = {
  type: "clear";
};

export type HistoryAction = AddHistoryAction | ClearHistoryAction;

export const addHistory = (payload: string): AddHistoryAction => {
  return { type: "add", payload };
};

export const clearHistory = (): ClearHistoryAction => {
  return { type: "clear" };
};

export const initialState: string[] = [];

export const historyReducer = (state = initialState, action: HistoryAction) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "clear":
      return [];
  }
};
