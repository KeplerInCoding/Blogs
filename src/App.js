import React from "react";
import BlogPage from './Pages/BlogPage';
import CategoryPage from './Pages/CategoryPage';
import TagPage from './Pages/TagPage';
import Home from './Pages/Home';
import './App.css'
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";






export default function App() {
  const { fetchData } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), null, category);
    } else {
      fetchData(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}
