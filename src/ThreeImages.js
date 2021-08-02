import BlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import { Link } from "react-router-dom";
import "./index.css";

export default function ThreeImages() {
  const [latestBlog, setLatestBlog] = useState();

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
      .then((data) => setLatestBlog(data[data.length - 1]))
      .catch(console.error);
  }, []);
  return (
    <div className='kalam'>
      {latestBlog && (
        <Link to={"/" + latestBlog.slug.current} key={latestBlog.slug.current}>
          <div className="flex">
            <div className="flex-3 ml-10 w-50 h-70">
              <img src={latestBlog.mainImage.asset.url} alt="" />
              <div class="imagecard">
                <p>7.12.2021</p>
                <p>MY NORDSTORM SALE SHORT LIST</p>
                <a href="">READ MORE</a>
              </div>
            </div>
            <div className="flex-3 ml-10 w-50 h-70">
              <img src={latestBlog.mainImage.asset.url} alt="" />
              <div class="imagecard">
                <p>7.12.2021</p>
                <p>MY NORDSTORM SALE SHORT LIST</p>
                <a href="">READ MORE</a>
              </div>
            </div>
            <div className="flex-3 ml-10 w-50 h-70">
              <img src={latestBlog.mainImage.asset.url} alt="" />
              <div class="imagecard">
                <p>7.12.2021</p>
                <p>MY NORDSTORM SALE SHORT LIST</p>
                <a href="">READ MORE</a>
              </div>
            </div>
          </div>
        </Link>
      )}
      <button className="btn btn-primary">LOAD MORE POSTS</button>
    </div>
  );
}
