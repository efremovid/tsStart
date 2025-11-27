export interface ApiUser {
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface AppUser {
  login: string;
  avatarUrl: string;
  url: string;
  htmlUrl: string;
  name: string | null;
  company: string | null;
  location: string | null;
  bio: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  createdAt: string;
}


