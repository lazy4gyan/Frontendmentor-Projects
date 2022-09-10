import { ReactComponent as Ellipse } from "../../assets/icons/icon-ellipsis.svg";
import "./Card.style.scss";

const Card = ({ activity, value }) => {
  const { title, timeframes } = activity;

  let current = "";
  let previous = "";
  let stat = "";

  if (value === "Monthly") {
    current = timeframes.monthly.current;
    previous = timeframes.monthly.previous;
    stat = "Month";
  } else if (value === "Weekly") {
    current = timeframes.weekly.current;
    previous = timeframes.weekly.previous;
    stat = "Week";
  } else {
    current = timeframes.daily.current;
    previous = timeframes.daily.previous;
    stat = "Day";
  }

  // Below function for background i.e. color and images;
  const getBackground = (title) => {
    switch (title) {
      case "Work":
        return "work";
      case "Play":
        return "play";
      case "Study":
        return "study";
      case "Exercise":
        return "exercise";
      case "Social":
        return "social";
      case "Self Care":
        return "self-care";
      default:
        return "";
    }
  };

  return (
    <div
      className="card--container"
      style={{
        backgroundImage: `url(../../assets/icons/icon-${getBackground(
          title
        )}.svg)`,
        backgroundColor: `var(--${getBackground(title)})`
      }}
    >
      <div className="card--details">
        <div className="card-details--head">
          <span className="title">{title}</span>
          <Ellipse />
        </div>
        <div className="stats--container">
          <h2 className="current">
            {current}
            {current <= 1 ? "hr" : "hrs"}
          </h2>
          <p className="previous">
            Last {stat} - {previous}
            {previous <= 1 ? "hr" : "hrs"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
