"use client";

import Link from "next/link";

export default function OrderConfirmed() {
  return (
    <div className="px-6 md:px-24 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">
        ✅ Payment Successful
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Thank you for your purchase! Your order has been placed and will be delivered soon.
      </p>

      <Link
        href="/"
        className="bg-black text-white py-3 px-10 uppercase tracking-wider hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
