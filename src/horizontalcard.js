import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link } from "react-router-dom";
import sanityClient from "./client.js";
import React, { useEffect, useState } from "react";
import CardSection from "./Cardsections";

export default function HorizontalCardSection() {
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
            <div key={index} className="flex space-x-10">
              <div class="flex-2">
                <div class="card mb-3">
                  <Link to={"/" + post.slug.current}>
                    <div class="card-body">
                      <h5 class="card-title">{post.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">{post.body}</p>
                      <a href="#" class="card-link">
                        Card link
                      </a>
                      <a href="#" class="card-link">
                        Another link
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="flex-2">
                <div class="card mb-3">
                  <Link to={"/" + post.slug.current}>
                    <div class="card-body">
                      <h5 class="card-title">{post.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">{post.body}</p>
                      <a href="#" class="card-link">
                        Card link
                      </a>
                      <a href="#" class="card-link">
                        Another link
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="flex-2">
                <div class="card mb-3">
                  <Link to={"/" + post.slug.current}>
                    <div class="card-body">
                      <h5 class="card-title">{post.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">{post.body}</p>
                      <a href="#" class="card-link">
                        Card link
                      </a>
                      <a href="#" class="card-link">
                        Another link
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
}