import { RootState } from "..";

export const selectUser = (state: RootState) => state.user;
export const selectUserLocation = (state: RootState) => state.user?.location;

export const selectUserTitle = (state: RootState) => {
  return {
    image: state.user?.avatarUrl,
    name: state.user?.name,
    webSite: state.user?.htmlUrl,
    joined: state.user?.createdAt,
    desc: state.user?.bio,
    userName: state.user?.login
  };
};
