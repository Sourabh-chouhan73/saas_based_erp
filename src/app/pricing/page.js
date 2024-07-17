"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Switch from 'react-switch';
import Faq from '../Components/Faq';
import StandardAndCustomPlans from './StandardAndCustomPlans';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);

    const handleSwitchChange = () => {
        setIsYearly(!isYearly);
    };

    return (
        <>
            <main>
                <section className='py-5'>
                    <Container>
                        <Row className="text-center mb-4">
                            <Col>
                                <h1 className="display-4" style={{ fontFamily: 'cursive', position: 'relative' }}>
                                    You are not <span className='dreaming-border'>dreaming!</span>
                                    {/* <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-10px', width: '50%', height: '5px', backgroundColor: '#FF6F61' }}></span> */}
                                </h1>
                                <div className="d-flex justify-content-center align-items-center mt-3">
                                    <span>Yearly</span>
                                    <Switch
                                        onChange={handleSwitchChange}
                                        checked={isYearly}
                                        offColor="#ddd"
                                        onColor="#00bfa5"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        className="mx-2"
                                    />
                                    <span>Monthly</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <div className='bg-rounde'></div>
                    <Container className="py-5">
                        <Row className="justify-content-center mx-5">
                            <Col md={4}>

                                <Card className="mb-4 h-100 price-card">
                                    <div className='price-top-card-b-1 pt-2'></div>
                                    <Card.Body className='price-card-body-1 p-3'>
                                        <h2 className='one-app-free text-center'>One App Free</h2>
                                        <div className='pricing-1 d-flex justify-content-between '>
                                           
                                         <div className='d-flex align-items-top'>
                                         <span className=''>Rs</span>
                                         <b className=''>0</b>
                                         </div>
                                           

                                            
                                        </div>
                                        <ul className=''>
                                            <li>For<b>one app only</b>,unlimited users</li>
                                            <li>Odoo Online</li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className='bg-white price-card-footer'>
                                        <button className='btn btn-primary btn-bg w-100 p-4'>START NOW</button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-4 h-100 price-card">
                                    <div className='price-top-card-b-2 pt-2'></div>
                                    <Card.Body className='price-card-body-2 p-3'>
                                        <h2 className='one-app-free text-center'>Standard</h2>
                                        <div className='pricing-2 d-flex justify-content-between'>
                                            <div className='d-flex justify-content-top'>
                                            <span className=''>Rs</span>
                                            <b className=''>760</b>
                                            </div>
                                            <div className=''>
                                                <div className='text-decoration-line-through'>
                                                    950 Rs*
                                                </div>
                                                <div>
                                                / user / month
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <ul>
                                            <li className='text-bold'>All apps</li>
                                            <li>Odoo Online / Odoo.sh**</li>
                                            <li>Odoo Studio</li>
                                            <li>Multi-Company</li>
                                            <li>External API</li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className='bg-white price-card-footer'>
                                        <button className='btn btn-primary btn-bg w-100 p-4'>START NOW</button>
                                        <button className='btn btn-secondary mt-2 btn-bg w-100 p-4'>FREE TRIAL</button>

                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={4}>

                                <Card className="mb-4 h-100 price-card">
                                    <div className='price-top-card-b-3 pt-2'></div>
                                    <Card.Body className='price-card-body-3 p-3 '>
                                        <h2 className='one-app-free text-center'>Custom</h2>
                                        <div className='pricing-3 d-flex justify-content-between'>
                                           <div className='d-flex text-align-top'>
                                           <span className=''>Rs</span>
                                           <b className=''>1140</b>
                                           </div>
                                           <div>
                                                <div className='text-decoration-line-through'>
                                                    1420 Rs*
                                                </div>
                                                <div>
                                                / user / month
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>For one app only, unlimited users</li>
                                            <li>Odoo Online</li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className='bg-white price-card-footer'>
                                        <button className='btn btn-primary btn-bg w-100 p-4'>START NOW</button>
                                        <button className='btn btn-secondary mt-2 btn-bg w-100 p-4'>FREE TRIAL</button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            
                        </Row>
                    </Container>
                </section>
                <section>
                <StandardAndCustomPlans></StandardAndCustomPlans>
                </section>
                <section>
                <Faq></Faq>
                </section>
        
            </main>

        </>
    );
}

export default Pricing;
