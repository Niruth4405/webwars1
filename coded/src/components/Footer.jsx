import React from "react";

function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 w-full bg-white shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="text-white hover:underline">
              StudyBuddy
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/About" className="text-white hover:underline me-4 md:me-6">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;

