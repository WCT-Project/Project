import React, { useState, useEffect } from 'react';
import Select from 'react-select'

import $ from 'jquery'

import '../css/budget_analyzer.css';


const BudgetAnalyzer = () => {

    const [categories, setCategories] = useState([]);

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
    
    // Use useEffect to call the function when the component mounts
    useEffect(() => {
        getCategories();
    }, []); // Empty dependency array ensures it only runs once

    return (
        <section>
            <div>
                <div>
                    <h4 className="main-caption">Budget Analysis</h4>
                </div>
                <div className="input-box">
                    <div className="after-input-box">
                        <div className="nest-input-budget-analysis">
                            <div className="container">
                                <form action="" className="form" id="form1">
                                    <div className="form__field form__field_selection">
                                        {/* <label className="form__label">Category</label> */}
                                        <Select options={categories} />
                                    </div>
                                </form>
                            </div>
                            <div className="container">
                                <form action="" className="form" id="form2">
                                    <div className="form__field">
                                        <label className="form__label" id='Min_Budget'>Min-Budget</label>
                                        <input type="number" placeholder="$$$" className="form__input" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="nest-input-budget-analysis">
                            <div className="container">
                                <form action="" className="form" id="form3">
                                    <div className="form__field">
                                        <label className="form__label">Start-Location</label>
                                        <input type="text" placeholder="Your City..." className="form__input" />
                                    </div>
                                </form>
                            </div>
                            <div className="container">
                                <form action="" className="form" id="form4">
                                    <div className="form__field">
                                        <label className="form__label">Max-Budget</label>
                                        <input type="number" placeholder="$$$" className="form__input" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="nest-input-budget-analysis">
                        <button className="analysis" type="submit">ANALYSIS!</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BudgetAnalyzer;
