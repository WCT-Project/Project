import React from 'react';
import '../css/category.css';
import landscape1 from '../img/landscape1.png';

const Category = () => {
    return (
        <article>
            <div className="nest-beach-boxshow">
                <div>
                    <h4 className="main-caption caption-category">Category</h4>
                </div>
                <div className="show-category">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={landscape1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Detail1</p>
                        </div>
                    </div>
                    {/* <div className="card" style={{ width: '18rem' }}>
                        <img src={landscape1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Detail2</p>
                        </div>
                        <span className="primary"><a href="#" className="btn ">See more...</a></span>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={landscape1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <span className="primary"><a href="#" className="btn ">See more...</a></span>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={landscape1} className="card-img-top justify-start" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"></p>
                        </div>
                        <span className="primary"><a href="#" className="btn ">See more...</a></span>
                    </div> */}
                </div>
            </div>
        </article>
    );
};

export default Category;
