import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const cursorBlur = document.querySelector("#cursor-blur");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX + 10}px`;
      cursor.style.top = `${e.clientY + 15}px`;
      cursorBlur.style.left = `${e.clientX - 175}px`;
      cursorBlur.style.top = `${e.clientY - 175}px`;
    });

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent";
      });
      link.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.border = "";
        cursor.style.backgroundColor = "#95C11E";
      });
    });
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
    </>
  );
};

export default Cursor;
