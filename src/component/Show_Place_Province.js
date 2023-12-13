import React from 'react'
import '../css/Show_Place_Province.css'
import landscape1 from '../img/landscape1.png'
import datacate from "../json/Category.json"

function show_Place_Province()
{
    return  (
        <article>
            <div>
                <div className="nest-beach-boxshow">
                    <div>
                        <h4 className="main-caption caption-category">Province Name</h4>
                    </div>
                    <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#botton1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Place</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#botton2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Accommodation</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#botton3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Transportation</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="botton1" role="tabpanel" aria-labelledby="pills-home-tab">
                            
                            <div className="show-category">
                                {datacate.battambang.place.map((item) => (
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.budget}$</p>
                                            <p>{item.infor}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: 200</p>
                                    </div>
                                    <span className='spanadd'><button className='add'>add</button></span>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: 300</p>
                                    </div>
                                    <span className='spanadd'><button className='add'>add</button></span>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top justify-start" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: 400</p>
                                    </div>
                                    <span className='spanadd'><button className='add'>add</button></span>
                                </div> */}
                            </div>

                        </div>
                        <div class="tab-pane fade" id="botton2" role="tabpanel" aria-labelledby="pills-profile-tab">

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
                        <div class="tab-pane fade" id="botton3" role="tabpanel" aria-labelledby="pills-contact-tab">
                            
                            <div className="show-category">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Budget: </p>
                                        <p>Information</p>
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
                    </div>
                </div>
                <div className="nest-beach-boxshow">
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
                </div>

            </div>

            <div>
                <p className='Thank-You'>Thank You!</p>
            </div>
        </article>
    )
}

const Show_Place_Province = show_Place_Province
export default Show_Place_Province
