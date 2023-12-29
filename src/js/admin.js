import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useLogin } from '../js/LoginHandler';
import '../css/admin.css';
import { useState, useEffect } from 'react';
import $ from 'jquery'


import Menu from "../component/menu";



const Admin = () => {

    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const [accomodations, setAccomodations] = useState([]);
    const [places, setPlaces] = useState([]);
    const [transportations, setTransportations] = useState([]);
    

    function getCategories() {
        $.ajax({
            url: 'http://127.0.0.1:5000/category',
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

    function getLocations() {
        $.ajax({
            url: 'http://127.0.0.1:5000/province',
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

    function getPlaces() {
        $.ajax({
            url: 'http://127.0.0.1:5000/place',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Update state with fetched data
                setPlaces(response.places);
                // if (response) console.log(response.categories)
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    }

    function getAccomodations() {
        $.ajax({
            url: 'http://127.0.0.1:5000/accomodation',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Update state with fetched data
                setAccomodations(response.accomodations);
                // if (response) console.log(response.categories)
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    }

    function getTransportations() {
        $.ajax({
            url: 'http://127.0.0.1:5000/transportation',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Update state with fetched data
                setTransportations(response.transportations);
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
        getLocations();
        getPlaces();
        getAccomodations();
        getTransportations();
    }, []); // Empty dependency array ensures it only runs once

    return (
        <>
            <Menu />
            <body>
                <div className="row">
                    <div className="col-1">
                        <div className="d-flex flex-column flex-shrink-0 bg-light" style={{ width: '4.5rem' }}>
                            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                                <li className="nav-item nav-admin-top">
                                    <button
                                        className="nav-link active py-3 border-bottom"
                                        aria-current="page"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-original-title="Categories"
                                        data-bs-target="#category-config"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                        >
                                            <i className="fa fa-picture-o admin-icon" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="nav-link py-3 border-bottom"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#location-config"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="false"
                                        >
                                            <i className="fa fa-map admin-icon" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="nav-link py-3 border-bottom"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#place-config"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="false"
                                        >
                                            <i className="fa fa-map-marker admin-icon" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="nav-link py-3 border-bottom"
                                        title=""
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#accomodation-config"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="false"
                                        >
                                            <i className="fa fa-bed admin-icon" />
                                    </button>
                                </li>
                                <li className='nav-admin-bottom'>
                                    <button
                                        className="nav-link py-3 border-bottom"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#transportation-config"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="false"
                                    >
                                    <i className="fa fa-car admin-icon" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-11 tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="category-config" role="tabpanel">
                            <div className='text-center'>
                                <h4>
                                    Categories
                                </h4>
                            </div>
                            <div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Detail</th>
                                            <th scope="col">Image</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.map((category) => (
                                            <tr>
                                                <th scope="row">{category.id}</th>
                                                <td>{category.name}</td>
                                                <td style={{fontSize: '12px'}}>{category.detail}</td>
                                                <td style={{fontSize: '12px'}}>{category.image_url || category.image }</td>
                                                <td>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-wrench"/></button>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-trash"/></button>
                                                </td>
                                            </tr>
                                        ))}  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="location-config" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className='text-center'>
                                <h4>
                                    Locations
                                </h4>
                            </div>
                            <div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Province</th>
                                            <th></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {locations.map((category) => (
                                            <tr>
                                                <th scope="row">{category.id}</th>
                                                <td>{category.name}</td>
                                                <td>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-wrench"/></button>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-trash"/></button>
                                                </td>
                                            </tr>
                                        ))}  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="place-config" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className='text-center'>
                                <h4>
                                    Places
                                </h4>
                            </div>
                            <div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Place</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Province ID</th>
                                            <th scope="col">Detail</th>
                                            <th scope="col">Image</th>
                                            <th></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {places.map((category) => (
                                            <tr>
                                                <th scope="row">{category.id}</th>
                                                <td>{category.name}</td>
                                                <td>${category.price}</td>
                                                <td>{category.province_id}</td>
                                                <td style={{fontSize: '12px'}}>{category.detail}</td>
                                                <td style={{fontSize: '12px'}}>{category.image_url || category.image }</td>
                                                <td>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-wrench"/></button>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-trash"/></button>
                                                </td>
                                            </tr>
                                        ))}  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="accomodation-config" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className='text-center'>
                                <h4>
                                    Accomodations
                                </h4>
                            </div>
                            <div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Accommodation</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Province ID</th>
                                            <th scope="col">Detail</th>
                                            <th scope="col">Image</th>
                                            <th></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {accomodations.map((category) => (
                                            <tr>
                                                <th scope="row">{category.id}</th>
                                                <td>{category.name}</td>
                                                <td>${category.price}</td>
                                                <td>{category.province_id}</td>
                                                <td style={{fontSize: '12px'}}>{category.detail}</td>
                                                <td style={{fontSize: '12px'}}>{category.image_url || category.image }</td>
                                                <td>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-wrench"/></button>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-trash"/></button>
                                                </td>
                                            </tr>
                                        ))}  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="transportation-config" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className='text-center'>
                                <h4>
                                    Transportations
                                </h4>
                            </div>
                            <div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Transportations</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Detail</th>
                                            <th scope="col">Image</th>
                                            <th></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transportations.map((category) => (
                                            <tr>
                                                <th scope="row">{category.id}</th>
                                                <td>{category.name}</td>
                                                <td>${category.price}</td>
                                                <td style={{fontSize: '12px'}}>{category.detail}</td>
                                                <td style={{fontSize: '12px'}}>{category.image_url || category.image }</td>
                                                <td>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-wrench"/></button>
                                                    <button className="inline-button" data-id={category.id}><i className="fa fa-trash"/></button>
                                                </td>
                                            </tr>
                                        ))}  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
  };
  
  export default Admin;