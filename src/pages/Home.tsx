import Header from "../components/Header";
import Search from "../components/Search";
import { useState } from "react";
import type { UserProps } from "../types/user-types";
import Error from "../components/Error";
import User from "../components/User";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false)

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true)
      return;
    }

    const { avatar_url, public_repos, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      public_repos,
      login,
      location,
      followers,
      following,
    };
    console.log(data)
    setUser(userData);
  };

  return (
    <div className="flex flex-col items-center my-10 gap-5">
      <Header />
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
}

export default Home;
