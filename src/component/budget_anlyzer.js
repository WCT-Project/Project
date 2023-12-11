import React from 'react';
import '../css/budget_analyzer.css';


const BudgetAnalyzer = () => {
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
                                    <div className="form__field">
                                        <label className="form__label">Category</label>
                                        <input type="text" placeholder="Your Type..." className="form__input" />
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
