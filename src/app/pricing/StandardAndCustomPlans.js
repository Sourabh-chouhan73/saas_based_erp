import React from 'react';

const StandardAndCustomPlans = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-5 mb-2 text-center">
                        <div className="col-12">
                            <p>The <b>Standard</b> and <b>Custom</b> plans include all apps for a single fee:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 stud-cust-plan justify-content-center d-flex ">
                            <div >
                                <div className='stud-cust-plan-icon-con'><img src="https://download.odoocdn.com/icons/sale/static/description/icon.svg" alt="" /></div>
                                <p className='text-center'>Sales</p>
                            </div>
                            <div>
                                <div className='stud-cust-plan-icon-con'>
                                <img src="https://download.odoocdn.com/icons/marketing_automation/static/description/icon.svg" alt="" />

                                </div>
                                <p className='text-center'>Marketing</p>
                            </div>
                            <div>
                                <div className='stud-cust-plan-icon-con'>
                                <img src="https://download.odoocdn.com/icons/sign/static/description/icon.svg " alt="" />
                                </div>
                                <p className='text-center'>Sign</p>
                            </div>
                            <div>
                               <div className='stud-cust-plan-icon-con'> <img src="https://download.odoocdn.com/icons/website/static/description/icon.svg " alt="" /></div>
                                <p className='text-center'>Website</p>
                            </div>
                            <div>
                                <div className='stud-cust-plan-icon-con'>
                                <img src="https://download.odoocdn.com/icons/account_accountant/static/description/icon.svg" alt="" />
                                </div>
                                <p className='text-center'>Accounting</p>
                            </div>
                            <div>
                               <div className='stud-cust-plan-icon-con'>
                               <img src="https://download.odoocdn.com/icons/crm/static/description/icon.svg" alt="" />
                               </div>
                                <p className='text-center'>CRM</p>
                            </div>
        
                            <div>
                               <div className='stud-cust-plan-icon-con'>
                               <img src="https://download.odoocdn.com/icons/stock/static/description/icon.svg" alt="" />
                               </div>
                                <p className='text-center'>Inventory</p>
                                
                            </div>
                            <div>
                               <div className='stud-cust-plan-icon-con'>
                               <img src="https://download.odoocdn.com/icons/hr/static/description/icon.svg" alt="" />
                               </div>
                                <p className='text-center'>HR</p>
                            </div>
                            <div>
                                <div className='stud-cust-plan-icon-con'>
                                <img src="https://download.odoocdn.com/icons/project/static/description/icon.svg" alt="" />
                                </div>
                                <p className='text-center'>Project</p>
                            </div>
                            <div>
                               <div className='stud-cust-plan-icon-con'>
                               <img src="https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg" alt="" />
                               </div>
                                <p className='text-center'>POS</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center add-many-more-con">
                            <div className='add-many-more-text'>
                            <a href="">And Many More</a>
                            <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg" height={50} width={50} alt="" />
                            </div>
                            <p className='text-center'>All our plans include  <b>unlimited support, hosting </b>and <b>maintenance.</b> <br />
                            With no hidden costs, no limit on features or data: enjoy real transparency!</p>
                            <p className='text-center'>
                            (*) The discount is valid for 12 months, for initial users ordered. <br />
                            (**) Cost for Odoo.sh hosting not included.
                            </p>
                            <div>
                            <button className='btn btn-white border btn-bg w-25 p-3'> Schedule a demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StandardAndCustomPlans;
