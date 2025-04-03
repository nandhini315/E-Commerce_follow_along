import React, { useState, useEffect } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export default function CartProduct({ _id, name, images, quantity, price }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantityVal, setQuantityVal] = useState(quantity);

    // Ensure images is always an array
    const validImages = Array.isArray(images) && images.length > 0 ? images : [];

    useEffect(() => {
        if (validImages.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % validImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [validImages]);

    const handleIncrement = () => {
        const newQuantity = quantityVal + 1;
        setQuantityVal(newQuantity);
        updateQuantityVal(newQuantity);
    };

    const handleDecrement = () => {
        const newQuantity = quantityVal > 1 ? quantityVal - 1 : 1;
        setQuantityVal(newQuantity);
        updateQuantityVal(newQuantity);
    };

    const updateQuantityVal = (quantity) => {
        fetch("http://localhost:8000/api/v2/product/cartproduct/quantity", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "nandz1407@gmail.com",
                productId: _id,
                quantity,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("Quantity updated:", data);
            })
            .catch((err) => {
                console.error("Error updating quantity:", err);
            });
    };

    return (
        <div className="h-max w-full p-4 flex justify-between border-b border-neutral-300 bg-neutral-100 rounded-lg">
            <div className="flex flex-col gap-y-2">
                {validImages.length > 0 ? (
                    <img
                        src={`http://localhost:8000${validImages[currentIndex]}`}
                        alt={name}
                        className="w-32 h-32 object-cover rounded-lg border border-neutral-300"
                    />
                ) : (
                    <div className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-lg border border-neutral-300">
                        <span className="text-gray-600">No Image</span>
                    </div>
                )}
                <div className="flex flex-row items-center gap-x-2 md:hidden">
                    <button
                        onClick={handleIncrement}
                        className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl cursor-pointer"
                    >
                        <IoIosAdd />
                    </button>
                    <div className="px-5 py-1 text-center bg-gray-100 rounded-xl">
                        {quantityVal}
                    </div>
                    <button
                        onClick={handleDecrement}
                        className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl cursor-pointer"
                    >
                        <IoIosRemove />
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center px-4">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-lg font-semibold">${(price * quantityVal).toFixed(2)}</p>
                <div className="hidden md:flex flex-row items-center gap-x-2">
                    <button
                        onClick={handleIncrement}
                        className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl cursor-pointer"
                    >
                        <IoIosAdd />
                    </button>
                    <div className="px-5 py-1 text-center bg-gray-100 rounded-xl">
                        {quantityVal}
                    </div>
                    <button
                        onClick={handleDecrement}
                        className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl cursor-pointer"
                    >
                        <IoIosRemove />
                    </button>
                </div>
            </div>
        </div>
    );
}
