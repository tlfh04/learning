import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PostDetail from "./PostDetail";
import { Link, useSearchParams } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order") ?? "id";
    const sortBy = searchParams.get("sortBy") ?? "asc";

    async function fetchData() {
      const res = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      const data = res["data"]["posts"];
      setPosts(data);
    }
    fetchData();
  }, [searchParams]);
  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "asc" });
          }}
        >
          ID 오름차순
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "desc" });
          }}
        >
          ID 내림차순
        </button>
      </div>
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
