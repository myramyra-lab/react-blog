// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardSection from "./Cardsections.js";
import sanityClient from "./client.js";
import HorizontalCardSection from "./horizontalcard.js";
import Navigation from "./Navigation.js";
import SectionOne from "./Section1";
import SectionTwo from "./Section2";
import SecondNavigation from "./Navigation2.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        
      }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white-100 p-12">
      <div className="">
        <Navigation />
        <h2 className="text-5xl flex justify-center cursive">Blog Posts</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my blog posts page!
        </h3>
        {/* {allPostsData &&
          allPostsData
            .filter((allPostData) => allPostData.index == allPostsData.index)
            .map((post, index) => ( */}
        <div className="flex space-x-10">
          <div class="flex-2">
            <SectionOne />
          </div>
          <div class="flex-2">
            <CardSection />
          </div>
        </div>
        <div>
          <HorizontalCardSection />
        </div>
      </div>
      <div>
        <SecondNavigation />
      </div>
      <div className="flex space-x-10">
        <div class="flex-2">
          <br></br>
          <SectionTwo />
        </div>
      </div>
    </div>
  );
}
