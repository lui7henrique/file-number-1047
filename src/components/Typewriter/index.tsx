import TypewriterEffect, { TypewriterClass } from "typewriter-effect";
import { useCurrent } from "../../hooks/useCurrent";

const Typewriter = () => {
  const { handleUpdateCurrent, getValue } = useCurrent();

  const finish = () => {
    handleUpdateCurrent();
    window.close();
  };

  const onInit = async (typewriter: TypewriterClass) => {
    const value = await getValue();

    typewriter
      .start()

      .pauseFor(1000)
      .typeString(`i am file number ${value}.`)
      .pauseFor(500)
      .deleteAll()

      .typeString("i am a unique piece of art.")
      .pauseFor(500)
      .deleteAll()

      .typeString("i was just created and will be gone in a few seconds.")
      .pauseFor(500)
      .deleteAll()

      .typeString("you own me now until you forget about me.")
      .pauseFor(3000)
      .callFunction(finish);
  };

  return <TypewriterEffect onInit={onInit} />;
};

export default Typewriter;
