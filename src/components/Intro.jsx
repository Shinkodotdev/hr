import { useEffect, useRef } from "react";


export default function Intro() {
      const audioRef = useRef(null);
  return (
    <section className="intro">
      <h1>For Someone Who Made Work Feel Like Home 🤍</h1>
      <p>Before you turn the page… let us say thank you.</p>
    </section>
  );
}