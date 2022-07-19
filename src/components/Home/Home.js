import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import "../../style/App.scss"
import { FaPlayCircle } from 'react-icons/fa';
import web from '../../assets/web.png'
import first from '../../assets/first.png'
import second from '../../assets/second.png'
import third from '../../assets/third.png'
import btn1 from '../../assets/btn1.png'
import MyCarousel from '../../molecues/MyCarousel';
import image1 from "../../assets/side_1.png";
import image2 from "../../assets/side_2.png";
import image3 from "../../assets/side_3.png";
import image4 from "../../assets/side_4.png";
import image5 from "../../assets/side_5.png";
import image6 from "../../assets/side_6.png";
import image7 from "../../assets/side_7.png";
import image8 from "../../assets/side_8.png";
import image9 from "../../assets/side_9.png";
import image10 from "../../assets/side_10.png";
import image11 from "../../assets/side_11.png";
import infi from "../../assets/infi.png";
import read from "../../assets/read.png";
import rounded from "../../assets/rounded.png";
import { ArrowButton, CardComponent, DemoButtonComponent, ModalComponent, RenderButton } from '../../molecues/CommonComponents';
import ScrollToTop from 'react-scroll-to-top';
import firstModal from '../../assets/firstModal.png'
import secondModal from '../../assets/secondModal.png'
import thirdModal from '../../assets/thirdModal.png'
import fourthModal from '../../assets/fourthModal.png'
import fifthModal from '../../assets/fifthModal.png'
import sixthModal from '../../assets/sixthModal.png'
import seventhModal from '../../assets/seventhModal.png'
import eightModal from '../../assets/eightModal.png'


const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState(1);

  const imgAry = [
    { number: 1, title: "side_1", image: image1 },
    { number: 2, title: "side_2", image: image2 },
    { number: 3, title: "side_3", image: image3 },
    { number: 4, title: "side_4", image: image4 },
    { number: 5, title: "side_5", image: image5 },
    { number: 6, title: "side_6", image: image6 },
    { number: 7, title: "side_7", image: image7 },
    { number: 8, title: "side_8", image: image8 },
    { number: 9, title: "side_9", image: image9 },
    { number: 9, title: "side_9", image: image10 },
    { number: 9, title: "side_9", image: image11 },

  ]

  const footerAry = [
    { title: "Platforms", list: ["Web", "Mobile", "Web Services"] },
    { title: "Insight", list: ["Why Flinko?", "Flinko's objectives", "Our solution stages", "Key benefits"] },
    { title: "Pricing", list: ["Cloud Basic", "Cloud Professional", "On Premises - Enterprise"] },
    { title: "Support", list: ["Contact Us", "Request a demo", "Terms of Use"] },
    { title: "Company Address", list: ["Flinko,Vijayanagram layout,Jaynagar,Bengaluru,karnataka 5600700"] },

  ]

  const modalData = [
    {
      id: 1,
      imgSrc: firstModal,
      title: "Elements Finder Plugin",
      desc: ["Quick start automation by reducing the time spent on identifying UI elements.",
        "One Click solution to capture UI elements with multiple optimal locators.",
        "Captures optimal xpath with advanced capability of generating xpath by reference UI elements for dynamic elements.",
        "Object repository will be built in minutes."
      ]
    },
    {
      id: 2,
      imgSrc: secondModal,
      title: "Script Versioning",
      desc: ["Has in-built script version control mechanism, with hassle free commit and publishing process, making it easy for the leads to decide on the scripts to be published for the usage in various execution suites upon review from test development phase."]
    }, {
      id: 3,
      imgSrc: thirdModal,
      title: "Optimizer",
      desc: ["Helps hassle free clearing of the dump of unused resources in a project.",
        "Optimizes the scripts by infusing the basic discipline to be followed during script development by letting the user know about the ways to improve the quality of the written script such as unnecessary waits statements, hard coded inputs etc."
      ]
    },
    {
      id: 4,
      imgSrc: fourthModal,
      title: "Core Repo",
      desc: ["Completely eases the object repository construction stage by well organizing the elements in the structure in which they are seen on the application making it more maintainable. The elements that are repeating across the application can be easily shared between pages with the shared elements feature.",
        "Constantly failing locators in an element are automatically reprioritized through AI to speed up the element identification with apt locators every time.",
        "Values of dynamic element xpaths are handled efficiently without having to define them multiple times, easing the element maintenance in repo."
      ]
    },
    {
      id: 5,
      imgSrc: fifthModal,
      title: "Rich Reports",
      desc: ["Detailed results are generated at various levels.",
        "Post execution of a suite, a rich report in Pdf format will be emailed, which details out the various parameters such as the execution environment, duration of suite execution, statistics at various levels with a graphical representation of the overview of the results."
      ]
    },
    {
      id: 6,
      imgSrc: sixthModal,
      title: "Suite",
      desc: ["Supports multiple execution mechanisms such as sequential, parallel, distributed, with support for scheduling of suite execution at regular intervals through built-in Schedulers.",
        "AI enabled features in suites such as estimation of suite execution duration, queuing of suites for execution on a specific machine etc.",
        "Tagging and Untagging of failed scripts."
      ]
    },
    {
      id: 7,
      imgSrc: seventhModal,
      title: "Reusable Steps",
      desc: ["Enables the essence of reusability with the concept of step groups to avail the repeated set of steps specific to an application under test, be it web, android, iOS and web service steps."]
    },

    {
      id: 8,
      imgSrc: eightModal,
      title: "Custom NLP",
      desc: ["We have you covered for the application specific custom NLP's through our program elements concept, which allows you to define your own logic for any actions or verifications need, where you have the option to bring in your own language into the product."]
    }]

  const cardData = [
    { id: 1, title: "Rich NPL Liberary", content: "NLP Powered Scriptless Automation Engine. No code: Natural language scripts Optimized to handle all stages of automation...", image: first },
    { id: 2, title: "Robust Execution", content: "Flinko serves with not just what the testing world today needs, but beyond. Experience it now ! Execution Dashboard...", image: second },
    { id: 3, title: "Rich Reports", content: "AI - assisted dashboards & analytics help the decision makers oversee all the aspects of the entire application under test...", image: third },

  ]


  return (
    <div className='contsiner-fluid'>
      <div className='img d-flex justify-content-between'>
        <div className=' col-xs-6'>
          <h2>Test Autometion. Redefined.</h2>
          <p>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
          <div>
            <button className='btn btn-primary rounded-pill  w-25'>Start free trail</button>

          </div>

        </div>
        <div className='col-md-6 mycar'>
          <MyCarousel>
            <div>
              <img src={web} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="assets/2.jpeg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="assets/3.jpeg" />
              <p className="legend">Legend 3</p>
            </div>
          </MyCarousel>
        </div>
      </div>

      {/* demo ribben here */}
      <DemoButtonComponent />

      <div className='d-flex text-primary  justify-content-center mt-5 '>

        <h3>Single thread multi channel execution</h3>
      </div>

      <div className=" web_img d-flex flex-wrap">
        <div className='d-flex justify-content-center w-100'>
          <img src={web} className="d-block w-75" alt="computer" />

        </div>
      </div>

      <div className='d-flex text-primary  justify-content-center mt-5 '>

        <h3>Would you love to know what makes us unique?</h3>
      </div>

      <div className='d-flex justify-content-evenly mt-5'>

        {
          cardData.map((item, index) => {
            return <>
              <CardComponent item={item} />
            </>
          })
        }
      </div>


      <div className='netview'>
        {/* first layer */}
        <div className='d-flex justify-content-evenly'>
          <div className='d-flex justify-content-center  ' >
            <ArrowButton lable="Elements Finder Plugin" btnId={1} setId={setId} setModalShow={setModalShow} />
          </div>

          <div className='d-flex justify-content-center '>
            <ArrowButton lable="Script Reversioning" btnId={2} setId={setId} setModalShow={setModalShow} />
          </div>
        </div>
        {/* second layer */}
        <div className='d-flex justify-content-between  p-3  mt-5'>
          <div className='d-flex justify-content-center'>
            <ArrowButton lable="Optimizer" btnId={3} setId={setId} setModalShow={setModalShow} />
          </div>
          <div className='d-flex justify-content-center'>
            <ArrowButton lable="Core Repo" btnId={4} setId={setId} setModalShow={setModalShow} />
          </div>
        </div>
        {/* third layer */}
        <div className='d-flex justify-content-between  p-3 mt-5'>
          <div className='d-flex justify-content-center'>
            <ArrowButton lable="Rich Report" btnId={5} setId={setId} setModalShow={setModalShow} />

          </div>

          <div className='d-flex justify-content-center'>
            <ArrowButton lable="Suite" btnId={6} setId={setId} setModalShow={setModalShow} />

          </div>
        </div>
        {/* fourth layer */}
        <div className='d-flex justify-content-evenly  p-3 mt-5'>
          <div className='d-flex justify-content-center'>
            <ArrowButton lable="Reusable Step" btnId={7} setId={setId} setModalShow={setModalShow} />

          </div>

          <div className='d-flex justify-content-center '>
            <ArrowButton lable="Custom NLP" btnId={8} setId={setId} setModalShow={setModalShow} />

          </div>
        </div>

      </div>

      {/* multiple logo image section */}
      <div className='multilogo text-primary p-5'>
        <div>
          <h2>Integrations</h2>
          <h4>Flexibly can fit to your environment</h4>
          <p>Integrates well with any of the third party tools.<br />

            No need to test enterprise application in isolation any more.<br />

            Open enough to fit in any of your preferred ALM tools to support seamless dataflow between any of your existing plugins to support true E2E testing be it for defect tracking, say the popular defect tracking tools like Jira, Bugzilla, Mantis etc… or the cloud testing platforms like browser stack, SauceLabs etc… or the continues integration tools like Jenkins, Bamboo, Teamcity etc… are few third party plugins to name which are integrated. You name it, we will be able to integrate your preferred tools in no time !</p>
        </div>
        <div className='col-md-6'>
          <div className='row'>
            {
              imgAry.map((item, index) => {
                return (
                  <div className='col-lg-4 ' key={index}>
                    <img src={item.image} alt='' className='logosize' />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between text-primary p-5'>
        {/* first */}
        <div className='w-50 d-flex justify-content-center'>
          <img src={infi} className="d-block w-75" alt='' />
        </div>
        <div className='w-50'>
          <h1>DevOps and Agile Adaptibility</h1>
          <h5>DevOps</h5>
          <p>Integrates with your DevOps pipeline for relentless testing to ensure quick turnaround. Schedule your execution and forget it, Flinko would run it for you anytime.</p>
          <h5>Agile Adaptibility</h5>
          <p>Flinko is a strategic investment for business, to reduce TCO and ensure quality is maintained with a faster time to market.

            Conventional automation testing uses “scripting", which requires knowledge about native scripting languages supported by automation tools.</p>
          <div className='d-flex justify-content-start '>
            <img src={read} alt="readmore" className='d-block readclass' />
          </div>
        </div>
      </div>
      <div>
      </div>

      <div className='d-flex justify-content-between text-primary p-5'>
        <div className='w-50'>
          <h1>DevOps and Agile Adaptibility</h1>
          <h5>DevOps</h5>
          <p>Integrates with your DevOps pipeline for relentless testing to ensure quick turnaround. Schedule your execution and forget it, Flinko would run it for you anytime.</p>
          <h5>Agile Adaptibility</h5>
          <p>Flinko is a strategic investment for business, to reduce TCO and ensure quality is maintained with a faster time to market.
            Conventional automation testing uses “scripting", which requires knowledge about native scripting languages supported by automation tools.</p>

        </div>
        <div className='w-50 d-flex justify-content-center'>
          <img src={infi} className="d-block w-75" alt='infi' />
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
      <ScrollToTop smooth />
      <ModalComponent show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalData}
        id={id}
        setModalShow={setModalShow}
      />
    </div>

  )
}

export default Home