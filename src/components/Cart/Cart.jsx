/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({selectedCourse, remaining, totalCost}) => {
    return (
        <div className='cart'>
            <h5>Remaining</h5>:{remaining}
            <h5>Course Name</h5>
            
            {

                selectedCourse.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))
            }
            <h4>Credit: {totalCost}</h4>
        </div>
    );
};

export default Cart;