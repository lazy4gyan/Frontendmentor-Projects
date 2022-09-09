import { useState } from "react";

import Category from "../Category-Component/Category.component";
import ProfileCard from "../Profile-Card-Component/Profile.component";

import "./Dashboard.style.scss";

const Dashboard = () => {
  const [value, setValue] = useState(null);

  const clickHandler = (event) => {
    setValue(event.target.innerHTML);
  };
  
  return (
    <section className="dashboard--container">
      <ProfileCard clickHandler={clickHandler} />
      <Category value={value} />
    </section>
  );
};

export default Dashboard;
