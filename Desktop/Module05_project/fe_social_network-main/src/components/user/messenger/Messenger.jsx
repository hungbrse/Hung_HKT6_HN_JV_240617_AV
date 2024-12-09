import React from "react";
import { SlOptions } from "react-icons/sl";
import { PiNotePencilFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { Button } from "antd";
import { FaPhone } from "react-icons/fa6";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

import myImage from "../../../assets/avartaMeo.jpg";

export default function Messenger() {
  return (
    <>
      <div className="flex h-screen font-semibold">
        {/* Sidebar Left */}
        <div className="w-1/4 #ffffff px-4 py-2 flex flex-col ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">Đoạn Chát</h1>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                <SlOptions className="text-lg" />
              </div>
              <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                <PiNotePencilFill className="text-lg" />
              </div>
            </div>
          </div>
          <div className="relative mt-4">
            {/* Search Input */}
            <input
              type="search"
              placeholder="検索"
              className="w-full px-10 py-1 border border-gray-300 rounded-full"
            />
            {/* Search Icon */}
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="mt-2">
            <Button className="border-none rounded-full">Hộp Thư</Button>
            <Button className="border-none rounded-full">Cộng Đồng</Button>
          </div>

          <div className="overflow-auto">
            <ul>
              <li className="flex gap-3 mt-3 hover:bg-gray-300 rounded-md">
                <img
                  src={myImage}
                  alt=""
                  height={50}
                  width={50}
                  className="rounded-full"
                />

                <div className="flex flex-col justify-center ">
                  <h3 class="text-custom-gray text-sm">Nguyễn văn Mều</h3>
                  <p class="text-gray-500 text-sm">bạn : mời bạn đến chơi</p>
                </div>
              </li>
            </ul>
            <div>
              <div className=""></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 bg-white px-4 py-2 border-x ">
          <div className="flex justify-between items-center h-12 border-spacing-1">
            <div className="flex items-center">
              <div className="mr-3">
                <img
                  src={myImage}
                  alt="Profile"
                  height={30}
                  width={30}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-custom-gray text-sm">Nguyễn văn Mều</h3>
                <p className="text-gray-500 text-[10px]">
                  hoạt động : 30 phút trước
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-8 h-8  text-blue-400 flex items-center justify-center rounded-full">
                <FaPhone />
              </div>

              <div className="w-8 h-8  text-blue-400 flex items-center justify-center rounded-full">
                <BsFillCameraVideoFill />
              </div>
              <div className="w-8 h-8 text-blue-400 flex items-center justify-center rounded-full">
                <HiMiniQuestionMarkCircle />
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex items-center">
              <div className="mr-3">
                <img
                  src={myImage}
                  alt="Profile"
                  height={30}
                  width={30}
                  className="rounded-full"
                />
              </div>

              <p className="bg-gray-300 text-[12px] p-1 px-2 rounded-full">
                chị yến xinh gái
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
