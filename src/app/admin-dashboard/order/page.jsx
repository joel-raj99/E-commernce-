"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle, Clock, CreditCard, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  // 🔹 Fetch orders for logged-in user
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // ✅ Try to get userId from localStorage
        let userId = localStorage.getItem("userId");

        // If not present, fetch from API (or you can set it manually after login)
        if (!userId) {
          // Example: If your backend returns user info along with orders
          const res = await axios.get("http://localhost:3001/api/order");
          if (res.data?.[0]?.userId?._id) {
            userId = res.data[0].userId._id;
            localStorage.setItem("userId", userId); // ✅ store it for next time
          }
        }

        // Now fetch all orders related to that user
        const res = await axios.get(`http://localhost:3001/api/order`);
        let data = res.data;

        // Optional: filter client-side to show only that user's orders
        const filteredOrders = Array.isArray(data)
          ? data.filter((order) => order.userId?._id === userId)
          : [];

        setOrders(filteredOrders);
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch your orders!");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // 🔹 Update order status and use userId from localStorage
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const userId = localStorage.getItem("userId"); // ✅ get from localStorage
      if (!userId) {
        toast.error("User ID not found. Please log in again.");
        return;
      }

      setUpdatingId(orderId);

      await axios.put(`http://localhost:3001/api/order/${orderId}`, {
        status: newStatus,
        userId, // ✅ Send userId for backend tracking
      });

      // ✅ Update UI instantly
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );

      toast.success(`Order status updated to ${newStatus}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update order status");
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <Clock className="text-yellow-500" />;
      case "Completed":
        return <CheckCircle className="text-green-500" />;
      default:
        return <Clock className="text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-black">
        ⏳ Loading your orders...
      </div>
    );
  }

  return (
    <div className="p-2 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          🧾 My Orders
        </h2>

        {orders.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            No orders found for your account.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                <tr>
                  <th className="px-6 py-3 text-left">User</th>
                  <th className="px-6 py-3 text-left">Items</th>
                  <th className="px-6 py-3 text-center">Total</th>
                  <th className="px-6 py-3 text-left">Address</th>
                  <th className="px-6 py-3 text-center">Payment</th>
                  <th className="px-6 py-3 text-center">Status</th>
                  <th className="px-6 py-3 text-center">Order ID</th>
                  <th className="px-6 py-3 text-center">Order Date</th>
                </tr>
              </thead>

              <tbody className="text-sm text-gray-800">
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-t hover:bg-gray-50 transition-all duration-200"
                  >
                    {/* 🧍 User Info */}
                    <td className="px-6 py-3">
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {order.userId?.username || "You"}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {order.userId?.email || "No email"}
                        </span>
                      </div>
                    </td>

                    {/* 📦 Items */}
                    <td className="px-6 py-3">
                      {order.items?.map((item, i) => (
                        <div key={i}>
                          {item.name || "Item"} - ₹{item.price || 0}
                        </div>
                      ))}
                    </td>

                    {/* 💰 Total */}
                    <td className="px-6 py-3 text-center font-semibold text-blue-600">
                      ₹{order.totalAmount}
                    </td>

                    {/* 🏠 Address */}
                    <td className="px-6 py-3">{order.address}</td>

                    {/* 💳 Payment */}
                    <td className="px-6 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CreditCard className="text-gray-500" size={16} />
                        <span>{order.paymentMethod}</span>
                      </div>
                    </td>

                    {/* 📌 Status */}
                    <td className="px-6 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon(order.status)}
                        <select
                          value={order.status}
                          onChange={(e) =>
                            handleStatusChange(order._id, e.target.value)
                          }
                          disabled={updatingId === order._id}
                          className={`border text-sm rounded-lg px-2 py-1 outline-none ${
                            order.status === "Pending"
                              ? "text-yellow-600 border-yellow-400"
                              : "text-green-600 border-green-400"
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>

                        {updatingId === order._id && (
                          <Loader2
                            className="animate-spin text-gray-500"
                            size={16}
                          />
                        )}
                      </div>
                    </td>

                    {/* 🧾 Razorpay Order ID */}
                    <td className="px-6 py-3 text-center font-mono text-gray-500">
                      {order.razorpayOrderId}
                    </td>

                    {/* 📅 Date */}
                    <td className="px-6 py-3 text-center text-gray-500">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
