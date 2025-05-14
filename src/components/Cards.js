import React, { useState } from 'react';
import Card from "./Card";
import { filterData } from '../data';

const Cards = ( props ) => {
    let courses = props.courses;

    let category = props.category;

    const [likedCourses,setLikedCourses] = useState('');

    // To store all cards data into a single array 
    // it returns you a list of all courses received from the api response 
    const getCourses = () => {
        if(category==="All"){
            let allCourses=[];
        Object.values(courses).forEach((coursesCategory) => {
            coursesCategory.forEach((course) => {
                allCourses.push(course);
            })
        } )
        return allCourses;
        }
        else{
            return courses[category];
        }
    }


    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course) => {
                   return <Card key={filterData.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                })
            }
        </div>
    )
}

export default Cards;