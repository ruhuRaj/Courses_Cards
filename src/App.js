import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Loader from "./components/Loader";

const App = () => {

  const [courses, setCourses] = useState('');
  const [loading,setLoading] = useState(true);

  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        // save data into a variables
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something Went Wrong");
      }
    setLoading(false);
  }

  useState(()=>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar/>
    <div className="bg-bgDark2">
      <Filter 
      filterData={filterData}
      category={category}
      setCategory={setCategory}
      />

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Loader/>) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
    </div>
  );
};

export default App;
