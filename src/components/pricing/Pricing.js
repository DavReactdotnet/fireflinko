import React from 'react'
import "../../style/App.scss"
import price from '../../assets/services/price.png'
import tik from "../../assets/tik.png";
import twouser from '../../assets/services/twouser.png'
import { Paper } from "@mui/material"


import SocialMediaLink from '../../molecues/SocialMediaLink'
import { AfterNavbar, DemoButtonComponent, FooterLinks, FooterSection, PaperComponent } from '../../molecues/CommonComponents'
import { Button } from 'react-bootstrap'

const Pricing = () => { 

  const pricemainData = { image: price, title: "FireFlink - Offerings", subTitle: "Agile quality unified across your testing needs", content: "Accelerate projects, reduce risk and drive strategic adaptation of new-age automation by exploring the connective automation platform." }

  const paperData = [
    { image: twouser, title: "Cloud Basic", subTitle: "For small teams trying out FireFlink", price: "It's Free!", dollar: "$50", btnText: "Get Started" },

    {
      list: [
        { image: tik, content: "Unlimited Duration" },
        { image: tik, content: "Access to all features of the product" },
        { image: tik, content: "Can automate Web, Android, iOS, Web Service testing projects" },
        { image: tik, content: "Upto 3 users" },
        { image: tik, content: "1 Parallel Run" },
        { image: tik, content: "Unlimited Projects" },
        { image: tik, content: "Unlimited Suites" },
        { image: tik, content: "Upto 100 Test Scripts" },
        { image: tik, content: "Storage upto 5GB" },
        { image: tik, content: "Access to Dashboard and Advanced Analytics" },
        { image: tik, content: "Seamless Integration with any 3rd party tools" },
      ]
    }

  ]

  return (
    <div>

      <AfterNavbar pricemainData={pricemainData} />

      <div className='background-image1'>
        <DemoButtonComponent />

        {/* paper */}
        <div className='row m-5'>
          <div className='col-md-4'>
            <Paper className=" shadow h-100">
              <div>
                <div className="d-flex justify-content-center">
                  <img src={paperData[0].image} alt="twouser" className="d-block w-25" />
                </div>
                <div className="text-center">
                  <p className="h5">{paperData[0].title}</p>
                  <p>{paperData[0].subTitle}</p>
                </div>
                <div className="text-center">
                  <p>{paperData[0].price}</p>
                  <p text>{paperData[0].dollar}</p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button className=" clr mb-3 w-75 " >Get Started</Button>
              </div>
              {
                paperData[1].list.map((item,index)=>{
                  return(
                    <ul key={index} className='list-unstyled ms-4'>
                      <li className='tikfont'><img src={tik}  className="d-inline-block tikstyle right" /> <span>{item.content}</span> </li>
                    </ul>
                  )
                })
              }
             
            </Paper>
          </div>

          <div className='col-md-4'>
            <Paper className="shadow">
              <div>
                <div className="d-flex justify-content-center">
                  <img src={paperData[0].image} alt="twouser" className="d-block w-25" />
                </div>
                <div className="text-center">
                  <p className="h5">{paperData[0].title}</p>
                  <p>{paperData[0].subTitle}</p>
                </div>
                <div className="text-center">
                  <p>{paperData[0].price}</p>
                  <p text>{paperData[0].dollar}</p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button className=" clr  mb-4 w-75" >Get Started</Button>
              </div>

              {
                paperData[1].list.map((item,index)=>{
                  return(
                    <ul key={index} className='list-unstyled ms-4'>
                      <li className='tikfont'><img src={tik}  className="d-inline-block tikstyle right" /> <span>{item.content}</span> </li>
                    </ul>
                  )
                })
              }
            
              
              <div className='d-flex justify-content-center mt-3'>
                <Button variant="outline-primary mb-4">Contact Us</Button>
              </div>
            </Paper>
          </div>

          <div className='col-md-4'>
            <Paper className=" shadow">
              <div>
                <div className="d-flex justify-content-center">
                  <img src={paperData[0].image} alt="twouser" className="d-block w-25" />
                </div>
                <div className="text-center">
                  <p className="h5">{paperData[0].title}</p>
                  <p>{paperData[0].subTitle}</p>
                </div>
                <div className="text-center">
                  <p>{paperData[0].price}</p>
                  <p text>{paperData[0].dollar}</p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button className=" clr mb-3 w-75" >Get Started</Button>
              </div>
              {
                paperData[1].list.map((item,index)=>{
                  return(
                    <ul key={index} className='list-unstyled ms-4'>
                      <li className='tikfont'><img src={tik}  className="d-inline-block tikstyle right" /> <span>{item.content}</span> </li>
                    </ul>
                  )
                })
              }
             
              <div className='d-flex justify-content-center mt-3'>
                <Button variant="outline-primary mb-4">Contact Us</Button>
              </div>
            </Paper>
          </div>
        </div> 
          </div>

     <FooterSection />
      <FooterLinks />
      <SocialMediaLink />


    </div>
  )
}

export default Pricing