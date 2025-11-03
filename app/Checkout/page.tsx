'use client';

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();

  // If cart is empty, show a message
  if (!items || items.length === 0) {
    return (
      <div className="px-6 md:px-24 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Your Cart is Empty</h2>
        <p className="text-gray-600">Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (

   
    <div className="px-6 md:px-24 py-20">
      <h2 className="text-3xl font-bold mb-10">Checkout</h2>

      {/* Cart Items */}
      <div className="flex flex-col gap-8">
        {items.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center md:justify-between gap-6 bg-gray-100 p-6 rounded-lg"
          >
            {/* Product Image */}
            {product.image && (
              <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {/* Product Info */}
            <div className="flex-1">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600 mt-2">Quantity: {product.quantity}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-10 flex justify-end text-xl font-bold">
        Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>

      <Link
  href="/Payment"
  className="mt-10 inline-block bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
>
  Continue to Payment
</Link>

    </div>
  );
}
