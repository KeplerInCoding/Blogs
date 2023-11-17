import React from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import './App.css'
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { useEffect } from "react";






export default function App() {

  const {fetchData} = useContext(AppContext);

  useEffect(()=>{
    fetchData();
  },[]);

  return <div>
    <Header/>
    <Blogs/>
    <Pagination/>
  </div>;
}
