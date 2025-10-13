import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PostDetail from "./PostDetail";
import { Link } from "react-router-dom";
export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://dummyjson.com/posts`);
      const data = res["data"]["posts"];
      setPosts(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <p>
            <Link key={post.id} to={`/posts/${post.id}`}>
              no. {post.id} - {post.title}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
