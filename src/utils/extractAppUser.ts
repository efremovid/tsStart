import { ApiUser, AppUser } from "../types/user";

export const extractAppUser = (user: ApiUser): AppUser => {
  return {
    login: user.login,
    avatarUrl: user.avatar_url,
    url: user.url,
    htmlUrl: user.html_url,
    name: user.name,
    company: user.company,
    location: user.location,
    bio: user.bio,
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    createdAt: user.created_at,
  };
};
