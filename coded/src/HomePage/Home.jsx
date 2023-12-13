import React from 'react'
import "../components/About"
import "../components/Carousal"
import "../components/Faq"

function Home() {
  return (
    <>
    <Carousal/>
    <Faq/>
    <About/>
    </>
  );
}

export default Home