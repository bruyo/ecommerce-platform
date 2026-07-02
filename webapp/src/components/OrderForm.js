import axios from 'axios';

function OrderForm() {

  const placeOrder = async () => {

    const order = {
      productId: 1,
      quantity: 2
    };

    const response = await axios.post(
      'http://localhost:3000/orders',
      order
    );

    alert(response.data.message);

  };

  return (
    <div>

      <h2>Place Order</h2>

      <button onClick={placeOrder}>
        Order Laptop
      </button>

    </div>
  );

}

export default OrderForm;
