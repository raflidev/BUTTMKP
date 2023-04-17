import { useEffect } from "react";

const MazeSnippet = () => {
  useEffect(() => {
    (function (m, a, z, e) {
      var s, t;
      try {
        t = m.sessionStorage.getItem("maze-us");
      } catch (err) {}

      if (!t) {
        t = new Date().getTime();
        try {
          m.sessionStorage.setItem("maze-us", t);
        } catch (err) {}
      }

      s = a.createElement("script");
      s.src = z + "?t=" + t + "&apiKey=" + e;
      s.async = true;
      a.getElementsByTagName("head")[0].appendChild(s);
      m.mazeUniversalSnippetApiKey = e;
    })(
      window,
      document,
      "https://snippet.maze.co/maze-universal-loader.js",
      "c4984c6e-8c02-44f3-943c-ed601d1b295b"
    );
  }, []);

  return null;
};

export default MazeSnippet;
