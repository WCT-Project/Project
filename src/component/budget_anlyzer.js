import React, { useState, useEffect, useContext, createContext } from 'react';
import Select from 'react-select'
import Input from 'react-select'

import $ from 'jquery'

// import { useAnalyzerFilter } from './analyzer_filter';
import '../css/budget_analyzer.css';


const BudgetAnalyzer = () => {

    const [selectCategories, setSelectCategories] = useState([]);
    const [selectLocations, setSelectLocations] = useState([]);

    // const {categories, settingCategories, locations, settingLocations, minBudget, settingMinBudget, maxBudget, settingMaxBudget} = useAnalyzerFilter();

    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const [minBudget, setMinBudget] = useState(0.00);
    const [maxBudget, setMaxBudget] = useState(0.00);
    

    function getLocations() {
        $.ajax({
            url: 'http://127.0.0.1:5000/province/selection',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Update state with fetched data
                setSelectLocations(response.provinces);
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
                setSelectCategories(response.categories);
                // if (response) console.log(response.categories)
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    }

    const onChangeSelectCategory = (e) => {
        setCategories([e.value, e.label]);
    };
    const onChangeSelectLocation = (e) => {
        setLocations([e.value, e.label]);
    };
    const onChangeMinBudget = (e) => {
        setMinBudget(parseFloat(e.target.value))
    };
    const onChangeMaxBudget = (e) => {
        setMaxBudget(parseFloat(e.target.value))
    };

    const handleAnalysis = (e) => {
        e.preventDefault();
        localStorage.setItem('filter', JSON.stringify({
            "categories": categories,
            "locations": locations,
            "minBudget": minBudget,
            "maxBudget": maxBudget
        }));

    }
    
    // Use useEffect to call the function when the component mounts
    useEffect(() => {
        getCategories();
        getLocations();
    }, []);

    return (
        <section>
            <div className="budget-analysis-container">
                <div>
                    <h4 className="main-caption">Budget Analysis</h4>
                </div>
                <form className="nest-form" onSubmit={handleAnalysis}>
                    <div className="row form-category">

                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Category</label>
                            <Select options={selectCategories} onChange={onChangeSelectCategory} placeholder="Breaches, Mountains..."/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Location</label>
                            <Select options={selectLocations} onChange={onChangeSelectLocation} placeholder="Phnom Penh, Kompot..."/>
                        </div>
                        
                    </div>
                    <div className="row form-budget">

                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Min-Budget</label>
                            <div className="input-container">
                                <input className="input-input" min="0" type="number" value={minBudget} onChange={onChangeMinBudget} placeholder="Mininum Budget..."/>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Max-Budget</label>
                            <div className="input-container">
                                <input className="input-input" min="0" type="number" value={maxBudget} onChange={onChangeMaxBudget} placeholder="Maxinum Budget..."/>
                            </div>
                        </div>
                        
                    </div>
                    
                    <span className='span-analysis-button'>
                        <button type="submit" className="btn btn-primary analysis-button">
                            Analysis
                        </button>
                    </span>
                </form>

            </div>
        </section>
    );
};

export default BudgetAnalyzer;
