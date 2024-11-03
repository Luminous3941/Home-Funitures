import React, { useState } from "react";

const CheckOut = () => {
  // State to track the checkbox and success div
  const [isReturningCustomer, setIsReturningCustomer] = useState(false);
//   const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  // Toggle the checkbox value
  const handleCheckboxChange = () => {
    setIsReturningCustomer(!isReturningCustomer);
  };

  function openSuccess() {
    document.getElementById("success").classList.remove("hidden");
  }

  function closeSuccess() {
    document.getElementById("success").classList.add("hidden");
  }

  return (
    <div className="mt-20 mb-3 flex flex-wrap justify-center md:mx-auto relative">
      {/* Main Form */}
      <section className="w-[60%]">
        <input
          type="checkbox"
          className="ml-3 mr-2 mb-4"
          onChange={handleCheckboxChange}
          checked={isReturningCustomer}
        />
        <span>Returning Customer?</span>

        
        {!isReturningCustomer && (
          <div className="border-gray-600 border rounded-lg new ml-3 p-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-2xl">Delivery Information</h3>
              <div className="bg-gray-200 rounded-2xl cursor-pointer py-1 px-2">
                Save Information
              </div>
            </div>
            <div className="flex flex-wrap justify-between w-[100%]">
              <div className="flex flex-col mb-3 w-[49%]">
                <p className="font-semibold mb-1">First Name*</p>
                <input
                  type="text"
                  placeholder="Type here ..."
                  className="border p-3 rounded"
                />
              </div>
              <div className="flex flex-col mb-3 w-[49%]">
                <p className="font-semibold mb-1">Last Name*</p>
                <input
                  type="text"
                  placeholder="Type here ..."
                  className="border p-3 rounded"
                />
              </div>
              <div className="flex flex-col mb-3 w-[100%]">
                <p className="font-semibold mb-1">Address*</p>
                <input
                  type="text"
                  placeholder="Type here ..."
                  className="border p-3 rounded"
                />
              </div>
              <div className="flex flex-col mb-3 w-[49%]">
                <p className="font-semibold mb-1">City/Town*</p>
                <input
                  type="text"
                  placeholder="Type here ..."
                  className="border p-3 rounded"
                />
              </div>
              <div className="flex flex-col mb-3 w-[49%]">
                <p className="font-semibold mb-1">Postal Code*</p>
                <input
                  type="text"
                  placeholder="Type here ..."
                  className="border p-3 rounded"
                />
              </div>
              <div className="flex flex-col mb-3 w-[49%]">
                <p className="font-semibold mb-1">Mobile*</p>
                <input
                  type="text"
                  placeholder="Type here ..."
                  className="border p-3 rounded"
                />
              </div>
              <div className="flex flex-col mb-3 w-[49%]">
                <p className="font-semibold mb-1">Email*</p>
                <input
                  type="email"
                  placeholder="Type here ..."
                  className="border p-3 rounded"
                />
              </div>
            </div>
          </div>
        )}

       
        {isReturningCustomer && (
          <div className="border-gray-600 border rounded-lg ml-3 p-4">
            <div className="flex justify-between mb-4 returning">
              <h3 className="font-bold text-2xl">Delivery Information</h3>
              <div className="bg-gray-200 rounded-xl cursor-pointer py-1 px-3">
                Edit
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Luminous Larry</p>
              <p>Taiwo Oladiran Strt, Ijegun, Lagos State</p>
              <p>+234 9039413863</p>
              <p>Luminous3941@gmail.com</p>
            </div>
          </div>
        )}
      </section>

      
      <section className="w-[30%] p-6 border-gray-600 border rounded-lg ml-8">
        <div>
          <h3 className="font-bold text-3xl mb-8">Order Summary</h3>
          <div className="flex justify-between rounded-2xl bg-gray-100 w-full mb-8">
            <input
              className="rounded-tl-xl rounded-bl-xl p-3 bg-gray-100"
              placeholder="Enter Coupon Code"
              type="text"
            />
            <button className="rounded-2xl p-2 bg-green-950 text-white">
              Apply Coupon
            </button>
          </div>
          <h3 className="font-bold text-xl mb-6">Payment Details</h3>
          <div className="flex flex-col">
            <div>
              <input
                className="mb-3 mr-3 items-center"
                type="radio"
                name="payment"
              />
              <span>Cash on Delivery</span>
            </div>
            <div>
              <input
                className="mb-3 mr-3 items-center"
                type="radio"
                name="payment"
              />
              <span>Shopcart Card</span>
            </div>
            <div>
              <input
                className="mb-3 mr-3 items-center"
                type="radio"
                name="payment"
              />
              <span>PayPal</span>
            </div>
            <div>
              <input
                className="mb-3 mr-3 items-center"
                type="radio"
                name="payment"
              />
              <span>Credit or Debit Card</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-4 w-[100%]">
            <div className="flex flex-col mb-4 w-[100%]">
              <p className="font-semibold mb-1">Email*</p>
              <input
                type="email"
                placeholder="Type here ..."
                className="border p-3 rounded"
              />
            </div>
            <div className="flex flex-col mb-4 w-[100%]">
              <p className="font-semibold mb-1">Card Holder Name*</p>
              <input
                type="text"
                placeholder="Type here ..."
                className="border p-3 rounded"
              />
            </div>
            <div className="flex flex-col mb-4 w-[100%]">
              <p className="font-semibold mb-1">Card Number*</p>
              <input
                type="text"
                placeholder="0000......1234"
                className="border p-3 rounded"
              />
            </div>
            <div className="flex flex-col mb-4 w-[49%]">
              <p className="font-semibold mb-1">Expiry*</p>
              <input
                type="text"
                placeholder="MM/YY"
                className="border p-3 rounded"
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <p className="font-semibold mb-1">CVC*</p>
              <input
                type="text"
                placeholder="000"
                className="border p-3 rounded"
              />
            </div>
          </div>

          <div>
            <p className="flex justify-between mt-3">
              <span>Sub Total</span>
              <span>$2000</span>
            </p>
            <p className="flex justify-between mt-3">
              <span>Coupon Discount</span>
              <span>-$20</span>
            </p>
            <p className="flex justify-between mt-3">
              <span>Shipping</span>
              <span>$50</span>
            </p>
            <p className="flex justify-between mt-6">
              <span>Total</span>
              <span>$2030</span>
            </p>
          </div>
          <button
            className="w-full p-3 bg-green-950 text-white rounded-3xl my-6"
            onClick={openSuccess}
          >
            Confirm Payment
          </button>
        </div>
      </section>

        <div id="success" className="w-screen h-screen hidden bg-white bg-opacity-90 absolute top-[50%]">

            <div  className=" justify-center m-auto h-1/2 bg-gradient-to-b from-blue-100 to-green-100 p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2l4-4m0 0a9 9 0 11-3 7.9 9 9 0 01-7-7.9"
                    />
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold mt-4 text-gray-900">
                    Your order has been accepted
                </h2>
                <p className="text-gray-500 mt-2">Transaction ID: 8984294820</p>
                <button onClick={closeSuccess} className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg mt-6 hover:bg-orange-600">
                    Continue Shopping
                </button>
            </div>
        </div>
    </div>
  );
};

export default CheckOut;
