import ProfilePic from "../../assets/image-jeremy.png";
import "./Profile.style.scss";
const ProfileCard = ({ clickHandler }) => {
  return (
    <aside className="profile--container">
      <div className="profile--details">
        <div className="image--container">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="profile-name--container">
          <span>Report for</span>
          <h1 className="profile--name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={clickHandler}>Daily</button>
        <button onClick={clickHandler}>Weekly</button>
        <button onClick={clickHandler}>Monthly</button>
      </div>
    </aside>
  );
};

export default ProfileCard;
