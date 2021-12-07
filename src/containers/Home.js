// Init
import React from "react";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import Body from "../components/Body";


export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
