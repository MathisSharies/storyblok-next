import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import Button from "../components/Button";
import AllArticles from "../components/AllArticles";
import Article from "../components/Article";
import PopularArticles from "../components/PopularArticles";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  button: Button,
  "all-articles": AllArticles,
  article: Article,
  "popular-articles": PopularArticles,
};

storyblokInit({
  accessToken: "9QYfjiwWr1sWjeX32VQGnwtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
