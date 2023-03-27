import FoodTypeCart from "../../UIElement/FoodTypeCart/FoodTypeCart";
import { Nav } from "reactstrap";

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

export default function FoodType({ toggle }) {
  return (
    <Nav tabs className="nav nav-tabs pizza-items filters bg-primary">
      {foodtype.map((foodtype, idx) => {
        return (
          <FoodTypeCart
            key={idx}
            foodtype={foodtype}
            toggle={toggle}
          />
        );
      })}
    </Nav>
  );
}
