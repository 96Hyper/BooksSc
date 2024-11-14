import React  , {useState , useEffect}from "react";
import Cards from "./Cards";
import axios from "axios";

import { Link } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBook();
  }, []);

 
 
 
 
 
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!</span>
          </h1>
          <p className="mt-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint provident ea velit, ipsum officiis esse aperiam asperiores harum, itaque iusto fuga atque nisi illo perspiciatis veniam delectus voluptates voluptatum, rem id consectetur ducimus. Dignissimos ipsam nulla hic quidem necessitatibus quia non rerum libero amet id, in vitae sit facilis inventore!</p>
         
         <Link to={"/"}>
         <button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button></Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item) => <Cards key={item.id} item={item} />)
          }
        </div>
      </div>
    </>
  );
};

export default Course;
