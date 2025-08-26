import type { UserProps } from "../types/user-types";
import { Link } from "react-router-dom";
import { Pin } from "lucide-react";

const User = ({
  login,
  avatar_url,
  followers,
  public_repos,
  following,
  location,
}: UserProps) => {
  return (
    <div className="flex flex-col gap-4 text-2xl rounded-xl justify-center items-center p-4 bg-white/20 max-md:w-19/20 md:w-[740px]">
      <img src={avatar_url} alt={login} className="rounded-full w-80 border-4 border-[#0e1129]" />
      <h2 className="text-3xl">{login}</h2>
      <p>Repositórios: {public_repos}</p>
      {location && (
        <p className="flex gap-5 items-center">
          <Pin />
          <span>{location}</span>
        </p>
      )}

      <div className="flex flex-row gap-10 text-center">
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`} className="py-5 px-15 bg-[#0e1129] hover:bg-[#15193a] rounded-2xl">Ver melhores projetos</Link>
    </div>
  );
};

export default User;
