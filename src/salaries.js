/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2024 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";

import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
  List,
  Avatar,
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
  FlagTwoTone,
} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";

// import Echart from "../components/chart/EChart";
// import LineChart from "../components/chart/LineChart";

import ava1 from "./assets/images/logo-shopify.svg";
import ava2 from "./assets/images/logo-atlassian.svg";
import ava3 from "./assets/images/logo-slack.svg";
import ava4 from "./assets/images/logo-spotify.svg";
import ava5 from "./assets/images/logo-jira.svg";
import ava6 from "./assets/images/logo-invision.svg";
import team1 from "./assets/images/team-1.jpg";
import team2 from "./assets/images/team-2.jpg";
import team3 from "./assets/images/team-3.jpg";
import team4 from "./assets/images/team-4.jpg";
import card from "./assets/images/info-card-1.jpg";
import { PlusOutlined, ExclamationOutlined } from "@ant-design/icons";

function Salaries() {
  const { Title, Text } = Typography;

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const [reverse, setReverse] = useState(false);

  const yesterday = [
    {
      avatar: <PlusOutlined style={{ fontSize: 10 }} />,
      title: "Stripe payment",
      description: "26 March 2024, at 12:30 AM",
      amount: "+ $750",
      textclass: "text-fill",
      amountcolor: "text-success",
    },
    {
      avatar: <ExclamationOutlined style={{ fontSize: 10 }} />,
      title: "Gov payment",
      description: "26 March 2024, at 04:00 AM",
      amount: "Pending",
      textclass: "text-warning",
      amountcolor: "text-warning-b",
    },
  ];

  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];
  const download = [
    <svg
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key="0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
        fill="#111827"
      ></path>
    </svg>,
  ];
  const deletebtn = [
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
        fill="#111827"
        className="fill-danger"
      ></path>
    </svg>,
  ];
  const flagicon = [
    <svg
      width="14"
      height="14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
      viewBox="0 0 448 512"
    >
      <path
        className="fill-red-7"
        d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 64 0 350.5 0 400l0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52l0-28zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8l0 241.8-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5l0-237z"
      />
    </svg>,
  ];
  const addbtn = [
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
      viewBox="0 0 448 512"
    >
      <path
        className="fill-green-7"
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
      />
    </svg>,
  ];
  const invoicebtn = [
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
      viewBox="0 0 384 512"
    >
      <path
        className="fill-blue-7"
        d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 80c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16l0 17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1s0 0 0 0s0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1l0 17.1c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17.8c-11.2-2.1-21.7-5.7-30.9-8.9c0 0 0 0 0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5s0 0 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7l0-17.3c0-8.8 7.2-16 16-16z"
      />
    </svg>,
  ];

  const mins = [
    <svg
      width="10"
      height="10"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 10C5 9.44772 5.44772 9 6 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L6 11C5.44772 11 5 10.5523 5 10Z"
        className="fill-danger"
      ></path>
    </svg>,
  ];

  const data = [
    {
      title: "March, 01, 2024",
      description: "S415646",
      amount: "$180",
    },
    {
      title: "March, 01, 2024",
      description: "S415646",
      amount: "$180",
    },
    {
      title: "March, 01, 2024",
      description: "S415646",
      amount: "$180",
    },
    {
      title: "March, 01, 2024",
      description: "S415646",
      amount: "$180",
    },
    {
      title: "March, 01, 2024",
      description: "S415646",
      amount: "$180",
    },
    {
      title: "March, 01, 2024",
      description: "S415646",
      amount: "$180",
    },
    {
      title: "March, 01, 2024",
      description: "S415646",
      amount: "$180",
    },
  ];

  const newest = [
    {
      headding: <h6>NEWEST</h6>,
      avatar: mins,
      title: "Employs salaries",
      description: "27 March 2024, at 12:30 PM",
      amount: "- $2,500",
      textclass: "text-light-danger",
      amountcolor: "text-danger",
    },
    {
      avatar: <PlusOutlined style={{ fontSize: 10 }} />,
      title: "Clients payment",
      description: "27 March 2024, at 04:30 AM",
      amount: "+ $2,000",
      textclass: "text-fill",
      amountcolor: "text-success",
    },
  ];
  const information = [
    {
      title: "Oliver Liam",
      description: "Viking Burrito",
      address: "oliver@burrito.com",
      vat: "FRB1235476",
    },
    {
      title: "Lucas Harper",
      description: "Stone Tech Zone",
      address: "lucas@syone-tech.com",
      vat: "FRB1235476",
    },
    {
      title: "Oliver Liam",
      description: "ethan@fiber.com",
      vat: "NumberFRB1235476",
    },
  ];
  const calender = [
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
        fill="#111827"
        className="fill-muted"
      ></path>
    </svg>,
  ];
  const dollor = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z"
        fill="#fff"
      ></path>
      <path
        d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const profile = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
        fill="#fff"
      ></path>
      <path
        d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z"
        fill="#fff"
      ></path>
      <path
        d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z"
        fill="#fff"
      ></path>
      <path
        d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const heart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const cart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z"
        fill="#fff"
      ></path>
    </svg>,
  ];

  const list = [
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: true,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
    {
      id: "C9302",
      deductions: "$450",
      bonus: "$450",
      joining_date: "1 JUL 2020",
      img: team1,
      name: "Maia John Nathan",
      sal: "$14,000 / $168,000",
      m_sal: "$14,000",
      y_sal: "$168,000",
      total: "$17,000",
      end_service: false,
      allowance: "$24,000",
      progress: <Progress percent={60} size="small" />,
    },
  ];

  const timelineList = [
    {
      title: "$20,400 - freelancer payment",
      time: "09 JUN 7:20 PM",
      color: "green",
    },
    {
      title: "$18,000 - salary payment for T36323",
      time: "08 JUN 12:20 PM",
      color: "green",
    },
    {
      title: "$70,200 - cleaning server payments",
      time: "04 JUN 3:10 PM",
      color: "green",
    },
    {
      title: "$18,000 - salary payment for K90331",
      time: "02 JUN 2:45 PM",
      color: "green",
    },
    {
      title: "New employ added Q482344",
      time: "14 MAY 3:30 PM",
      color: "gray",
    },
    {
      title: "New employ added V40032",
      time: "3 MAY 3:30 PM",
      color: "gray",
    },
    {
      title: "New employ added L9234",
      time: "14 MAY 3:30 PM",
      color: "gray",
    },
  ];

  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <div className="layout-content">
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
            <Card bordered={false} className="criclebox cardbody h-full">
              <div className="project-ant">
                <div>
                  <Title level={5}>All Employs</Title>
                  <div className="flex items-center gap-3">
                    <Paragraph className="lastweek">
                      total employs<span className="blue mr-2">830</span> /
                    </Paragraph>
                    <Paragraph className="lastweek">
                      processed<span className="mx-2 text-green-600">830</span>{" "}
                      /
                    </Paragraph>
                    <Paragraph className="lastweek">
                      not processed
                      <span className="ml-2 text-red-600">830</span>
                    </Paragraph>
                  </div>
                </div>
                <div className="ant-filtertabs">
                  <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value="a">ALL</Radio.Button>
                      <Radio.Button value="b">Payed</Radio.Button>
                      <Radio.Button value="c">Pending</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-fit gap-3">
                <Button type="primary" className="ml-6">
                  Refresh
                </Button>
                <Button type="primary" className="">
                  Select Multiple
                </Button>
                <Button type="primary" className="">
                  Process a New Payment
                </Button>
                <div className="shadow-none">
                  <Upload {...uploadProps}>
                    <Button
                      type="dashed"
                      className="ant-full-box"
                      icon={<ToTopOutlined />}
                    >
                      <span className="click">Upload Employ Excel Sheet</span>
                    </Button>
                  </Upload>
                </div>
              </div>
              <div className="ant-list-box table-responsive mt-5">
                <table className="width-100">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>DEDUCTIONS</th>
                      <th>BONUS</th>
                      <th>MONTHLY / YEARLY</th>
                      <th>TOTAL TO PAY</th>
                      <th>NOTE</th>
                      <th>MANAGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>{d.id}</td>
                        <td className="text-xs font-weight-bold">
                          <span className=" text-red-500">
                            - {d.deductions}{" "}
                          </span>
                        </td>
                        <td className="text-xs font-weight-bold">
                          <span className=" text-green-500">+ {d.bonus} </span>
                        </td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.m_sal} / {d.y_sal}
                          </span>
                        </td>
                        <td className="text-xs font-weight-bold">
                          <span className=" text-blue-500 text-[13px] underline font-bold">
                            {d.total}{" "}
                          </span>
                        </td>
                        <td className="text-xs font-weight-bold">
                          <div className="flex flex-col gap-[5px]">
                            {d.end_service && (
                              <div className="m-0 p-0 flex items-center justify-start mx-auto gap-2">
                                {/* {flagicon} */}
                                <FlagTwoTone />
                                <span className="">
                                  {" "}
                                  end of service payment
                                </span>
                              </div>
                            )}
                            {index % 2 === 0 ? (
                              <span>😡 salary not paid yet</span>
                            ) : (
                              <span>😊 salary paid successfully</span>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-x-5">
                            <div className=" cursor-pointer">{addbtn} </div>
                            <div className=" cursor-pointer">{pencil} </div>
                            <div className=" cursor-pointer">{invoicebtn} </div>
                            <div className=" cursor-pointer">{deletebtn} </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="uploadfile mt-5 shadow-none">
                <Button type="secondary" className="width-100">
                  <span className="click">View all</span>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              className="header-solid h-full ant-invoice-card"
              title={[<h6 className="font-semibold m-0">Invoices History</h6>]}
              extra={[
                <Button type="primary">
                  <span>VIEW ALL</span>
                </Button>,
              ]}
            >
              <List
                itemLayout="horizontal"
                className="invoice-list"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    actions={[<Button type="link">{download} PDF</Button>]}
                  >
                    <List.Item.Meta
                      title={item.title}
                      description={item.description}
                    />
                    <div className="amount">{item.amount}</div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="timeline-box">
                <Title level={5}>Payment History</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  this month <span className="bnb2">20%</span>
                </Paragraph>

                <Timeline
                  pending="Recording..."
                  className="timelinelist"
                  reverse={reverse}
                >
                  {timelineList.map((t, index) => (
                    <Timeline.Item color={t.color} key={index}>
                      <Title level={5}>{t.title}</Title>
                      <Text>{t.time}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
                <Button
                  type="primary"
                  className="width-100"
                  onClick={() => setReverse(!reverse)}
                >
                  {<MenuUnfoldOutlined />} REVERSE
                </Button>
              </div>
            </Card>
          </Col>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              bodyStyle={{ paddingTop: 0 }}
              className="header-solid h-full  ant-list-yes"
              title={<h6 className="font-semibold m-0">Your Transactions</h6>}
              extra={
                <p className="card-header-date flex">
                  {calender}
                  <span className="text-[12px]">23 - 30 March 2024</span>
                </p>
              }
            >
              <List
                header={<h6>NEWEST</h6>}
                className="transactions-list ant-newest"
                itemLayout="horizontal"
                dataSource={newest}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar size="small" className={item.textclass}>
                          {item.avatar}
                        </Avatar>
                      }
                      title={item.title}
                      description={item.description}
                    />
                    <div className="amount">
                      <span className={item.amountcolor}>{item.amount}</span>
                    </div>
                  </List.Item>
                )}
              />

              <List
                className="yestday transactions-list"
                header={<h6>YESTERDAY</h6>}
                itemLayout="horizontal"
                dataSource={yesterday}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar size="small" className={item.textclass}>
                          {item.avatar}
                        </Avatar>
                      }
                      title={item.title}
                      description={item.description}
                    />
                    <div className="amount">
                      <span className={item.amountcolor}>{item.amount}</span>
                    </div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Salaries;
