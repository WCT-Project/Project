import React from 'react';
import '../css/category.css';
import landscape1 from '../img/landscape1.png';
import angkor_wat from '../img/angkor_wat.jpg';
import phnom_penh from '../img/download.jpeg'
import battambang from '../img/battambang.jpeg'
import kompot from '../img/kompot.jpeg'

const City_Recommend = () => {
    return (
        <article className="root">
            <div className="nest-beach-boxshow">
                <div>
                    <h4 className="main-caption caption-category"><b>Recommendation City in Cambodia</b></h4>
                </div>
                <div className="show-category">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={angkor_wat} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Siem Reap</b></h5>
                            <h6><b>City</b></h6>
                            <p className="card-text">Siem Reap, Cambodia: Gateway to Angkor Wat, vibrant night markets, Khmer cuisine, and a blend of tradition and tourism.</p>
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
                        <img src={battambang} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Battambang</b></h5>
                            <h6><b>City</b></h6>
                            <p className="card-text">Battambang, Cambodia: Serene town with colonial charm, bamboo train, and ancient temples, offering a tranquil Cambodian experience.</p>
                        </div>
                        {/* <span className="primary"><a href="#" className="btn ">See more...</a></span> */}
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={kompot} className="card-img-top justify-start" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Kom Pot</b></h5>
                            <h6><b>City</b></h6>
                            <p className="card-text">Kampot, Cambodia: Riverside charm, French colonial architecture, famous pepper farms, and Bokor National Park highlight its unique appeal.</p>
                        </div>
                        {/* <span className="primary"><a href="#" className="btn ">See more...</a></span> */}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default City_Recommend;
