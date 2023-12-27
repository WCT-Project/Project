import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import Input from 'react-select'

import $ from 'jquery'

import '../css/budget_analyzer.css';


const BudgetAnalyzer = () => {

    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const [minBudget, setMinBudget] = useState(0.00);
    const [maxBudget, setMaxBudget] = useState(0.00);
    const [formData, setFormData] = useState({
        location: '',
        category: '',
        minBudget: 0.0,
        maxBudget: 0.0

      });

    function getLocations() {
        $.ajax({
            url: 'http://127.0.0.1:5000/province/selection',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Update state with fetched data
                setLocations(response.provinces);
                // if (response) console.log(response.categories)
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    }
    function getCategories() {
        $.ajax({
            url: 'http://127.0.0.1:5000/category/selection',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Update state with fetched data
                setCategories(response.categories);
                // if (response) console.log(response.categories)
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    }

    const onChangeCategory = (e) => {
        console.log('event ', e)
        // setCategories(e)
        // setFormData((prevData) => ({
        //   ...prevData,
        //   [name]: type === 'checkbox' ? checked : value,
        // }));
    };
    const onChangeLocation = (e) => {
        // const { name, value, type, checked } = e.target;
        console.log('event ', e)
        // setLocations(e)
        // setFormData((prevData) => ({
        //   ...prevData,
        //   [name]: type === 'checkbox' ? checked : value,
        // }));
    };
    const onChangeMinBudget = (e) => {setMinBudget(e.target.value)};
    const onChangeMaxBudget = (e) => {setMaxBudget(e.target.value)};
    
    // Use useEffect to call the function when the component mounts
    useEffect(() => {
        getCategories();
        getLocations();
    }, []); // Empty dependency array ensures it only runs once

    return (
        <section>
            <div className="budget-analysis-container">
                <div>
                    <h4 className="main-caption">Budget Analysis</h4>
                </div>
                <form>
                    <div className="row">

                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Category</label>
                            <Select options={categories} onChange={onChangeCategory} placeholder="Breaches, Mountains..."/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Location</label>
                            <Select options={locations} onChange={onChangeLocation} placeholder="Phnom Penh, Kompot..."/>
                        </div>
                        
                    </div>
                    <div className="row">

                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Min-Budget</label>
                            <div className="input-container">
                                <input className="input-input" min="0" type="number" value={minBudget} onChange={onChangeMinBudget} placeholder="Mininum Budget..."/>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Max-Budget</label>
                            <div className="input-container">
                                <input className="input-input" min="1" type="number" value={maxBudget} onChange={onChangeMaxBudget} placeholder="Maxinum Budget..."/>
                            </div>
                        </div>
                        
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                        Analysis
                    </button>
                    </form>

            </div>
        </section>
    );
};

export default BudgetAnalyzer;
