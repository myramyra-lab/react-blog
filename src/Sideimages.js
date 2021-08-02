import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import { Link } from "react-router-dom";
import "./index.css";

export default function Sideimages() {
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
    <div>
      {latestBlog && (
        <Link to={"/" + latestBlog.slug.current} key={latestBlog.slug.current}>
          <div className="flex-2">
            <div className="card">
              <span className="h-650rem rounded bg-white">
                <img
                  className="rounded-r allpostsimage"
                  src={latestBlog.mainImage.asset.url}
                  alt=""
                />
              </span>
              <span className="h-650rem rounded bg-white">
                <img
                  className="rounded-r allpostsimage"
                  src={latestBlog.mainImage.asset.url}
                  alt=""
                />
              </span>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
