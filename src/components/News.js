import React, { Component } from "react";
import NewItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Kate Murphy",
      title:
        "Bryan Kohberger sentenced to life in prison without parole: Live updates after victims’ families tell Idaho killer ‘you're gonna go to hell’ - Yahoo Home",
      description:
        "Bryan Kohberger was sentenced on Wednesday after he pleaded guilty earlier this month to killing four University of Idaho students in 2022.",
      url: "https://www.yahoo.com/news/us/live/bryan-kohberger-sentenced-to-life-in-prison-without-parole-live-updates-after-victims-families-tell-idaho-killer-youre-gonna-go-to-hell-142047679.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/UPIixtc4AjpOAGohHFJRmw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MzU7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2025-07/66c73c70-67da-11f0-a5ff-0d451a15d002",
      publishedAt: "2025-07-23T21:51:31Z",
      content:
        "Bryan Kohberger was sentenced on Wednesday to life in prison without the possibility of parole in the 2022 killings of four University of Idaho students.\r\nThe murder victims Madison Mogen, Kaylee Gon… [+1780 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author:
        "Siobhán O'Grady, David L. Stern, Anastacia Galouchka, Serhii Korolchuk",
      title:
        "Ukrainians protest as Zelensky cracks down on corruption watchdogs - The Washington Post",
      description:
        "Fighting corruption has been a central issue for Ukrainians since pro-Western protests a decade ago, and new curbs on the watchdog agencies have alarmed many.",
      url: "https://www.washingtonpost.com/world/2025/07/23/ukraine-corruption-protests-zelensky-parliament/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VH3HRZ4XGDGG4J5Y5ZFLZPS5IE_size-normalized.jpg&w=1440",
      publishedAt: "2025-07-24T00:55:00Z",
      content:
        "KYIV Thousands of people flooded a square in central Kyiv on Wednesday evening and massed in other cities across the war-torn country, on the second day of protests against a law signed by President … [+9505 chars]",
    },
    {
      source: { id: null, name: "Financial Times" },
      author: "Stefania Palma, Lauren Fedor",
      title:
        "Judge rejects Trump administration’s request to unseal Epstein documents - Financial Times",
      description:
        "Setback comes as president faces allegations he was told his name appeared on files linked to late convicted paedophile",
      url: "https://www.ft.com/content/ef1ca342-28fa-4d02-9046-8495bded31ce",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F9aa35849-429d-4037-8732-2c9df8b71a84.jpg?source=next-barrier-page",
      publishedAt: "2025-07-24T00:15:47Z",
      content:
        "Complete digital access to quality analysis and expert insights, complemented with our award-winning Weekend Print edition.\r\n<ul><li></li>Everything in Print<li></li>Weekday Print Edition<li></li>FT … [+202 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b587285e0408458abe7a87dec021e48d&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      alert("You have reached the end of the news articles.");
      return;
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b587285e0408458abe7a87dec021e48d&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b587285e0408458abe7a87dec021e48d&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewItem
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imageUrl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
