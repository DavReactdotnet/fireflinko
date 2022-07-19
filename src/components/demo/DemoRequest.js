import React, { useState } from 'react'
import { Form, Button, Navbar, Nav, NavDropdown, Container, Carousel, Card, Image, Badge } from 'react-bootstrap'
import "../../style/App.scss"
import request from '../../assets/request.png'
import rounded from '../../assets/rounded.png'
import tik from '../../assets/tik.png'
import { Paper } from '@mui/material'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import ScrollToTop from 'react-scroll-to-top'



const DemoRequest = () => {
  const [value, setValue] = useState()

  const demoList = [
    { image: tik, content: "Scriptless AI & NLP based Test Automation solution" },
    { image: tik, content: "One Stop solution for all your Automation complexities" },
    { image: tik, content: "One Test script can handle data flow between multiple channels" },
    { image: tik, content: "Small POC on live applications includes web mobile" },
    { image: tik, content: "AI based Elements Finder Plugin" },
    { image: tik, content: "AI based Report & Analytics" },
    { image: tik, content: "Cross platform & Cross browser testing" },
    { image: tik, content: "Continuous Integration / continuous delivery Integrations" },
    { image: tik, content: "Custom plugin integration" },
    { image: tik, content: "Root cause analysiss" }
  ]
  const footerAry = [
    { title: "Why Flinko", list: ["Product Comparision", "Migrate To Flinko"] },
    { title: "Platforms", list: ["Web", "Mobile", "Web Services"] },
    { title: "Pricing", list: ["Cloud Basic", "Cloud Professional", "On Premises - Enterprise"] },
    { title: "About Us", list: ["Terms & Conditions", "Privacy Policy"] },
    { title: "Company Address", list: ["Flinko,Vijayanagram layout,Jaynagar,Bengaluru,karnataka 5600700"] },

  ]

  return (
    <div className='contsiner-fluid'>

      <div className='img '>
        <div className='col-md-6 text-primary'>
          <h1>Request a Demo !</h1>
          <h4>Book your live demo here</h4>
          <p>What are you looking for in a scriptless test automation tool? Fill out this simple form and we will get back to you right away.</p>
          <div>
            <button className='btn btn-primary rounded-pill '>Book a free live demo</button>
          </div>

        </div>
        <div className='col-md-6 mycar'>
          <img src={request} alt="blog image" width={500} />
        </div>

      </div>

      <div className="position-relative">
        <div className='d-flex flex-wrap bg-primary text-white justify-content-center'>
          <p>Looking for live demo? Book your 2hrs live training right now</p>
        </div>
        <div className='d-flex justify-content-center position-absolute demo '>
          <button className='btn btn-warning rounded-pill border-white border-2'>Get a free live demo</button>

        </div>
      </div>

      <div className='d-flex justify-content-evenly m-5 response '>
        <div className='col-md-6 p-5'>
          <h6>See how Flinko provides simple solutions for all your Testing needs through key driven NLP's with stronger & Rich Reports & Analytics.</h6>
          <h3 className='mt-5'>Your demo includes</h3>
          {
            demoList.map((item, index) => {
              return <div>
                <ul key={index}  className="list-unstyled mt-4" >
                  <li><span><img src={item.image} className="d-inline-block right" /></span> {item.content}</li>
                </ul>

              </div>
            })
          }
        </div>
        <div>
        </div>

        <div className='col-md-6 p-5  '>
          <Paper className='p-5 shadow '>
            <h2 className='text-center text-primary'>Request a Demo !</h2>
            <Form>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Buissness Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phnoe Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group >
                  <Form.Label>Job title</Form.Label>
                  <Form.Select className="mb-3">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>


                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Select className="mb-3">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <div>
                  <p>We will use this information to provide you with access to the information you requested and provided you with best practices we've learned from over 7.5 Million development, quality and operations experts just like you.</p>

                </div>
                <div>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" 

                    label="By clicking you are agreeing to our privacy policy & term and conditions"/>
                  </Form.Group>
                </div>
          <div className='d-flex justify-content-center'>
          <Button type="submit" className='w-75'>Submit</Button>
          </div>


            
              </fieldset>
            </Form>
          </Paper>
        </div>


      </div>


      <div className='homefooter'>
        <div>
          <h5>Ready to explore?</h5>
          <p>Let our team experts walk you through how Flinko could help you to achieve continuous testing</p>
        </div>
        <div className='position-relative'>
          <img src={rounded} alt='rounded' className='rounded' />
          <p className='position-absolute remoabsolute'>Request a demo</p>
        </div>
      </div>


      {/* footer list */}
      <div className='d-flex justify-content-around p-2 foot mt-2'>
        {
          footerAry.map((item, index) => {
            return <>
              <ul key={index} className="list-unstyled">
                <li className='h6'> {item.title}</li>
                <li>{item.list.map((val) => <li>{val}</li>)}</li>
              </ul>
            </>
          })
        }

      </div>

<ScrollToTop/>

    </div>
  )
}

export default DemoRequest