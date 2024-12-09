import React from "react";
import { IoMdSettings } from "react-icons/io";
import { Button } from "antd";
import { FaSearch } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import myImage from "../../../assets/avartaMeo.jpg";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { LiaUserSecretSolid } from "react-icons/lia";
import { FaImages } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

export default function GroundHeader() {
  return (
    <header>
      <div className="flex flex-col lg:flex-row h-screen font-semibold">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white px-4 py-2 flex flex-col h-auto lg:h-screen">
          <div className="flex justify-between items-center">
            <h2 className="text-[24px] text-black">Nhóm</h2>
            <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
              <IoMdSettings className="text-lg" />
            </div>
          </div>
          <div className="relative mt-4">
            {/* Search Input */}
            <input
              type="search"
              placeholder="検索"
              className="w-full px-10 py-2 border border-gray-300 rounded-full"
            />
            {/* Search Icon */}
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-col gap-3 mt-3 overflow-auto">
            <div className="flex gap-5">
              <div className="flex items-center p-1 bg-gray-300 rounded-full">
                <FaNewspaper />
              </div>
              <p>bảng feed của bạn</p>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center p-1 bg-gray-300 rounded-full">
                <RiCompassDiscoverFill />
              </div>
              <p>khám phá</p>
            </div>

            <div className="flex gap-5">
              <div className="flex items-center p-1 bg-gray-300 rounded-full">
                <MdGroups />
              </div>
              <p>nhóm</p>
            </div>
            <Button className="border-none bg-blue-200 text-blue-600">
              + tạo nhóm mới
            </Button>

            <div className="flex justify-between border-t-2 pt-2">
              <p className="text-[14px]">nhóm đã tham gia</p>
              <a href="#" className="text-[14px] text-blue-400">
                xem tất cả
              </a>
            </div>

            <ul>
              <li className="flex gap-3 hover:bg-gray-200 rounded-md hover:cursor-pointer">
                <img
                  src={myImage}
                  alt=""
                  height={50}
                  width={50}
                  className="rounded-md"
                />
                <div className="flex flex-col">
                  <p>cộng đồng cộng nghệ </p>
                  <p className="text-[12px] text-gray-500">
                    lần hoạt động gần nhất 2 giờ trước
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 bg-white px-4 py-2 flex flex-col">
          <div>
            <img
              src={myImage}
              alt=""
              className="w-full h-[200px] lg:h-[350px] object-cover rounded-b-md"
            />
          </div>
          <h1 className="text-[24px] lg:text-[30px] mt-3">
            Cộng Đồng Công Nghệ Thông Tin
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <div>
              <FaEarthAmericas className="text-[12px]" />
            </div>
            <div className="flex gap-2">
              <p className="text-[12px] text-gray-500">nhóm công khai</p>
              <p className="text-[12px] text-gray-500">8,5k thành viên</p>
            </div>
          </div>

          <div className="flex mt-3 justify-between border-b-2 pb-2 flex-wrap">
            <div className="flex mt-3 items-center">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={myImage}
                  alt=""
                  height={30}
                  width={30}
                  className="rounded-full border border-white -ml-1"
                />
              ))}
            </div>

            <div className="flex items-center gap-2 mt-2 lg:mt-0">
              <Button className="text-[12px] bg-blue-500 text-white">
                + Mời
              </Button>
              <Button className="text-[12px] bg-gray-300 flex items-center">
                <FaShare className="mr-1" />
                chia sẻ
              </Button>
              <Button className="text-[12px] bg-gray-300 flex items-center">
                <MdGroups2 className="mr-1" />
                Đã tham gia
                <BiSolidDownArrow className="ml-1" />
              </Button>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-wrap gap-3">
              {[
                "giới thiệu",
                "thảo luận",
                "đáng chú ý",
                "mọi người",
                "sự kiện",
                "File phương tiện",
                "File",
              ].map((text) => (
                <a
                  key={text}
                  className="text-[14px] hover:bg-gray-200 p-1 rounded-md"
                  href="#"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
