import React, { useState, useEffect } from "react";
import Maylike1 from "../../assets/img/maylike1.png";
import Maylike2 from "../../assets/img/maylike1.png";
import Maylike3 from "../../assets/img/maylike1.png";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import api from "../../api";
import { Store, UpdateStore } from "../../StoreContext";
import { useTranslation, Trans } from "react-i18next";
import { baseUrl } from "../../config";

const UserLandingPageBlog = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const updateStore = UpdateStore();
  const { blogs } = Store();
  useEffect(() => {
    // get blogs
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let getBlogs = async () => {
    setLoading(true);

    let res = await api("get", "/blogs");
    if (res) {
      updateStore({ blogs: res?.data });
    }
    setLoading(false);
  };

  let newblog = [];
  let items = [
    {
      heading: "Blog Title Here",
      img: Maylike1,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: "Baig Irfan",
    },
    {
      heading: "Blog Title Here",
      img: Maylike2,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
    {
      heading: "Blog Title Here",
      img: Maylike3,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
  ];
  const getblogs = () => {
    newblog = [...blogs];
    return newblog;
  };
  return (
    <>
      <Box className="box-user">
        <Box
          sx={{
            padding: "20px 0 20px 0",
          }}
        >
          <Typography align="center" variant="h5">
            {t("Blog")}
          </Typography>
          <div className="offerdashline"> </div>
        </Box>
      </Box>
      {loading ? (
        <h1 style={{ color: "white" }}>{t("Loading")}...</h1>
      ) : (
        <div>
          <div className="UserLandingPageBlogContainer">
            <div className="blogGridOuterDiv">
              <Grid container spacing={4}>
                {getblogs()
                  ?.slice(0, 3)
                  .map((item, i) => (
                    <Grid item xs={12} sm={4}>
                      <>
                        <Link to={`blog/${item._id}`} params={{ testvalue: "hello" }} style={{ textDecoration: "none" }}>
                          <div className="User-landing-page-blog-divone">
                            <img src={baseUrl + item.blog_images} className="blogdivimg" />
                            <div className="blogdiv1text">
                              <h3 className="blogdiv1heading">
                                {item?.blog_title.length > 25 ? item?.blog_title.substring(0, 22) + "..." : item?.blog_title}
                              </h3>

                              <p className="bloddiv1detail">
                                {item?.blog_desc.length > 147 ? item?.blog_desc.substring(0, 146) + ".." : item?.blog_desc}
                              </p>
                              <p>
                                <Link to={`blog/${item._id}`} params={{ testvalue: "hello" }} style={{ textDecoration: "none" }}>
                                  {" "}
                                  <span className="seemore"> Lire l???article</span>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </div>
          <Box className="box-user">
            <Box
              sx={{
                padding: "5px 0 5px 0",
              }}
            >
              <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
                <Typography className="blog-view-all" align="center" variant="h6">
                  {t("View all")}
                </Typography>
              </Link>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default UserLandingPageBlog;
