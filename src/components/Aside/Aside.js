import React from "react";
import "./aside.css";

import { AiFillHome } from "react-icons/ai";

import {
  BsFillTelephoneFill,
  BsPersonFillGear,
  BsFillGiftFill,
} from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";

import { RiMessageFill } from "react-icons/ri";
import { GrSchedule } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="asideFeaturesWrapper">
        <div className="imgBox">
          <img
            className="userImg"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <p className="userName">Neha Bhat</p>
        </div>

        <div
          onClick={() => {
            props.changeComponent("services");
          }}
          className="aside_features_common_style  asideTypo asideLayout"
        >
          <AiFillHome />
          <span className="pd_left">Home</span>
        </div>
        <div className="aside_features_common_style  asideTypo asideLayout">
          <BsFillTelephoneFill />
          <span className="pd_left">booking</span>
        </div>
        <div className="aside_features_common_style  asideTypo asideLayout">
          <RiMessageFill />
          <span className="pd_left">queries</span>
        </div>
        <div
          onClick={() => {
            props.changeComponent("Schedule");
          }}
          className="aside_features_common_style  asideTypo asideLayout schedule_opt"
        >
          <GrSchedule />
          <span className="pd_left ">schedules</span>
        </div>
        <div
          onClick={() => {
            props.changeComponent("services");
          }}
          className="aside_features_common_style  asideTypo asideLayout 
service_opt"
        >
          <BsPersonFillGear />
          <span className="pd_left ">services</span>
        </div>

        <div className="aside_features_common_style  asideTypo asideLayout">
          <FaUserAlt />
          <span className="pd_left">profile</span>
        </div>
        <div className="aside_features_common_style  asideTypo asideLayout">
          <IoMdMailOpen />
          <span className="pd_left">invite & earn</span>
        </div>
        <div className="aside_features_common_style  asideTypo asideLayout">
          <BsFillGiftFill />
          <span className="pd_left">reward</span>
        </div>
        <div className="aside_features_common_style  asideTypo asideLayout">
          <FaPowerOff />
          <span className="pd_left">logout</span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
