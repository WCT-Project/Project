import React, { useState, useEffect } from 'react';
import '../css/category.css';
import landscape1 from '../img/landscape1.png';

import $ from 'jquery'

// const fs = require('fs');

// // Read the configuration file
// const rawdata = fs.readFileSync('config.json');
// const config = JSON.parse(rawdata);

// // Access individual properties
// const http = config.http;
// const ip = config.ip;
// const port = config.port;


const Category = () => {

    const [categories, setCategories] = useState([]);

    function getCategories() {
        $.ajax({
            url: 'http://127.0.0.1:5000/category',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Update state with fetched data
                setCategories(response.categories);
                if (response) console.log(response.categories)
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    }

    // Use useEffect to call the function when the component mounts
    useEffect(() => {
        getCategories();
    }, []); // Empty dependency array ensures it only runs once



    return (
        <article>
            <div className="nest-beach-boxshow">
                <div>
                    <h4 className="main-caption caption-category">Category</h4>
                </div>
                <div className="show-category">
                    {categories.map((category) => (
                        <div className="card" style={{ width: '18rem' }} key={category.id}>
                            <img src={category.image_url || category.image || landscape1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{category.name}</h5>
                                <p className="card-text">{category.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Category;
