import { Action } from "redux";
import { AppUser } from "../../types/user";
import { GET_USER } from "./user-actions";

const defaultUser = {
  login: "",
  avatarUrl: "",
  url: "",
  htmlUrl: "",
  name: "",
  company: "",
  location: "",
  bio: "",
  publicRepos: 0,
  followers: 0,
  following: 0,
  createdAt: "",
};

const initialState: AppUser | null = defaultUser;

interface UserAction extends Action {
  payload?: AppUser;
}

export const userReducer = (state = initialState, action: UserAction) => {
  if (action.type === GET_USER) {
    return action.payload;
  }
  return state;
};
