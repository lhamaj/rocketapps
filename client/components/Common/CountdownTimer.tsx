'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CountdownTimerProps {
  durationInSeconds: number;
  onComplete?: () => void;
  size?: number;
  strokeWidth?: number;
  elapsedColor?: string;
  remainingColor?: string;
  textColor?: string;
}

export default function CountdownTimer({
  durationInSeconds,
  onComplete,
  size = 150,
  strokeWidth = 10,
  elapsedColor = '#e5e7eb',
  remainingColor = '#3b82f6',
  textColor = '#ffffff',
}: CountdownTimerProps) {
  const [remainingTime, setRemainingTime] = useState(durationInSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (durationInSeconds <= 0) {
      setRemainingTime(0);
      onComplete?.();
      return;
    }

    setRemainingTime(durationInSeconds);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          onComplete?.();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [durationInSeconds, onComplete]);

  // Function to format the time display as HH:MM:SS
  const formatTime = (time: number): string => {
    if (time < 0) time = 0; // Ensure time is not negative

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    // Pad with leading zeros
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const formattedTime = formatTime(remainingTime);

  const elapsedTime = durationInSeconds - remainingTime;

  const progressOffset =
    durationInSeconds > 0
      ? circumference - (elapsedTime / durationInSeconds) * circumference
      : circumference;


  return (
    <div
      className="flex items-center justify-center relative"
      style={{ width: size, height: size }}
    >
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={elapsedColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={remainingColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center font-bold"
        style={{ color: textColor, fontSize: size / 8 }}
      >
        {formattedTime}
      </div>
    </div>
  );
}
