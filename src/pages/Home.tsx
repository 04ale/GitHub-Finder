import Header from "../components/Header";
import Search from "../components/Search";
import { useState } from "react";
import type { UserProps } from "../types/user-types";
import type { RepoProps } from "../types/repo";
import Error from "../components/Error";
import User from "../components/User";
import Repos from "../components/Repos";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState<RepoProps[] | null>(null);
  const [toggle, setToggle] = useState(false)

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    setRepos(null);
    setToggle(false)

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const resRepos = await fetch(
      `https://api.github.com/search/repositories?q=user:${userName}`
    );

    const data = await res.json();
    const data1 = await resRepos.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, public_repos, login, location, followers, following } =
      data;

    const userData: UserProps = {
      avatar_url,
      public_repos,
      login,
      location,
      followers,
      following,
      setToggle
    };

    if (data1.items) {
      setRepos(data1.items);
    }
    
    console.log(repos)
    setUser(userData);
  };

  return (
    <div className="flex flex-col items-center my-10 gap-5">
      <Header />
      <Search loadUser={loadUser} />
      {user && <User {...user} setToggle={setToggle}/>}
      {error && <Error />}
      {toggle === true && <Repos repos={repos}/>}
    </div>
  );
}

export default Home;
