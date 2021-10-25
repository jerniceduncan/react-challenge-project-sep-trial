import React from "react";

const OrdersList = (props) => {
  const { orders } = props;
  if (!props || !props.orders || !props.orders.length)
    return (
      <div className="empty-orders">
        <h2>There are no orders to display</h2>
      </div>
    );

  return orders.map((order) => {
    const createdDate = new Date(order.createdAt);
    const time = {
      hour: createdDate.getHours() % 12 || 12,
      minute: createdDate.getMinutes().toString().padStart(2, "0"),
      seconds: createdDate.getSeconds().toString().padStart(2, "0"),
    };
    return (
      <div className="row view-order-container" key={order._id}>
        <div className="col-md-4 view-order-left-col p-3">
          <h2>{order.order_item}</h2>
          <p>Ordered by: {order.ordered_by || ""}</p>
        </div>
        <div className="col-md-4 d-flex view-order-middle-col">
          <p>Order placed at <span id="orderTime">{`${time.hour.toString().padStart(2, "0")}:${time.minute}:${time.seconds}`}</span></p>
          <p>Quantity: {order.quantity}</p>
        </div>
        <div className="col-md-4 view-order-right-col">
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  });
};

export default OrdersList;
