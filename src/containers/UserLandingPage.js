import React from 'react'
import HeaderUserLandingPage from '../components/HeaderUserLandingPage'
import UserLandingPageBody from '../components/UserLandingPage/UserLandingPageBody'
import Footer from "../components/blog/BlogFooter";
const SearchAppBar = ()=> {
  return (
      <>
        <div
      style={{
        backgroundColor: "#0e0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    > 
   <HeaderUserLandingPage/>
   <UserLandingPageBody/>
   <Footer/>
   </div>
  </>
  );
}
export default  SearchAppBar;
