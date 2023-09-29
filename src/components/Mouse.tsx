import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor: any = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
    });

    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });
      link.addEventListener("mouseleave", () => {
        cursor.style.transition = ".3 ease-out";
        cursor.classList.remove("hovered");
      });
    });
  }, []);
  return (
    <div>
      <span className="cursor"></span>
    </div>
  );
};

export default Mouse;
