import data from "../../utils/tracking-data.json";
import Card from "../Card-Component/Card.component";

import "./Category.style.scss";

const Category = ({ value }) => {
  // console.log(data);
  return (
    <main className="category-container">
      {data.map((activity) => {
        return <Card key={activity.title} activity={activity} value={value} />;
      })}
    </main>
  );
};

export default Category;
