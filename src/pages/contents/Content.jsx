import React from "react"
import articleImg1 from "../../assets/blog/article-1.jpg"
import articleImg2 from "../../assets/blog/article-2.jpg"
import articleImg3 from "../../assets/blog/article-3.jpg"
import articleImg4 from "../../assets/blog/article-4.jpg"
import articleImg5 from "../../assets/blog/article-5.jpg"
import { Link } from "gatsby"

export const Content = () => {
  return (
    <>
      <section className="hero my-5">
        <div className="container ">
          <div className="row">
            <div className="col-6">
              <div style={{ maxWidth: "450px" }} className="hero__content">
                <h1 className="section-title" style={{ color: "#005243" }}>
                  Welcome to my blog!
                </h1>
                <p>
                  I use this space to document my adventures in front-end
                  development, sharing how I’ve overcome issues I’ve run into,
                  useful resources, and more.
                </p>
                <p>
                  Below are some of my favourite articles, or you can go to the
                  blog page to see my most recent posts.
                </p>
                <div className="flex-group">
                  <button
                    style={{ backgroundColor: "#18846c", marginRight: "30px" }}
                    className="btn text-white py-2 px-4"
                  >
                    Featured articles
                  </button>
                  <button className="btn btn-light">
                    Most recent articles
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div>
                {/* <img src="//unsplash.it/510" alt className="hero__image" /> */}
                <img
                  src={articleImg5}
                  alt=""
                  className="mg-fluid img-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#e9fbf8" }}
        id="featured-articles"
        className="featured-articles p-5"
      >
        <div className="container flow">
          <div className="my-5">
            <h2
              style={{ color: "#005243" }}
              className="section-title text-center "
            >
              Featured articles
            </h2>
            <p className="text-center">
              Here is a sample of articles which I feel give you a good idea of
              what this site is all about.
            </p>
          </div>
          <div className="row">
            <div className="col-6">
              <h3 className="snippet__title">
                <Link
                  href="/blog/my-first-article/"
                  className="text-black text-decoration-none"
                >
                  My First Article
                </Link>
              </h3>
              <p className="snippet__meta">
                by <span>Kevin Powell</span> on <span>Apr 30, 2021</span>
              </p>
              <p className="snippet__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis accusantium sit illo neque rem omnis quaerat, nam
                similique vitae delectus ad magni vel quo maxime, magnam
                placeat. Reprehenderit, distinctio aliquam?
              </p>
              {/* <a href="/blog/my-first-article/" className="btn btn--primary">
                  Continue Reading
                </a> */}
              <button
                style={{ backgroundColor: "#18846c", marginRight: "30px" }}
                className="btn text-white py-2 px-4"
              >
                Continue Reading
              </button>
            </div>
            <div className="col-6">
              <img
                src={articleImg1}
                alt="This is a test"
                className="mg-fluid img-thumbnail"
              />
            </div>
            <div className="col-6">
              <h3 className="snippet__title">
                <Link
                  href="/blog/my-second-article/"
                  className="text-black text-decoration-none"
                >
                  My Second Article
                </Link>
              </h3>
              <p className="snippet__meta">
                by <span>Kevin Powell</span> on <span>May 14, 2021</span>
              </p>
              <p className="snippet__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis accusantium sit illo neque rem omnis quaerat, nam
                similique vitae delectus ad magni vel quo maxime, magnam
                placeat. Reprehenderit, distinctio aliquam?
              </p>
              {/* <a href="/blog/my-second-article/" className="btn btn--primary">
                  Continue Reading
                </a> */}
              <button
                style={{ backgroundColor: "#18846c", marginRight: "30px" }}
                className="btn text-white py-2 px-4"
              >
                Continue Reading
              </button>
            </div>
            <div className="col-6">
              <img
                src={articleImg2}
                alt="This is a test"
                className="mg-fluid img-thumbnail"
              />
            </div>
            <div className="col-6">
              <h3 className="snippet__title">
                <Link
                  href="/blog/my-third-article/"
                  className="text-black text-decoration-none"
                >
                  My Third Article
                </Link>
              </h3>
              <p className="snippet__meta">
                by <span>Kevin Powell</span> on <span>May 27, 2021</span>
              </p>
              <p className="snippet__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis accusantium sit illo neque rem omnis quaerat, nam
                similique vitae delectus ad magni vel quo maxime, magnam
                placeat. Reprehenderit, distinctio aliquam?
              </p>
              {/* <a href="/blog/my-third-article/" className="btn btn--primary">
                  Continue Reading
                </a> */}
              <button
                style={{ backgroundColor: "#18846c", marginRight: "30px" }}
                className="btn text-white py-2 px-4"
              >
                Continue Reading
              </button>
            </div>
            <div className="col-6">
              <img
                src={articleImg3}
                alt="This is a test"
                className="mg-fluid img-thumbnail"
              />
            </div>
            <div className="col-6">
              <h3 className="snippet__title">
                <Link
                  href="/blog/my-fifth-article/"
                  className="text-black text-decoration-none"
                >
                  My Fifth Article
                </Link>
              </h3>
              <p className="snippet__meta">
                by <span>Kevin Powell</span> on <span>Jun 14, 2021</span>
              </p>
              <p className="snippet__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis accusantium sit illo neque rem omnis quaerat, nam
                similique vitae delectus ad magni vel quo maxime, magnam
                placeat. Reprehenderit, distinctio aliquam?
              </p>
              {/* <a href="/blog/my-fifth-article/" className="btn btn--primary">
                  Continue Reading
                </a> */}
              <button
                style={{ backgroundColor: "#18846c", marginRight: "30px" }}
                className="btn text-white py-2 px-4"
              >
                Continue Reading
              </button>
            </div>
            <div className="col-6">
              <img
                src={articleImg4}
                alt="This is a test"
                className="mg-fluid img-thumbnail"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
