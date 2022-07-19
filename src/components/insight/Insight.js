import React from 'react'
import "../../style/App.scss"
import bulb from '../../assets/services/bulb.png'
import image1 from '../../assets/insight/Accelerated_testing.png'
import image2 from '../../assets/insight/Agility_Time_to_Value.png'
import image3 from '../../assets/insight/Future_Proof_your_testing.png'
import image4 from '../../assets/insight/Reduce_cost_to_serve.png'
import image5 from '../../assets/insight/Reduced_changes_&_maintenance_efforts.png'
import firstarrow from '../../assets/insight/firstarrow.png'
import secondarrow from '../../assets/insight/secondarrow.png'
import thirdarrow from '../../assets/insight/thirdarrow.png'
import fourtharrow from '../../assets/insight/fourtharrow.png'
import fiftharrow from '../../assets/insight/fiftharrow.png'
import Arrow_right from '../../assets/insight/Arrow_right.png'


import SocialMediaLink from '../../molecues/SocialMediaLink'
import { AfterNavbar, DemoButtonComponent, FooterLinks, FooterSection, InsightArrow, ListComponet, PaperComponent } from '../../molecues/CommonComponents'
import { Button } from 'react-bootstrap'

const Insight = () => {

    const insightMainData = { image: bulb, title: "FireFlink - Insights", subTitle: "Insights and ideas to ponder on ", content: "Simple to adopt and elegantly designed, with the power to give your real testing acceleration. Achieve sustainable automation with no technical barriers. It’s amazing what AI can do !" }

    const ansData = [
        "FireFlink addresses the choke points in test automation with a game changing all in one scriptless E2E platform, enabling businesses to get out of linear & experimental process & get quick ROI",
        "FireFlink is built to be technology & platform agnostic, thereby offering future proof solutions.",
        "Revolutionary AI technology allows for faster test creation & execution.",
        "Eliminates test maintenance overhead allowing stakeholders to play an active role during automation.",
        "Enables customer to integrate with existing CI/CD pipeline - improves overall quality & frequency of the releases.",
        "Inbuilt script version control system, with hassle free commit & publishing options across test development & execution phases, easing the review / approval process."
    ]


    const listData = [
        { title: "Easy and simple", list: ["All set to enable your manual testing team to switch to automation just in a day's time.", "You heard it right!! You can become a FireFlink novice to ninja in just few hours, believe us-its as simple as that!", "FireFlink is structured in a way anybody can automate (ABCA).", "Scriptless, Rich NLP library to handle all types of actions & verifications.", "Absolutely no programming language knowledge is required nor expertise of any other technologies such as Selenium, Appium, Apache POI, TestNG etc..."] },
        { title: "Reusable and Extensible", list: ["Maximize efficiency & accelerate success with an option for library of reusable, common process scenarios.", "Reduces library building time", "Perform parallel, distributed execution minimizing time.", "A true E2E test automation platform where within a single test script we can have steps for automating Web applications, Mobile apps & Web Service testing."] },
        { title: "Learnability", list: ["Automating with FireFlink can be thoroughly learnt by a manual test engineer within 2 days. The three common stages in any test automation is just a cakewalk here.", "Easy element building through “Element Locator” plugin which is AI enabled for prioritizing & prefilling the element locator details resulting in rich object repository in few minutes, be it any complex UI. The concept of rich prebuild NLP's helps craft scripts in just few blinks. When it comes to test execution, absolutely no need to handle complex configurations to achieve variations in execution, our concept of suite building & execution is to be experienced once to appreciate."] },

    ]


    return (
        <div>

            <AfterNavbar insightMainData={insightMainData} />

            <div className='background-image1'>
                <DemoButtonComponent />

                <div className='d-flex justify-content-center mt-5'>
                    <p className='heading border-bottom border-2  border-warning'>Why FireFlink ?</p>
                </div>
                {
                    ansData.map((item, index) => {
                        return (
                            <div className='d-flex w-75 ms-5 '>
                                <ul key={index} className="mt-1 list-unstyled ">
                                    <li>{item}</li>
                                </ul>
                            </div>
                        )
                    })
                }

                {/* second layer */}

                <div className='d-flex justify-content-center mt-5'>
                    <p className='heading border-bottom border-2  border-warning'>FireFlink's objectives</p>
                </div>

                <div className='row mt-5 mb-5 justify-content-center'>
                    <div className='col-md-2 d-flex flex-column align-items-center'>
                        <img src={image1} alt="native" className=' w-50' />
                        <div> <p className='h6 mt-3 mb-5'>Accelerated testing</p></div>

                    </div>
                    <div className='col-md-2 d-flex  flex-column align-items-center'>
                        <img src={image2} alt="native" className='w-50 ' />
                        <div> <p className='h6 mt-3 mb-5'>Reduce Cost to Serve</p></div>
                    </div>

                    <div className='col-md-2  d-flex  flex-column align-items-center'>
                        <img src={image3} alt="native" className='w-50' />
                        <div> <p className='h6 mt-3 mb-5'>Agility - Time to Value</p></div>
                    </div>

                    <div className='col-md-2  d-flex  flex-column align-items-center'>
                        <img src={image4} alt="native" className='w-50' />
                        <div> <p className='h6 mt-3 mb-5'>Future Proof your testing</p></div>
                    </div>

                    <div className='col-md-2  d-flex  flex-column align-items-center'>
                        <img src={image5} alt="native" className='w-50' />
                        <div> <p className='h6 mt-3 mb-5 text-center'>Reduced Changes & maintenance effort</p></div>
                    </div>

                </div>

                {/* third */}
                <div className='d-flex justify-content-center mt-5'>
                    <p className='heading border-bottom border-2  border-warning'>Our solution stages</p>
                </div>
                <div className='row mt-5 mb-5 justify-content-center'>
                    <div className='col-md-2 d-flex flex-column align-items-center'>
                        <img src={firstarrow} alt="native" className='mb-1 w-50' />

                    </div>
                    <div className='col-md-2 d-flex  flex-column align-items-center'>
                        <img src={secondarrow} alt="native" className=' mb-1 w-50 ' />
                    </div>

                    <div className='col-md-2  d-flex  flex-column align-items-center'>
                        <img src={thirdarrow} alt="native" className='mb-1 w-50' />
                    </div>

                    <div className='col-md-2  d-flex  flex-column align-items-center'>
                        <img src={fourtharrow} alt="native" className='mb-1 w-50' />
                    </div>

                    <div className='col-md-2  d-flex  flex-column align-items-center'>
                        <img src={fiftharrow} alt="native" className='mb-1 w-50' />
                    </div>
                </div>


                <div className='ms-5 mt-5'>
                    <div className='d-flex justify-content-center mt-5'>
                        <p className='heading border-bottom border-2  border-warning'>Key benefits</p>
                    </div>

                    <div>
                        <ul className='list-unstyled ms-4'>
                            <li className='tikfont'><img src={Arrow_right} className="d-inline-block tikstyle right-arrow" /> <span className='mini-heading text-dark'>Cost saving</span> </li>
                            <div className='ps-4'>
                                <li>Reduced Resource cost as maintanence does not require an automation expert</li>
                                <li>Reduced maintenance cost</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul className='list-unstyled ms-4'>
                            <li className='tikfont'><img src={Arrow_right} className="d-inline-block tikstyle right-arrow" /> <span className='mini-heading text-dark'>Time saving</span> </li>
                            <div className='ps-4'>
                                <li>Reduced Resource cost as maintanence does not require an automation expert</li>
                                <li>Reduced maintenance cost</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul className='list-unstyled ms-4'>
                            <li className='tikfont'><img src={Arrow_right} className="d-inline-block tikstyle right-arrow" /> <span className='mini-heading text-dark'>Resource saving</span> </li>
                            <div className='ps-4'>
                                <li>Reduced Resource cost as maintanence does not require an automation expert</li>
                                <li>Reduced maintenance cost</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul className='list-unstyled ms-4'>
                            <li className='tikfont'><img src={Arrow_right} className="d-inline-block tikstyle right-arrow" /> <span className='mini-heading text-dark'>Agility</span> </li>
                            <div className='ps-4'>
                                <li>Reduced Resource cost as maintanence does not require an automation expert</li>
                                <li>Reduced maintenance cost</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul className='list-unstyled ms-4'>
                            <li className='tikfont'><img src={Arrow_right} className="d-inline-block tikstyle right-arrow" /> <span className='mini-heading text-dark'>Business alignment & quality</span> </li>
                            <div className='ps-4'>
                                <li>Reduced Resource cost as maintanence does not require an automation expert</li>
                                <li>Reduced maintenance cost</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <ListComponet listData={listData} />
            <FooterSection />
            <FooterLinks />
            <SocialMediaLink />


        </div>
    )
}

export default Insight