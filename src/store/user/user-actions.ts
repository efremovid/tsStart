import { AppUser } from "../../types/user";
export const GET_USER = "user/GET_USER";

export const getUser = (user: AppUser) => {
  return {
    type: GET_USER,
    payload: user,
  };
};
