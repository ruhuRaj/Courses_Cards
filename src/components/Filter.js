import React from "react";

const Filter = (props) =>{
    let filterData = props.filterData;

    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="w-11/12 flex flex-wrap space-x-4 max-w-max gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((data) => {
                    return <button key={filterData.id} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 
                    transition-all duration-300 ${category===data.title ? "bg-opacity-70 border-white" : "bg-opacity-40 border-transparent"}`} onClick={() => {filterHandler(data.title)}}>
                        {data.title}
                    </button>
                })
            }
        </div>
    );
}

export default Filter;