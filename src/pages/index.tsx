import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("../components/Typewriter"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <main>
      <Typewriter />
    </main>
  );
};

export default Home;
