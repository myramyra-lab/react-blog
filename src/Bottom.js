import BlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <div className="flex">
      <div class="flex-3 card ml-10 imagecard">
        <p className="sans2">read</p>
        <p className="italics">THE STRIPE BOOK CLUB</p>
        <p className="sans">LOAD MORE BOOKS</p>
      </div>
      <div class="flex-3 card ml-10 imagecard">
        <p className="sans2">travel</p>
        <p className="italics">THE STRIPE TRAVEL GUIDES</p>
        <p className="sans">PACK YOUR BAGS AND PLAN YOUR TRIPS</p>
      </div>
      <div class="flex-3 card ml-10 imagecard">
        <p className="sans2">make</p>
        <p className="italics">THE STRIPE DIY GALLERY</p>
        <p className="sans">GET INSPIRED AND GET YOUR CRAFT ON</p>
      </div>
    </div>
  );
}
