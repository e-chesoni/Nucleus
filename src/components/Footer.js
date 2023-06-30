"use client";

import {
    FaGithubSquare,
    FaLinkedin,
    FaYoutubeSquare,
  } from "react-icons/fa";

export const Footer = () => {
    return (
        <section className='text-5xl flex justify-center gap-16 py-3'>
          <FaGithubSquare/>
          <FaLinkedin/>
          <FaYoutubeSquare/>
        </section>
    )
}