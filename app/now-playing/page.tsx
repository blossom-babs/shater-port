//"use client";

import NowPlaying from "../components/NowPlaying";

//import useNowPlaying from "./hooks/useNowPlaying";


export default function Home() {
  // const {loading} = useNowPlaying()

  // if(loading) return <p> Loading...</p>
  return (
   <NowPlaying />
  );
}
