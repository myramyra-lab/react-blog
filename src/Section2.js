import BlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import { Link } from "react-router-dom";
import './index.css'

export default function SectionTwo() {
  const [allPostsData, setAllPosts] = useState([]);

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
      .then((data) => {
        const otherBlogs = data.slice(0, data.length - 1);
        setAllPosts(otherBlogs);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      {allPostsData.length > 0 &&
        allPostsData.map((post, index) => (
          <div key={index} class="flex-2">
            <div class="secondcard mb-3">
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <div className="flex space-x-10">
                  <span className="flex-2 h-300rem rounded bg-white">
                    <img
                      className="rounded-r sectiontwoimage"
                      src={post.mainImage.asset.url}
                      alt=""
                    />
                  </span>
                  <div class="flex-2">
                    <h5 class="card-title">{post.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">{post.body}</p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </Link>
            </div>
            
          
          </div>
        ))}
      ;
    </div>
  );
}
