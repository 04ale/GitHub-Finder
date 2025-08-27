export type UserProps = {
  avatar_url: string;
  public_repos: number;
  login: string;
  location: string;
  followers: number;
  following: number;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
