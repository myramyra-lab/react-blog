import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link } from "react-router-dom";
import sanityClient from "./client.js";
import React, { useEffect, useState } from "react";


export default function Carousel() {
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
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="flex">
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="">
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="">
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                    <img
                      src={post.mainImage.asset.url}
                      class="d-block w-25 h-25"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          ))}
      </div>
    );
}