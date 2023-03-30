import FoodCart from "../Card/FoodCard/FoodCart";
import { TabContent } from "reactstrap";
import { ActiveContext } from "../../Context/ActiveContext";
import { useContext, useState, useEffect } from "react";
import { FoodTypeData } from "../../../api/tempAPI";

export default function Food() {
  const context = useContext(ActiveContext);
  const classes = `mt-4`;
  const [FoodType, setFoodType] = useState([]);

  const getFoodDataTest = async () => {
    let data = await FoodTypeData();
    setFoodType(data.DT);
  };

  useEffect(() => {
    getFoodDataTest();
  }, []);

  return (
    <TabContent className={classes} activeTab={context.activeTab}>
      {FoodType.map((foodtype, idx) => {
        return <FoodCart key={idx} foodtype={foodtype} />;
      })}
    </TabContent>
  );
}
