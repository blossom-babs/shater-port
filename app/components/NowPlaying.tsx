"use client";

import useNowPlaying from "../hooks/useNowPlaying";
import Image from "next/image";
import Redirects from "./Redirects";
import { formatDateTime } from "../utils";


const NowPlaying = () => {
  const { currentTrack } = useNowPlaying();

  // console.log({loading})
  // if (loading) return <p>Loading...</p>;s

  // console.log({currentTrack})

  // if (!currentTrack.isPlaying) return <p>User is offline...</p>;

  return (
    <>
      {/* <div className="w-full hidden items-center gap-4 mx-auto max-w-[564px] border border-gray-200 rounded-lg p-2">
        <Image
          src={currentTrack.albumArt || ''}
          alt={currentTrack.title || ''}
          className="size-20 lg:size-[120px] bg-gray-200 rounded-md object-cover"
        />
        <div className="space-y-1">
          <h6 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {currentTrack.title}
          </h6>
          <p className="text-gray-700 text-base font-medium">
            {currentTrack.artist}
          </p>
         
        </div>
      </div> */}

      <article className="mb-16 overflow-hidden relative">
      <div className="overflow-hidden relative bg-[#F0EEE84D] p-[0.6rem] flex justify-between items-center border rounded-2xl border-[#F0EEE8]">
        <div className="flex items-center gap-3 ">
          <Image
            className="rounded-md bg-gray-50"
            src={currentTrack?.albumArt || "/images/shater-2.png"}
            alt=""
            width={48}
            height={48}
          />
          <div>
            <p className=" flex gap-1 text-[#181817] text-lg f-satoshi-bold ">
              <span className="break-music">
                {currentTrack?.title || "Clueless"}
              </span>
              <Redirects
                href={currentTrack?.url || "#"}
                text={""}
                alt="Currently playing"
              />
            </p>
            <p className="text-[#979797] break-music text-sm f-satoshi">
              {currentTrack?.artist || "Black Bones"}
            </p>
          </div>
        </div>
        <div className="absolute -right-[3.5rem] -top-[1.3rem]">
          <Image
            width={100}
            height={178}
            style={{ objectFit: "contain" }}
            className=" spinningImg"
            src="/images/vinyl-2.svg"
            alt="now playing"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        {currentTrack?.isPlaying ? (
          <>
            <Image
              src="/images/greendot.svg"
              alt="currently playing"
              width={12}
              height={12}
            />
            <p className="f-satoshi-medium text-[#19170E] text-base">
              Currently playing
            </p>
          </>
        ) : (
          <>
            <Image
              src="/images/greydot.svg"
              alt="currently playing"
              width={12}
              height={12}
            />
            <p className="f-satoshi-medium text-[#B4B4B4] text-base">
              Last played
              {currentTrack?.playedAt && (
                <span> on {formatDateTime(currentTrack?.playedAt)}</span>
              )}
            </p>
          </>
        )}
      </div>
    </article>
    </>
  );
};

export default NowPlaying;
