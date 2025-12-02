export const SET_SEARCH = "search/SET_SEARCH";

export const setSearch = (search: string) => {
  return {
    type: SET_SEARCH,
    payload: search,
  };
};
