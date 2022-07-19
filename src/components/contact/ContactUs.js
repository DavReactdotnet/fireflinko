import React, { useEffect, useState } from 'react'
import "../../style/App.scss"

import mail from "../../assets/mail.png";
import mobile from "../../assets/mobile.png";
import location from "../../assets/location.png";
import Contact_Us from '../../assets/contact/Contact_Us.png'
import SocialMediaLink from '../../molecues/SocialMediaLink'
import { AfterNavbar, DemoButtonComponent, FooterLinks, FooterSection } from '../../molecues/CommonComponents'
import { Button, Form } from 'react-bootstrap';


const ContactUs = () => {
    const [count, setCount] = useState(0)

    const imgary = [location, mobile, mail]
    const contactAddress = [{ title: "Contact information", contactType: ["FireFlink, a unit of Test Yantra Software Solutions, Vijayarangam Layout, Jayanagar, Bengaluru, Karnataka 560070.", "+91 (080) 4120-4235", "contactus@flinko.com"] }]

    const contactMainData = { image: Contact_Us, title: "Contact Us", subTitle: "Want us to reach you out?", content: "Get in touch and we will connect you with the FireFlink expert who can best assist you at your earliest" }
    console.log(count);


    // form state
    const [formValues, setformValues] = useState({
        name: "",
        email: "",
        phone: "",
    })

    // error
    const [errorState, seterrorState] = useState({})
    const [subFlag, setsubFlag] = useState(false)

    const onChangeEvent = (e) => {

        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        seterrorState(validate(formValues))
        setsubFlag(true)
    }

    const validate = (values) => {
        console.log("error here", errorState);
        const errors = {}
        const regex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.";

        if (!values.name) {
            errors.name = "name is required"
        }
        if (!values.email) {
            errors.email = "email is required"
        }
        if (!values.phone) {
            errors.phone = "phone is required"
        }
        return errors

    }


    useEffect(() => {
        if (Object.keys(errorState).length === 0 && subFlag) {

            console.log(formValues)
        }
    }, [errorState])


    return (
        <div>

            <AfterNavbar contactMainData={contactMainData} />

            <div className='background-image1'>
                <DemoButtonComponent />
            </div>

            <div >

                {
                    contactAddress.map((item, index) => {
                        console.log(item);
                        return (
                            <ul>
                                <div className='d-flex justify-content-evenly mt-5 mb-5 clm'>
                                    {item.contactType.map((item, index) =>

                                        <div className='md-col-4 w-25 mini-heading'>  {item}</div>
                                    )}

                                </div>

                            </ul>
                        )
                    })
                }

                <div >
                    <p className='black-heading-contact text-center'>Get in touch</p>
                    <div className='d-flex justify-content-center'>
                        <Form className='w-50' onSubmit={handelSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label><span className='text-danger'>*</span> Name</Form.Label>
                                <Form.Control className={`${errorState.name ? "border-danger" : ""}`}   type="text" size='lg' name="name" value={formValues.name} onChange={onChangeEvent} />
                            </Form.Group>
                            <p style={{ color: "red" }}>{errorState.name}</p>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><span className='text-danger'>*</span> Email</Form.Label>
                                <Form.Control className={`${errorState.email ? "border-danger":""}`} type="email" size='lg' name="email" value={formValues.email} onChange={onChangeEvent} />
                            </Form.Group>
                            <p style={{ color: "red" }}>{errorState.email}</p>


                            <Form.Group className="mb-3" >
                                <Form.Label><span className='text-danger'>*</span>  phone number</Form.Label>
                                <Form.Control  className={`${errorState.phone ? "border-danger" : ""}`}  type="text" size='lg' name="phone" value={formValues.phone} onChange={onChangeEvent} />
                            </Form.Group>
                            <p style={{ color: "red" }}>{errorState.phone}</p>



                            <Form.Group className="mb-3" >
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    onChange={e => setCount(e.target.value.length)}
                                    style={{ height: '100px' }} />
                                <div className='d-flex justify-content-end border-primary'>
                                    <span>{count}/500</span>

                                </div>
                            </Form.Group>

                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" type="submit" className='w-50 mb-5 mt-5 clr'>  Submit  </Button>
                            </div>
                        </Form>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                </div>



            </div>
            <FooterSection />
            <FooterLinks />
            <SocialMediaLink />


        </div>
    )
}

export default ContactUs