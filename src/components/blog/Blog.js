import React from 'react'
import { Form, Button, Navbar, Nav, NavDropdown, Container, Carousel, Card, Image, Badge } from 'react-bootstrap'
import "../../style/App.scss"
import { FaPlayCircle } from 'react-icons/fa';
import web from '../../assets/web.png'
import first from '../../assets/first.png'
import second from '../../assets/second.png'
import third from '../../assets/third.png'
import NavBar from '../navbar/NavBar';
import btn1 from '../../assets/btn1.png'
import blog from '../../assets/blog.png'
import bcard1 from '../../assets/bcard1.png'
import heart from '../../assets/heart.png'
import rounded from '../../assets/rounded.png'
import BlogCard from '../../molecues/BlogCard';
import ScrollToTop from 'react-scroll-to-top';





const Blog = () => {

    const pillData = ["All", "Feature", "Product", "business", "Technology", "Dummy text",
        "Customer Story", "Product Tutorial", "Customer Service"]


    const blogCardData = [
        { id: 1, image: bcard1, title: "Headline", content: "Open enough to fit in any of your preferred ALM tools to support seamless dataflow between any of your existing plugins to support true E2E testing be it for defect tracking, say the popular defect tracking tools like Jira.",img:heart,view:"10 views",comment:"10 comments" },
        { id: 1, image: bcard1, title: "Headline", content: "Open enough to fit in any of your preferred ALM tools to support seamless dataflow between any of your existing plugins to support true E2E testing be it for defect tracking, say the popular defect tracking tools view Jira." ,img:heart,view:"20 views",comment:"20 comments"},
        { id: 1, image: bcard1, title: "Headline", content: "Open enough to fit in any of your preferred ALM tools to support seamless dataflow between any of your existing plugins to support true E2E testing be it for defect tracking, say the popular defect tracking tools view Jira.",img:heart,view:"40 views",comment:"30 comments" },
        { id: 1, image: bcard1, title: "Headline", content: "Open enough to fit in any of your preferred ALM tools to support seamless dataflow between any of your existing plugins to support true E2E testing be it for defect tracking, say the popular defect tracking tools view Jira.",img:heart,view:"60 views",comment:"40 comments" },
        { id: 1, image: bcard1, title: "Headline", content: "Open enough to fit in any of your preferred ALM tools to support seamless dataflow between any of your existing plugins to support true E2E testing be it for defect tracking, say the popular defect tracking tools view Jira.",img:heart,view:"10 views ",comment:"50 comments"},
        { id: 1, image: bcard1, title: "Headline", content: "Open enough to fit in any of your preferred ALM tools to support seamless dataflow between any of your existing plugins to support true E2E testing be it for defect tracking, say the popular defect tracking tools view Jira.",img:heart,view:"20 views",comment:"60 comments" }
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
                    <h1>Our Blog</h1>
                    <h4>Drive into the world of Flinko and it's beautiful minds.</h4>
                    <p>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
                    <div>
                        <button className='btn btn-primary rounded-pill '>Buy Now</button>
                        <button className='btn btn-outline-primary rounded-pill mar '>
                            <span>  <FaPlayCircle /></span>
                            Buy Now</button>
                    </div>

                </div>
                <div className='col-md-6 mycar'>
                    <img src={blog} alt="blog image" width={500} />
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



            <div className='mt-5 blog'>
                <div className='d-flex justify-content-evenly flex-wrap '>
                    {
                        pillData.map((item, index) => {
                            return <>
                                <button className='border border-1 btn-light  rounded-pill mt-2'>{item}</button>
                            </>
                        })
                    }
                    <div>
                        <input className='rounded-pill border border-2 mt-2'
                            type="text"
                            placeholder="Search" aria-label="Search">
                        </input>
                    </div>
                </div>
                {/* cardcomponents */}

                <div className='row'>
                {
                    blogCardData.map((item, index) => {
                        return (
                              <div className='col-md-4 p-5'>
                                <BlogCard item={item}/>
                                </div>
                          
                        )
                    })
                }
                </div>
            </div>

{/* footer */}

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
<div className='d-flex justify-content-around p-2 foot'>
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

export default Blog