import BlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import { Link } from "react-router-dom";


export default function SectionOne() {
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
      .then((data) => setLatestBlog(data[data.length-1]))
      .catch(console.error);
    }, []);
    
  return (
    <div>
        {latestBlog && <Link to={"/" + latestBlog.slug.current} key={latestBlog.slug.current}>
            <div className="flex-1">
              <span className="h-650rem rounded bg-white">
                <img
                  className="w-full rounded-r allpostsimage"
                  src={latestBlog.mainImage.asset.url}
                  alt=""
                  />
              </span>
              <h2 className="text-gray-800 text-black-700 bg-opacity-75 rounded">
                {latestBlog.title}
              </h2>
              <p className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl">
                <BlockContent
                  blocks={latestBlog.body}
                  projectId="jvy14x8m"
                  dataset="production"
                  />
              </p>
            </div>
          </Link>}
    </div>
  );
}



 

