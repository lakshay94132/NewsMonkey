const NewsItem = (props) => {
  let { title, description, imageUrl, newsurl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://image.cnbcfm.com/api/v1/image/108174021-1752857800560-gettyimages-2225834219-mms19215_czh23vdh.jpeg?v=1752857871&w=1480&h=833&ffmt=webp&vtcrop=y"
              : imageUrl
          }
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author} On {date}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsurl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
