import React from 'react'
import '../css/Show_Place_Province.css'
import landscape1 from '../img/landscape1.png'

function show_Place_Province()
{
    return  (
        <article>
            <div>
                <div className="nest-beach-boxshow">
                    <div>
                        <h4 className="main-caption caption-category">Province Name</h4>
                    </div>
                    <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#botton1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">1</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#botton2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">2</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#botton3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">3</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="botton1" role="tabpanel" aria-labelledby="pills-home-tab">
                            
                            <div className="show-category">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                        <div class="tab-pane fade" id="botton2" role="tabpanel" aria-labelledby="pills-profile-tab">

                            <div className="show-category">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#botton1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">1</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#botton2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">2</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#botton3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">3</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="botton1" role="tabpanel" aria-labelledby="pills-home-tab">
                            
                            <div className="show-category">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                        <div class="tab-pane fade" id="botton2" role="tabpanel" aria-labelledby="pills-profile-tab">

                            <div className="show-category">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={landscape1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

            </div>
        </article>
    )
}

const Show_Place_Province = show_Place_Province
export default show_Place_Province