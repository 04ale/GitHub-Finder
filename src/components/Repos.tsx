/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from "lucide-react";
import { CodeXml, Share2, Eye, Copy } from "lucide-react";
const Repos = ({ repos }: any) => {
  return (
    <ul className="rounded-xl bg-white/20 text-center max-md:w-19/20 md:w-[740px]">
      {repos.map((repo: any) => (
        <li className="bg-[#0e1129] m-4 p-6 flex flex-col gap-5 rounded-xl">
          <p className="text-2xl font-bold">{repo.name}</p>
          <div className="flex flex-row justify-center gap-2 items-center">
            <CodeXml />
            <p className="text-xl">{repo.language}</p>
          </div>

          <div className="flex justify-around">
            <div className="flex max-sm:flex-col sm:flex-row gap-2 items-center justify-center">
              <Star />
              <p className="text-xl">{repo.stargazers_count}</p>
            </div>
            <div className="flex max-sm:flex-col sm:flex-row gap-2 items-center justify-center">
              <Share2 />
              <p className="text-xl">{repo.forks_count} </p>
            </div >
            <div className="flex max-sm:flex-col sm:flex-row gap-2 items-center justify-center">
              <Eye />
              <p className="text-xl">{repo.watchers_count}</p>
            </div>
          </div>

          <a href={repo.clone_url} className="flex gap-2 bg-white/20 p-3 mx-12 text-xl justify-center items-center hover:bg-[#ffffff3b] rounded-xl">Ver código<span><Copy /></span></a>

        </li>
      ))}
    </ul>
  );
};

export default Repos;
