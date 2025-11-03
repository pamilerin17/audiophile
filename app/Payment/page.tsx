"use client";


import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();

  const handlePayment = () => {
    // pretend payment succeeded ✅
    clearCart(); 
    router.push("/OrderConfirmed");
  };

  return (
    <div className="px-6 md:px-24 py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Payment</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="flex flex-col gap-4">
            {items.map((product, i) => (
              <div key={i} className="flex justify-between border-b py-3">
                <span>{product.name}</span>
                <span>₦{product.price.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-6">Total: ₦{total.toLocaleString()}</h2>

          <button
            onClick={handlePayment}
            className="mt-10 bg-orange-600 text-white py-3 px-10 uppercase tracking-wider hover:bg-orange-700 transition"
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}
