import React, { useState } from 'react'
import "../../style/App.scss"
import web2 from '../../assets/services/web2.png'
import web3 from '../../assets/services/web3.png'
import Oracle from '../../assets/services/Oracle.png'
import mongo_DB from '../../assets/services/mongo_DB.png'
import REST_API from '../../assets/services/REST_API.png'
import sap from '../../assets/services/sap.png'
import SoapUI from '../../assets/services/SoapUI.png'
import My_SQL from '../../assets/services/My_SQL.png'
import web4 from '../../assets/services/web4.png'
import cloud from '../../assets/services/cloud.png'
import apiset from '../../assets/services/apiset.png'
import layer from '../../assets/services/layer.png'
import filter from '../../assets/services/filter.png'
import lapset from '../../assets/services/lapset.png'
import macbook1 from '../../assets/services/macbook1.png'
import facebook from '../../assets/services/facebook.svg'
import youtube from '../../assets/services/youtube.svg'
import linkedin from '../../assets/services/linkedin.svg'
import { Link } from 'react-router-dom'
import SocialMediaLink from '../../molecues/SocialMediaLink'
import ScrollToTop from 'react-scroll-to-top'

import { AfterNavbar, DemoButtonComponent, FooterLinks, FooterSection, VerticalSection } from '../../molecues/CommonComponents'
const WebServices = () => {
    const ary = [
        { image: My_SQL },
        { image: sap },
        { image: REST_API },
        { image: Oracle },
        { image: mongo_DB },
        { image: SoapUI },
    ]


    const footerAry = [
        { title: "Platforms", list: ["Web", "Mobile", "Web Services"] },
        { title: "Insight", list: ["Why Flinko?", "Flinko's objectives", "Our solution stages", "Key benefits"] },
        { title: "Pricing", list: ["Cloud Basic", "Cloud Professional", "On Premises - Enterprise"] },
        { title: "Support", list: ["Contact Us", "Request a demo", "Terms of Use"] },
        { title: "Company Address", list: ["Flinko,Vijayanagram layout,Jaynagar,Bengaluru,karnataka 5600700"] },

    ]
    const verticalData = { image1: cloud, image2: apiset, title: "Steps Reusability", content: "With AI driven now you can avoid writing repeated steps which come across in all your test cases" }
    const verticalData2 = { image1: filter, image2: lapset, title: "Custom Functions", content: "Define your own NLPs which demands your test scenario" }
    const webmainData = { image: web2, title: "Flinko- Web Service", subTitle: "Develop your Web Service test scripts with ease", content: " Get on toes with our Web Service testing which drives you unstoppable towards testing the deep Web Service layers in minutes with all intricacies." }

    return (
        <div>


            <AfterNavbar webmainData={webmainData} />

            <DemoButtonComponent /> 

            <div className='row align-items-center mt-5 ms-2'>
                <div className='col-md-6'>
                    <div className='d-flex justify-content-center'>
                        <ul className='list-unstyled'>
                            <h2 className='mt-5 h3'>Inbuilt framework for all your algorithms</h2>
                            <div className=' mt-5 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>Embedeed data driven framwork</li> </div>
                            <div className='mt-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>Request payload created with parameterized data</li> </div>
                            <div className=' mt-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>Parameterized assertions with dynamic data</li> </div>
                            <div className='mt-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>Automatically propagate assertions across repeated sets of response</li> </div>
                            <div className='mt-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>Easily call server APIs from your UI test for validation or data inquiry</li> </div>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6 '>
                    <img src={web4} alt="" className='lapimage align  d-block' />
                </div>

            </div>

            <VerticalSection verticalData={verticalData} />


            <div className='row align-items-evenly'>

                <div className='col-md-6 p-5 '>
                    <img src={layer} alt="" className='layer d-block' />
                </div>
                <div className='col-md-6 p-5'>
                    <ul className='list-unstyled'>
                        <h2 className='mt-2 h5 text-start'>Scriptless API Test Automation, Seamlessly integrated with UI & Database testing</h2>
                        <div className=' mb-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>Low Code API testing on cloud</li> </div>
                        <div className='mb-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>API & UI Testing in single Test Script</li> </div>
                        <div className=' mb-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>API Test Case Management, Test Planning, Execution and tracking governance</li> </div>
                        <div className='mb-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>CI Driven regression suite executions</li> </div>
                        <div className='mb-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>Dynamic Environment management</li> </div>
                        <div className='mb-3 d-flex align-items-center' ><div className=' rounded-circle bindi'></div>  <li>Directly correlate Business process and corresponding API for complete coverage</li> </div>
                    </ul>
                </div>

            </div>

            <VerticalSection verticalData2={verticalData2} />
            <div className=' row text-center mt-5'>
                <div className='col-md-6'>
                    <img src={macbook1} alt="mackbook1" className='mac' />
                </div>
                <div className='col-md-6 p-5 text-start'>

                    <p className='h4 text-center visible'>Excecute your web service test suite faster then ever</p>
                    <p>Create your Web Service automated test cases quickly with natural language-based test step creation that enables you to formulate test steps using simple English statements.
                    </p>
                    <p> Test Data Management, and Reusable Step Groups will help you speed up automating tests.</p>

                </div>
            </div>

            {/* second mack */}
            <div className=' row text-center mt-5'>
                <div className='col-md-6 p-5 text-start'>
                    <p className='h4 text-start visible'>Simple Solution to your Web Service regression suite</p>
                    <p> Quickly create a suite with Web Service scripts with by selecting best of test scripts that enables you to go for different executions. </p>
                    <p>Sequential and different ways of parallel executions will help you speed up regression testing. </p>
                </div>
                <div className='col-md-6'>
                    <img src={macbook1} alt="mackbook1" className='mac' />
                </div>
            </div>

            {/* footer section */}
            <FooterSection />
            <FooterLinks footerAry={footerAry} />
            <SocialMediaLink />
            <ScrollToTop />
        </div>
    )
}

export default WebServices