import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function PostDetail() {
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(postId);
    async function fetchData() {
      const res = await axios.get(`https://dummyjson.com/posts/${postId}`);
      const data = res["data"];
      setPosts(data);
    }
    fetchData();
  }, [postId]);
  return (
    <div>
      <div>id: {posts["id"]}</div>
      <div>title: {posts["title"]}</div>
      <div>body: {posts["body"]}</div>
    </div>
  );
}
