import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { PiUserListFill } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";
import myImage from "../../../assets/avartaMeo.jpg";
import { Button } from "antd";

export default function Friends() {
  return (
    <>
      <div className="flex min-h-screen font-semibold">
        <div className="w-1/4 flex flex-col border-r-2 border-gray-300 shadow-full h-auto">
          <div className="flex justify-between p-3">
            <h1 className="text-[20px]">Bạn bè</h1>
            <IoMdSettings className="text-[20px]" />
          </div>

          <div className="flex justify-between p-2  bg-gray-200 rounded-md hover:cursor-pointer">
            <div className="flex  items-center gap-3 ">
              <FaUserFriends className="text-[20px] bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full p-2  text-white" />
              <p>Trang Chủ</p>
            </div>
          </div>

          <div className="flex justify-between p-2  hover:bg-gray-200 hover:cursor-pointer rounded-md">
            <div className="flex  items-center gap-3">
              <IoMdPersonAdd className="text-[20px] bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full p-2" />
              <p>Lời mời kết bạn</p>
            </div>
            <div className="flex items-center">
              <MdArrowForwardIos />
            </div>
          </div>

          <div className="flex justify-between p-2  hover:bg-gray-200 rounded-md hover:cursor-pointer">
            <div className="flex  items-center gap-3">
              <IoMdPersonAdd className="text-[20px] bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full p-2" />
              <p>Gợi ý</p>
            </div>
            <div className="flex items-center">
              <MdArrowForwardIos />
            </div>
          </div>

          <div className="flex justify-between p-2  hover:bg-gray-200 rounded-md hover:cursor-pointer">
            <div className="flex  items-center gap-3">
              <PiUserListFill className="text-[20px] bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full p-2" />
              <p>Danh sách bạn bè</p>
            </div>
            <div className="flex items-center">
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
        <div className="w-3/4 flex flex-col bg-gray-100">
          <div className="p-8  flex justify-between">
            <h1 className="text-[20px]">Lời mời kết bạn</h1>
            <a href="">xem tất cả</a>
          </div>

          <ul className="px-8 flex flex-wrap gap-6 h-auto">
            <li className="flex flex-col items-center bg-white rounded-md border-none flex-[0_0_calc(20%-1.2rem)]">
              <img src={myImage} alt="Avatar" className="rounded-md" />
              <div className="flex flex-col flex-1 w-[180px] h-auto items-center">
                <p className="font-medium text-gray-800">Nguyen Phuong Hung</p>
                <div className="flex gap-3 p-3 flex-col w-full">
                  <Button className="text-[15px] bg-blue-500 text-white">
                    Xác Nhận
                  </Button>
                  <Button className="text-[15px] bg-gray-300">Xóa</Button>
                </div>
              </div>
            </li>

            <li className="flex flex-col items-center bg-white rounded-md border-none flex-[0_0_calc(20%-1.2rem)]">
              <img src={myImage} alt="Avatar" className="rounded-md" />
              <div className="flex flex-col flex-1 w-[180px] h-auto items-center">
                <p className="font-medium text-gray-800">Nguyen Phuong Hung</p>
                <div className="flex gap-3 p-3 flex-col w-full">
                  <Button className="text-[15px] bg-blue-500 text-white">
                    Xác Nhận
                  </Button>
                  <Button className="text-[15px] bg-gray-300">Xóa</Button>
                </div>
              </div>
            </li>

            <li className="flex flex-col items-center bg-white rounded-md border-none flex-[0_0_calc(20%-1.2rem)]">
              <img src={myImage} alt="Avatar" className="rounded-md" />
              <div className="flex flex-col flex-1 w-[180px] h-auto items-center">
                <p className="font-medium text-gray-800">Nguyen Phuong Hung</p>
                <div className="flex gap-3 p-3 flex-col w-full">
                  <Button className="text-[15px] bg-blue-500 text-white">
                    Xác Nhận
                  </Button>
                  <Button className="text-[15px] bg-gray-300">Xóa</Button>
                </div>
              </div>
            </li>

            <li className="flex flex-col items-center bg-white rounded-md border-none flex-[0_0_calc(20%-1.2rem)]">
              <img src={myImage} alt="Avatar" className="rounded-md" />
              <div className="flex flex-col flex-1 w-[180px] h-auto items-center">
                <p className="font-medium text-gray-800">Nguyen Phuong Hung</p>
                <div className="flex gap-3 p-3 flex-col w-full">
                  <Button className="text-[15px] bg-blue-500 text-white">
                    Xác Nhận
                  </Button>
                  <Button className="text-[15px] bg-gray-300">Xóa</Button>
                </div>
              </div>
            </li>

            <li className="flex flex-col items-center bg-white rounded-md border-none flex-[0_0_calc(20%-1.2rem)]">
              <img src={myImage} alt="Avatar" className="rounded-md" />
              <div className="flex flex-col flex-1 w-[180px] h-auto items-center">
                <p className="font-medium text-gray-800">Nguyen Phuong Hung</p>
                <div className="flex gap-3 p-3 flex-col w-full">
                  <Button className="text-[15px] bg-blue-500 text-white">
                    Xác Nhận
                  </Button>
                  <Button className="text-[15px] bg-gray-300">Xóa</Button>
                </div>
              </div>
            </li>

            <li className="flex flex-col items-center bg-white rounded-md border-none flex-[0_0_calc(20%-1.2rem)]">
              <img src={myImage} alt="Avatar" className="rounded-md" />
              <div className="flex flex-col flex-1 w-[180px] h-auto items-center">
                <p className="font-medium text-gray-800">Nguyen Phuong Hung</p>
                <div className="flex gap-3 p-3 flex-col w-full">
                  <Button className="text-[15px] bg-blue-500 text-white">
                    Xác Nhận
                  </Button>
                  <Button className="text-[15px] bg-gray-300">Xóa</Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
