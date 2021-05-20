import { useState, useRef, useEffect } from 'react';

import {
  PlayIcon,
  PauseIcon,
  RewindIcon,
  FastForwardIcon
} from '@heroicons/react/solid';

const AudioPlayer = ({ audioFile }) => {
  console.log(JSON.stringify(audioFile, null, 2));

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  return (
    <section>
      <audio
        ref={audioPlayer}
        src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
        preload="metadata"
      />
      <div className="flex flex-col items-center space-y-4 lg:space-y-8">
        <div className="flex space-x-6 lg:space-x-10">
          <button onClick={backThirty}>
            <RewindIcon className="tw-player-icon" />
          </button>

          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <PauseIcon className="tw-player-icon" />
            ) : (
              <PlayIcon className="tw-player-icon" />
            )}
          </button>

          <button onClick={forwardThirty}>
            <FastForwardIcon className="tw-player-icon" />
          </button>
        </div>

        <div className="flex space-x-2 lg:space-x-6">
          {/* current time */}
          <div>{calculateTime(currentTime)}</div>

          {/* progress bar */}
          <div>
            <input
              type="range"
              className="progressBar"
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
          </div>

          {/* duration */}
          {/* prettier-ignore */}
          <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </div>
      </div>
    </section>
  );
};

export default AudioPlayer;
