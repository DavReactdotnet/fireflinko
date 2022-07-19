import React from 'react'
import "../../style/App.scss"
import web1 from '../../assets/web1.png'
import lapStack from '../../assets/lapStack.png'
import window from '../../assets/window.png'
import linux from '../../assets/linux.png'
import mac from '../../assets/mac.png'
import crome from '../../assets/web/Chrome.png'
import firefox from '../../assets/web/Firefox.png'
import edge from '../../assets/web/Edge.png'
import safari from '../../assets/web/Safari.png'
import Operabro from '../../assets/web/Operabro.png'
import centralized from '../../assets/web/centralized.png'
import filter from '../../assets/services/filter.png'
import lapset from '../../assets/services/lapset.png'
import left_laptop from '../../assets/web/left_laptop.png'
import right_laptop from '../../assets/web/right_laptop.png'


import SocialMediaLink from '../../molecues/SocialMediaLink'
import { AfterNavbar, DemoButtonComponent, FooterLinks, FooterSection, InsightArrow, ListComponet, PaperComponent, VerticalSection } from '../../molecues/CommonComponents'
import { Button } from 'react-bootstrap'
import PhoneInput from 'react-phone-number-input'

const Web = () => {

    const homeMainData = { image: web1, title: "FireFlink - Web", subTitle: "Develop your Web Scripts with ease", content: "Automation of web application is now taking a turn with codeless, sophisticated NLP based way to handle all types of actions & verifications effortlessly." }

    const listData = [
        { title: "Scriptless Web Automation", list: ["Quick creation of web project", "Capture your web elements using element locator plugin", "Zero coding required to develop web scripts", "Steps Reusability", "Define your own NLP using custom functions", "Run your web scripts on your desired platform", "Create a Test suite", "Run your test suite either sequentially or parallely "] },

    ]

    const centralData = [
        { title: "AI infused inbuilt framework", list: ["FireFlink has a perfect blend of the popular test automation framework types.", "Varied Frameworks used extensively across the industry such as Data driven, Modular driven, Keyword driven, Hybrid driven, TDD or BDD which are packed as all in one.", "Ready to use framework with a most user friendly features to handle all aspects or configurations involved at various stages of testing.", "AI enabled functionalities to serve your E2E automation needs.", "Automatic dependency management."] },

    ]
    const webVerticalData = [
        { image1: filter, image2: lapset, title: "Steps Reusability", content: "Quit often we see the steps are repeated across multiple scenarios while we test web applications. To address the pain points that we face while we consider the maintainability Step groups, these repeated steps are aspects of the steps which occurs repeatedly, thanks to FireFlink's clubbed into step groups for the ease of usability." },
        { image2: lapset, image2: lapset, title: "Steps Reusability", content: "Quit often we see the steps are repeated across multiple scenarios while we test web applications. To address the pain points that we face while we consider the maintainability Step groups, these repeated steps are aspects of the steps which occurs repeatedly, thanks to FireFlink's clubbed into step groups for the ease of usability." }
    ]

    const laptopData = [
        { title: "AI infused inbuilt framework", list: ["AI based report for all your test suite execution", "Execute only failed test steps", "Screen shots for all your failed test steps without any configuration", "Send your test suite report for the selected group of people"] },

    ]


    return (
        <div>

            <AfterNavbar homeMainData={homeMainData} />

            <div className='background-image1'>
                <DemoButtonComponent />
                <div className='row mb-5'>
                    <div className='col-md-6'>
                        <img src={lapStack} alt="stack" className='d-flex w-100 p-5' />
                    </div>
                    <div className='col-md-6 mt-5 ps-5'>
                        {
                            listData.map((item, index) => {
                                return (
                                    <ul key={index} className="list-unstyled ">
                                        <li className='h4 mt-4 mb-4'>{item.title}</li>
                                        <li>{item.list.map((item, index) => <li className='mb-3'><div className=' d-inline-block rounded-circle bindi'></div>  {item}</li>)}</li>

                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>



                <div className='d-flex justify-content-center  mb-5 mariner'>
                    <div className='row '>
                        <p className='h4 text-center mb-5 mt-5'>Supports multiple platforms</p>
                        <div className='col-md-4'>  <img src={window} alt="window" className='d-block pe-5 ps-5' />  </div>
                        <div className='col-md-4 ' >  <img src={linux} alt="window" className='d-block ps-5 pe-5' />  </div>
                        <div className='col-md-4 ' >  <img src={mac} alt="window" className='d-block ps-5 pe-5' />  </div>
                    </div>
                </div>
            </div>

            <div className='row ps-5 pt-5 onlyblr'>
                <div className='col-md-6 mt-5'>
                    <p className='mini-heading'>Execution</p>
                    <p className='heading'>Run your web test scripts</p>
                    <p className='mini-heading-web'>FireFlink supports executing your web test scripts on multiple browsers</p>
                </div>
                <div className='col-md-5 '>
                    <img src={crome} alt="crome" />
                    <img src={firefox} alt="crome" />
                    <img src={edge} alt="crome" />
                    <img src={safari} alt="crome" />
                    <img src={Operabro} alt="crome" />

                </div>
            </div>

            {/* centralized */}
            <div className='row mb-5 mt-5'>
                <div className='col-md-6 mt-5 ps-5'>
                    {
                        centralData.map((item, index) => {
                            return (
                                <ul key={index} className="list-unstyled ">
                                    <li className='h4 mt-4 mb-4'>{item.title}</li>
                                    <li>{item.list.map((item, index) => <li className='mb-4'><div className=' d-inline-block rounded-circle bindi'></div>  {item}</li>)}</li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div className='col-md-6'>
                    <img src={centralized} alt="stack" className='d-flex w-75  ps-5 h-100 pt-0' />
                </div>

            </div>

            <VerticalSection webVerticalData={webVerticalData} />

            <div className='row mb-2 p-5'>
                <div className='col-md-6'>
                    <img src={left_laptop} alt="left_laptop" className='d-flex w-50 mt-5 ms-5 ps-5' />
                </div>
                <div className='col-md-6 mt-5 ps-1'>
                    {
                        laptopData.map((item, index) => {
                            return (
                                <ul key={index} className="list-unstyled ">
                                    <li className='h4 mt-4 mb-4'>{item.title}</li>
                                    <li key={index}>{item.list.map((item, index) => <li className='mb-3'><div className=' d-inline-block rounded-circle bindi'></div>  {item}</li>)}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>

            <div className='row mb-5'>
                <div className='col-md-6 mt-3  ps-5'>
                    {
                        laptopData.map((item, index) => {
                            return (
                                <ul key={index} className="list-unstyled ">
                                    <li className='h4 mt-4 mb-4'>{item.title}</li>
                                    <li key={index}>{item.list.map((item, index) => <li className='mb-3'><div className=' d-inline-block rounded-circle bindi'></div>  {item}</li>)}</li>

                                </ul>
                            )
                        })
                    }
                </div>

                <div className='col-md-6'>
                    <img src={left_laptop} alt="left_laptop" className='d-flex w-50 mt-3 ms-5 ps-5' />
                </div>

            </div> 


            <FooterSection />
            <FooterLinks />
            <SocialMediaLink />


        </div>
    )
}

export default Web