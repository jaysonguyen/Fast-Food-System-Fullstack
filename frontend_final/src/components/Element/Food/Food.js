import FoodCart from "../../UIElement/FoodCard/FoodCart";
import { TabContent } from "reactstrap";
import { ActiveContext } from "../../Context/ActiveContext";
import { useContext } from "react";


let foodtype = [
  {
    id: 1,
    name: "Gà rán",
  },
  {
    id: 2,
    name: "Hamburger",
  },
  {
    id: 3,
    name: "Cơm phần",
  },
  {
    id: 4,
    name: "Tráng miệng",
  },
  {
    id: 5,
    name: "Nước uống",
  },
];

export default function Food() {
  const context = useContext(ActiveContext);
  const classes = `mt-4`;

  return (
    <TabContent className={classes} activeTab={context.activeTab}>
      {foodtype.map((foodtype, idx) => {
      return <FoodCart key={idx} foodtype={foodtype}/>;
      })}
    </TabContent>
  );
}
