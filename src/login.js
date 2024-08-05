import "./App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Home = () => {
  const navigate = useNavigate();
  const card_data = [
    {
      image: "/login/brands transparent.png",
      title: "Live Tracking",
      description: "Real time salary status",
    },
    {
      image: "/login/credit.svg",
      title: "Credit Card Payment",
      description: "Obtain credit salaries to purchase items and pay on time",
    },
    {
      image: "/login/brands transparent.svg",
      title: "Top brands",
      description: "One Stop with all preferred brands for all Money",
    },
    {
      image: "/login/call_agent.png",
      title: "Dedicated Call Back Agent",
      description: "An agent assigned to you for all the assistance you need.",
    },
  ];

  const [isCreateNewAccount, setIsCreateNewAccount] = useState(false);
  const goToCreateAcoount = () => {
    setIsCreateNewAccount(!isCreateNewAccount);
  };
  const backToLogin = () => {
    setIsCreateNewAccount(!isCreateNewAccount);
  };
  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper flex flex-row justify-between w-full">
      <div className="images-container max-w-[60%] h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 mx-auto max-w-[65%]">
          {card_data &&
            card_data.map((item, index) => (
              <div
                className="login-inner-boxes m-3 flex flex-col items-center justify-center gap-1"
                key={index}
              >
                {index % 2 === 0 ? (
                  <img
                    className="login__section_image"
                    src="/login/credit.svg"
                    alt="img"
                  />
                ) : (
                  <img
                    className="login__section_image"
                    src="/login/call_agent.png"
                    alt="img"
                  />
                )}
                <b className="text-[14px] m-0 p-0">{item.title}</b>
                <span className="max-w-[75%] text-center text-[12px] m-0 p-0">
                  {item.description}
                </span>
              </div>
            ))}
        </div>
      </div>

      {!isCreateNewAccount ? (
        <div className="form-container max-w-[30%] flex flex-col items-center justify-center mx-auto p-5 h-screen max-h-screen">
          <div class="flex flex-col items-center justify-center">
            <img
              src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/QuickBooks.svg"
              alt="img"
              width={80}
            />
            <b className="text-[14px] mt-3">Welcome to</b>
            <span class="text-[14px] font-light">
              the most trusted salaries system
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-10">
            <Input
              size="small"
              placeholder="User ID"
              prefix={<UserOutlined />}
            />
            <Input.Password
              size="small"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
            <div className="flex items-center justify-between w-full cursor-pointer">
              <span
                className="text-[12px] underline text-[#008fbe]"
                onClick={() => goToCreateAcoount()}
              >
                Create new account
              </span>
              <span className="text-gray-600 text-[12px]">
                Forget Password?
              </span>
            </div>
            <Button
              type="primary"
              color="#fff"
              background="#008fbe"
              block
              className="mt-5 w-full"
              onClick={() => goToDashboard()}
            >
              Login
            </Button>
          </div>
        </div>
      ) : (
        <div className="form-container max-w-[30%] flex flex-col items-center justify-center mx-auto p-5 h-screen max-h-screen">
          <span className="text-[18px]">Create new account</span>
          <div className="flex flex-col items-center justify-center gap-3 mt-10">
            <Input
              size="small"
              placeholder="Email Address"
              prefix={<UserOutlined />}
            />
            <Input
              size="small"
              placeholder="User ID"
              prefix={<UserOutlined />}
            />
            <Input.Password
              size="small"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
            <Input.Password
              size="small"
              placeholder="Confirm Password"
              prefix={<LockOutlined />}
            />
            <Button
              type="primary"
              color="#fff"
              background="#008fbe"
              block
              className="mt-0 w-full"
              onClick={() => backToLogin()}
            >
              Create Account
            </Button>
            <Button
              type="primary"
              color="#000"
              background="#fff"
              block
              className="mt-0 w-full"
              onClick={() => backToLogin()}
            >
              Back to Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
