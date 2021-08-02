import BlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import { Link } from "react-router-dom";
import "./index.css";

export default function ContentCard() {
  return (
    <div className="flex container-fluid">
      <div className="card w-50">
        <img src="" alt="" />
      </div>
      <div className="w-50 contentcard">
        <p>WHAT WE'RE TALKING ABOUT:</p>
        <h1>EVERY BOOK I READ IN 2020</h1>
        <p>
          "My favorite post of the year!*heart eye emoji*Thanks for sharing! Now
          time to treat myself to a new murder."-Allysa Z
        </p>
        <div className="flex">
          <li>VIEW</li>
          <li>DISCUSS</li>
          <li>CHAT IN THE FACEBOOK GROUP</li>
        </div>
      </div>
    </div>
  );
}
