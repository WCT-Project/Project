import React, { useState, useEffect } from 'react';
import '../css/Show_Place_Province.css'
import landscape1 from '../img/landscape1.png'
import datacate from "../json/Category.json"

import $ from 'jquery'


function Show_Place_Province() {

    const [data, setData] = useState([]);

    function getLocationData() {
        $.ajax({
            url: 'http://127.0.0.1:5000/province/data',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Update state with fetched data
                console.log("res", response)
                setData(response.data);
                // if (response) console.log(response.categories)
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    }

    useEffect(() => {
        getLocationData();
    }, []); 


    return  (
        <article>
            <div>
                {data.map((line) => (
                    <div className="nest-beach-boxshow">
                        <div>
                            <h4 className="main-caption caption-category">{line.province.name}</h4>
                        </div>
                        <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target={`#botton-1-${line.province.id}`} type="button" role="tab" aria-controls="pills-home" aria-selected="true">Place</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target={`#botton-2-${line.province.id}`} type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Accommodation</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target={`#botton-3-${line.province.id}`} type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Transportation</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id={`botton-1-${line.province.id}`} role="tabpanel" aria-labelledby={`${line.province.id}-pills-home-tab`}>
                                
                                <div className="show-category">
                                    {line.place.map((item) => (
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={item.image_url || item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.detail}</p>
                                                <p>Budget: $ {item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                
                                </div>

                            </div>
                            <div class="tab-pane fade" id={`botton-2-${line.province.id}`} role="tabpanel" aria-labelledby="pills-profile-tab">

                                <div className="show-category">
                                    {line.accomodation.map((acco_item) => (
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={acco_item.image_url || acco_item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{acco_item.name}</h5>
                                                <p className="card-text">{acco_item.detail}</p>
                                                <p>Budget: $ {acco_item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                            <div class="tab-pane fade" id={`botton-3-${line.province.id}`} role="tabpanel" aria-labelledby="pills-contact-tab">
                                
                                <div className="show-category">
                                    {line.transportation.map((trnp_item) => (
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={trnp_item.image_url || trnp_item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{trnp_item.name}</h5>
                                                <p className="card-text">{trnp_item.detail}$</p>
                                                <p>Budget: $ {trnp_item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className="nest-beach-boxshow">
                    <div>
                        <h4 className="main-caption caption-category">Province Name</h4>
                    </div>
                    <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#sbotton1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Option 1</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#sbotton2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Option 2</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#sbotton3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Option 3</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="sbotton1" role="tabpanel" aria-labelledby="pills-home-tab">
                            pills-home
                            <div className="show-category">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top justify-start" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="sbotton2" role="tabpanel" aria-labelledby="pills-profile-tab">

                            <div className="show-category">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top justify-start" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="tab-pane fade" id="sbotton3" role="tabpanel" aria-labelledby="pills-contact-tab">
                            
                            <div className="show-category">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">d on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top justify-start" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div> */}

            </div>
        </article>
    )
}

export default Show_Place_Province
