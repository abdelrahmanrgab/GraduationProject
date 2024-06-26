import React from "react";
import "./pricingPlans.css";

const PricingPlans = () => {
  return (
    <div className="pricing_plans">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-normal text-center mb-20 text-black">Plans & Pricing</h1>

        <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:gap-0">
          {/* Free Plan */}
          <div className="bg-white/50 p-8 px-10 rounded-3xl shadow-lg w-72 flex flex-col  free_plan">
            <h2 className="text-3xl font-extrabold mb-4 text-black">FREE</h2>
            <p className="mb-6 font-medium">Advanced tools to take your work to the next level.</p>
            <ul className="mb-6 font-medium">
              <li className="flex items-center mb-2 gap-2">
                <span className="p-1 rounded-full check-icon">
                  <svg className="h-3 w-3" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                </span>
                Only two pages
              </li>
              <li className="flex items-center mb-2 gap-2">
                <span className="p-1 rounded-full check-icon">
                  <svg className="h-3 w-3" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                </span>
                Edit two dashboards
              </li>
              <li className="flex items-center mb-2 gap-2">
                <span className="p-1 rounded-full check-icon">
                  <svg className="h-3 w-3" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                </span>
                No custom domains
              </li>
            </ul>
            <button className="text-white py-2 px-4 font-medium rounded-3xl free_plan_btn">Choose plan</button>
          </div>

          {/* Premium Plan */}
          <div className="p-8 rounded-3xl w-72 flex flex-col text-white premium_plan">
            <div className="self-end bg-pink-500 text-xs px-4 py-1 rounded-3xl font-medium premium_plan_badge">MOST POPULAR</div>
            <h2 className="text-3xl my-4">
              <span className="font-extrabold">$20</span>/month
            </h2>
            <p className="my-6 font-medium">Automation plus enterprise-grade features.</p>
            <ul className="mb-6 font-medium">
              <li className="flex items-center mb-2 gap-2">
                <span className="p-1 rounded-full bg-white/25">
                  <svg className="h-3 w-3" fill="white" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                </span>
                More than 2 pages
              </li>
              <li className="flex items-center mb-2 gap-2">
                <span className="p-1 rounded-full bg-white/25">
                  <svg className="h-3 w-3" fill="white" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                </span>
                Edit more than 2 pages
              </li>
              <li className="flex items-center mb-2 gap-2">
                <span className="p-1 rounded-full bg-white/25">
                  <svg className="h-3 w-3" fill="white" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                </span>
                Custom domains
              </li>
              <li className="flex items-center mb-2 gap-2">
                <span className="p-1 rounded-full bg-white/25">
                  <svg className="h-3 w-3" fill="white" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                </span>
                Advanced User
              </li>
            </ul>
            <button className="bg-pink-500 text-white py-2 px-4 rounded-3xl font-medium premium_plan_btn">Choose plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
