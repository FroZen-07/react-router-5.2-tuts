import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga
        eaque numquam possimus, nulla corrupti ducimus minima. Provident vel
        ratione deleniti aut, veritatis consequatur accusantium? Repellat cumque
        corrupti sequi magni.
      </p>
    </div>
  );
}

export default Contact;
