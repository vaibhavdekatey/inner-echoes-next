import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="min-w-full flex flex-row mx-auto my-3 px-4 sm:px-6 lg:px-8 justify-between items-center">
        <div className="font-mono">©PixCode. All rights reserved.</div>
        <div className="flex flex-row justify-center items-center">
          <Link href="#" className="mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24">
              <circle cx="17" cy="7" r="1.5" fill="currentColor" />
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2">
                <path d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z" />
                <path d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4" />
              </g>
            </svg>
          </Link>
          <Link href="#" className="mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
              />
            </svg>
          </Link>
          <Link href="#" className="mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M8 5a4 4 0 0 1 2.646 7A4 4 0 0 1 8 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm9.5 4c2.607 0 4.5 2.368 4.5 5a1 1 0 0 1-.883.993L21 15h-5.86c.358 1.224 1.353 2 2.36 2c1.08 0 1.692-.511 2.24-1.15a1 1 0 1 1 1.52 1.3l-.107.122l-.229.246C20.202 18.26 19.146 19 17.5 19c-2.607 0-4.5-2.368-4.5-5s1.893-5 4.5-5M8 13H4v4h4a2 2 0 0 0 .15-3.995zm9.5-2c-1.007 0-2.002.776-2.36 2h4.72c-.358-1.224-1.353-2-2.36-2M8 7H4v4h4a2 2 0 1 0 0-4m11-1a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2z"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
