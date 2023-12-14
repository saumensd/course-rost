/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {


    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetch("../../../public/data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data));
    }, []);

    const handleSelectActor = (course) =>{

        const isExist = selectedCourse.find(item => item.id == course.id);
        let total = course.credit;
        if(isExist){
            return alert('already added this course')
        }
        else{
            selectedCourse.forEach(item => {
                total +=item.credit;
              
            });

            const totalRemaining = 20-total;
            if(total > 20){
                return alert("Credit is Over")
            }
           else{
            setRemaining(totalRemaining);
            setTotalCost(total);
            setSelectedCourse([...selectedCourse, course]);
           }
        }
        

        
    }

    // console.log(selectedCourse)
    // console.log(allCourses);

    return (
        <div className='container'>
            <div className="home-container">
               <div className="card-container">
             {
                allCourses.map((course) => 
                (<div key={course.id} className="card">
                <div className="card-img">
                    <img className='photo' src={course.image} alt="" />
                    <h2>{course.name}</h2>
                    <p><small>{course.details}</small></p>
                    <div className="info">
                        <p>Price:{course.price} $</p>
                        <p>Credit:{course.credit} hr</p>
                    </div>
                    <button onClick={() => handleSelectActor(course)} className='card-btn'>Select</button>
                </div>
            </div>))
             }
               </div>
                <div className="cart">
                   <Cart selectedCourse={selectedCourse} remaining={remaining} totalCost={totalCost}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Home;