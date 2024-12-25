'use client'
import { useEffect, useRef, useState } from "react";

export interface NowPlaying {
  album?: string;
  albumArt?: string;
  artist?: string;
  isPlaying?: boolean;
  title?: string;
  url?:string;
  playedAt?:string;
}


const INITIAL_DELAY = 1 * 1000; // 1 second for initial load
const SUBSEQUENT_INTERVAL = 10 * 1000; // 10 seconds throttling


export default function useNowPlaying() {
  const [currentTrack, setCurrentTrack] = useState<NowPlaying>({
    isPlaying: false,
  });
  const [loading, setLoading] = useState(true);

  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const getCurrentTrack = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/playing");
        const data = await response.json();
        // console.log(data)
        if (data) setCurrentTrack(data);
      } finally {
        setLoading(false);
      }
    };

  // First API call after 2 seconds
  timeout.current = setTimeout(() => {
    getCurrentTrack();

    // Subsequent API calls every 10 seconds
    interval.current = setInterval(getCurrentTrack, SUBSEQUENT_INTERVAL);
  }, INITIAL_DELAY);

  return () => {
    // Cleanup
    if (timeout.current) clearTimeout(timeout.current);
    if (interval.current) clearInterval(interval.current);
  };
  }, []);

  return {
    loading,
    currentTrack,
  };
}
