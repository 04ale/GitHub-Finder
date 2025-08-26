type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";
import { SearchCheck } from "lucide-react";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
        loadUser(userName);
    }
  };

  return (
    <div className="flex flex-col text-center gap-3 bg-white/20 p-5 max-md:w-19/20 md:w-[738px] rounded-xl">
      <h2 className="text-3xl">Busque por um usuário:</h2>
      <p className="text-xl">Conheça seus melhores repositórios</p>
      <div className="flex flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Nome do usuário"
          className="text-xl border-1 border-white/40 p-2 rounded-xl"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="text-xl" onClick={() => loadUser(userName)}>
          <SearchCheck size={30} className="hover:size-8 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Search;
