function Page({ items, setItems }) {
  return (
    <div className="page">
      <h1>Favorites</h1>
      <div className="items">
        {items
          .filter((item) => item.favorite)
          .map((item, index) => {
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
                      item.favorite = false;
                      setItems(items.concat());
                    }}
                  >
                    Remove favorite
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Page;
