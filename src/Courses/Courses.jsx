import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";
import axios from "axios";
import { get } from "mongoose";
import { getBook } from "../../../BackEnd/controller/book.controller";

const Courses = () => {

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
