import FoodCart from "../../UIElement/FoodCard/FoodCart";
import { TabContent } from "reactstrap";
import { ActiveContext } from "../../Context/ActiveContext";
import { useContext, useState } from "react";
import { FoodData } from "../../../api/tempAPI";

export default function Food() {
  const context = useContext(ActiveContext);
  const classes = `mt-4`;
  const [food, setFood] = useState([]);

  const getFoodList = async () => {
    console.log(FoodData());
  };

  return (
    // <TabContent className={classes} activeTab={context.activeTab}>
    //   {foodtype.map((foodtype, idx) => {
    //   return <FoodCart key={idx} foodtype={foodtype}/>;
    //   })}
    // </TabContent>
    <></>
  );
}
