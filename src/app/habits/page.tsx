"use client";
import { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    window.location.href = "https://habit-tracker-eight-eta.vercel.app/";
  }, []);

  return null;
};

export default RedirectPage;
