import { useState } from "react";

function Page({ items, setItems }) {
  let priceSum = 0;
  items.forEach((item) => {
    priceSum += parseInt(item.price);
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  return (
    <div className="page">
      <h1>Items</h1>
      <div className="items">
        {items.map((item, index) => {
          if (editingIndex === index) {
            return (
              <div key={index} className="item">
                <div>
                  <div>Title:</div>
                  <div>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div>Photo:</div>
                  <div>
                    <input
                      type="text"
                      value={photo}
                      onChange={(e) => {
                        setPhoto(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div>Price:</div>
                  <div>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div>Quantity:</div>
                  <div>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEditingIndex(null);
                      const newItem = {
                        title,
                        photo,
                        price,
                        quantity,
                        favorite: item.favorite,
                        id: item.id,
                      };
                      items[index] = newItem;
                      setItems(items.concat());
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="item">
                <div>
                  <div>Title:</div>
                  <div>{item.title}</div>
                </div>
                <div>
                  <div>Photo:</div>
                  <img alt="item" src={item.photo} />
                </div>
                <div>
                  <div>Price:</div>
                  <div>{item.price}</div>
                </div>
                <div>
                  <div>Quantity:</div>
                  <div>{item.quantity}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEditingIndex(index);
                      setTitle(item.title);
                      setPhoto(item.photo);
                      setPrice(item.price);
                      setQuantity(item.quantity);
                      setItems(items.concat());
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      items.splice(index, 1);
                      setItems(items.concat());
                    }}
                  >
                    Delete
                  </button>
                  {item.favorite ? (
                    <button className="favoriteButton"
                      onClick={() => {
                        item.favorite = false;
                        setItems(items.concat());
                      }}
                    >
                      Remove favorite
                    </button>
                  ) : (
                    <button className="favoriteButton"
                      onClick={() => {
                        item.favorite = true;
                        setItems(items.concat());
                      }}
                    >
                      Add to favorite
                    </button>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
      <strong>total items: {items.length}</strong>
      <br />
      <strong>total price: {priceSum}</strong>
    </div>
  );
}

export default Page;
