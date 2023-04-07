import React from "react";

export const OrderHistoryPage = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>Add Item</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newItem = {
              name: event.target.elements.name.value,
              price: event.target.elements.price.value,
            };
            addItem(newItem);
            event.target.reset();
          }}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input id="price" type="number" required />
          </div>
          <div>
            <button type="submit">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};
