import React from 'react';
import '../css/category.css';
import landscape1 from '../img/landscape1.png';
import angkor_wat from '../img/angkor_wat.jpeg';
import phnom_penh from '../img/download.jpeg'

const Show_Recommendation = () => {
    return (
        <article>
            <div className="nest-beach-boxshow">
                <div>
                    <h4 className="main-caption caption-category">Recommendation Place in Cambodia</h4>
                </div>
                <div className="show-category">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={angkor_wat} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Angkor Wat</b></h5>
                            <h6><b>Temple</b></h6>
                            <p className="card-text">Angkor Wat: Cambodia's UNESCO marvel, the world's largest religious monument and Khmer cultural icon.</p>
                        </div>
                        {/* <span className="primary"><a href="#" className="btn "></a></span> */}
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={phnom_penh} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Phnom Penh</b></h5>
                            <h6><b>City</b></h6>
                            <p className="card-text">Phnom Penh, Cambodia: Vibrant capital along the Mekong River, rich history, Royal Palace, and bustling markets showcase cultural dynamism.</p>
                        </div>
                        {/* <span className="primary"><a href="#" className="btn ">See more...</a></span> */}
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={landscape1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        {/* <span className="primary"><a href="#" className="btn ">See more...</a></span> */}
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={landscape1} className="card-img-top justify-start" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"></p>
                        </div>
                        {/* <span className="primary"><a href="#" className="btn ">See more...</a></span> */}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Show_Recommendation;
