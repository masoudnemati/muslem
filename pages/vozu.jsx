import React from "react";
import Ghosl from "../components/pages-components/vozu/Ghosl";
import Vozu from "../components/pages-components/vozu/Vozu";

const vozu = () => {
  return (
    <>
      <main>
        <Vozu />
        <Ghosl />
      </main>

      <style jsx>{`
        main {
          direction: rtl;
          padding: 100px 5vw;
          text-align: right;
          text-align: justify;
        }
      `}</style>
    </>
  );
};

export default vozu;
