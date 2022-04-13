import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/blog/BlogFooter";
import SearchResultBody from "../components/searchResult/SearchResultBody";
const SearchResult = () => {
  const [openlogin, setOpenLogin] = useState(false);
  const [opensignup, setOpenSignup] = useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] = useState(false);
  const [search, setSearch] = useState("course");
  const [input, setInput] = useState();

  return (
    <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Header
        setOpenLogin={setOpenLogin}
        setOpenSignup={setOpenSignup}
        openlogin={openlogin}
        opensignup={opensignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
        search={search}
        setSearch={setSearch}
        input={input}
        setInput={setInput}
      />
      <SearchResultBody search={search} input={input} />
      <Footer />
    </div>
  );
};

export default SearchResult;
