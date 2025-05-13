import React, { useEffect, useState, useRef } from "react";

const CountdownTimer = ({ initialSeconds = 60, onTimeUp, onTick }) => {
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
  const intervalRef = useRef(null);

  // Fungsi untuk mulai timer
  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Pastikan interval sebelumnya dibersihkan
    }

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        const next = prev - 1;
        if (next >= 0 && onTick) onTick(next);
        if (next <= 0) {
          clearInterval(intervalRef.current);
          if (onTimeUp) onTimeUp();
        }
        return next;
      });
    }, 1000);
  };

  // Reset waktu ketika initialSeconds atau komponen dimuat ulang
  useEffect(() => {
    setTotalSeconds(initialSeconds);
    startTimer();
    return () => clearInterval(intervalRef.current); // Bersihkan interval saat komponen dibersihkan
  }, [initialSeconds]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <span>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );
};

export default CountdownTimer;
