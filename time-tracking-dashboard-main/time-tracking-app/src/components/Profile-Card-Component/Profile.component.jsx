import ProfilePic from "../../assets/image-jeremy.png";
import "./Profile.style.scss";
const ProfileCard = ({ clickHandler }) => {
  return (
    <aside className="profile--container">
      <div className="profile--details">
        <div>
          <img src={ProfilePic} alt="" />
        </div>
        <span>Report for</span>
        <h1 className="profile--name">Jeremy Robson</h1>
      </div>
      <button onClick={clickHandler}>Daily</button>
      <button onClick={clickHandler}>Weekly</button>
      <button onClick={clickHandler}>Monthly</button>
    </aside>
  );
};

export default ProfileCard;


