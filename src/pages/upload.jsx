import { useState } from "react";
import { useHistory } from "react-router-dom";

function Page({ items, setItems }) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  return (
    <div className="page">
      <h1>Upload</h1>
      <div className="editPage">
        <div>
          <div className="edit">
            <label>Title:</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.currentTarget.value);
              }}
            />
          </div>

          <div className="edit">
            <label>Photo:</label>
            <input
              type="text"
              onChange={(e) => {
                setPhoto(e.currentTarget.value);
              }}
            />
          </div>

          <div className="edit">
            <label>Price:</label>
            <input
              type="number"
              onChange={(e) => {
                setPrice(e.currentTarget.value);
              }}
            />
          </div>

          <div className="edit">
            <label>Quantity:</label>
            <input
              type="number"
              onChange={(e) => {
                setQuantity(e.currentTarget.value);
              }}
            />
          </div>
          <div className="edit">
            <button
              onClick={() => {
                const newItem = {
                  title,
                  photo,
                  price,
                  quantity,
                  id: Math.random(),
                };
                const newItems = [...items, newItem];
                setItems(newItems);
                history.push("/items");
              }}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
