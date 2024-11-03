import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full h-[383px] flex justify-between box-border p-6 md:p-12">
      <div className="flex flex-col gap-6">
        <div className="text-white text-[24px] font-medium leading-[29px]">Crafted Charm</div>
        <p className="text-white text-opacity-80 text-[20px] font-medium leading-[24.2px]">
          Get free guides and updates from our team
        </p>
        <div className="flex flex-col md:flex-row w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full md:w-auto rounded-t-md md:rounded-l-md md:rounded-tr-none bg-white p-3"
          />
          <button className="w-full md:w-auto h-[48px] bg-gray-200 rounded-b-md md:rounded-r-md md:rounded-bl-none text-gray-800 font-medium text-[16px]">
            Send
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-white text-[24px] font-medium">Payment</h2>
        <ul className="list-none m-0 p-0">
          <li className="text-white text-[20px] font-medium mb-2">Paypal</li>
          <li className="text-white text-[20px] font-medium mb-2">Applepay</li>
          <li className="text-white text-[20px] font-medium">Credit/Debit</li>
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-white text-[24px] font-medium">Useful Links</h2>
        <ul className="list-none m-0 p-0">
          <li className="text-white text-[20px] font-medium mb-2">Home page</li>
          <li className="text-white text-[20px] font-medium mb-2">Product page</li>
          <li className="text-white text-[20px] font-medium mb-2">Cart</li>
          <li className="text-white text-[20px] font-medium">Contact Us</li>
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-white text-[24px] font-medium">Join Us</h2>
        <div className="flex gap-4">
          <i className="fab fa-facebook text-white w-[30px] h-[30px] rounded-md"></i>
          <i className="fab fa-instagram text-white w-[30px] h-[30px] rounded-md"></i>
          <i className="fab fa-linkedin text-white w-[30px] h-[30px] rounded-md"></i>
          <i className="fab fa-twitter text-white w-[30px] h-[30px] rounded-md"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
