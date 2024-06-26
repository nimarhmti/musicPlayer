import { PlayList } from "../_components/playList/playList";
import { Music } from "../_components/music/Music";
import { SearchForm } from "../_components/form/searchForm";

export default function Home() {
  return (
    <main className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 w-full h-5/6 md:w-3/4 bg-secondary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl p-8 space-y-11">
      {/* current music section */}
      <div>
        <Music />
      </div>
      {/* play list section  */}
      <div className="row-span-2 md:col-span-2">
     
        <PlayList />
      </div>
    </main>
  );
}
