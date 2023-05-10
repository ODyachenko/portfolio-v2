function CardItem({ id, title, img, description, previewLink, sourceLink }) {
  return (
    <div className="projects__list-item card">
      <span className="card__caption">
        <span className="purple">Project {id}</span>
        <span>{title}</span>
      </span>
      <div className="card__inner">
        <img className="card__img" src={img} alt="project" />
      </div>
      <div className="card__footer">
        <p className="card__description">{description}</p>
        {/* <button className="card__btn">view-project</button> */}
        <a
          href={previewLink}
          target="_blank"
          rek="noreferrer"
          className="card__btn"
        >
          Preview
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rek="noreferrer"
          className="card__btn"
        >
          source
        </a>
      </div>
    </div>
  );
}

export default CardItem;
