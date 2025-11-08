import axios from "axios";

export default function CheckoutButton({ userId, address }) {
  const handlePayment = async () => {
    const { data } = await axios.post("/api/order", {
      userId,
      address,
      paymentMethod: "Online",
    });

    const options = {
      key: data.key,
      amount: data.amount,
      currency: data.currency,
      name: "Your Store",
      description: "Order Payment",
      order_id: data.id,
      handler: async function (response) {
        // verify payment
        await axios.post("/api/order/verify", response);
        alert("Payment successful!");
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-600 text-white px-4 py-2 rounded-md"
    >
      Pay Online
    </button>
  );
}
