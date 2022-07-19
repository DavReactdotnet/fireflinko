import { ClassNames } from "@emotion/react"
import { useState } from "react"
import { Button, Card, Form, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import play from '../assets/play.png'
import "../style/App.scss"
import { FaRegTimesCircle } from "react-icons/fa";
import { Paper } from "@mui/material"

export const RenderButton = ({ lable }) => {
    return (
        <Button className="mt-2 d-flex justify-content-between bg-white border rounded-pill border-primary text-primary align-items-center ">
            {lable}
            <img src={play} alt="play" className="play d-block " />
        </Button>
    )
}


export const ArrowButton = ({ lable, setModalShow, btnId, setId }) => {
    return (
        <div onClick={() => {
            setId(btnId);
            setModalShow(true);

        }} id="pointer" >
            {lable}
        </div>
    )
}

export const ModalComponent = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="border-0 justify-content-end">
                <FaRegTimesCircle className="pointer" onClick={() => props.setModalShow(false)} />
            </Modal.Header>

            <Modal.Body >
                <div className="row">
                    <div className="col-sm-6">
                        <img src={props.data[props.id].imgSrc} style={{ display: "block", width: "200px", }} />
                        <h4>{props.data[props.id].title}</h4>
                    </div>
                    <div className="col-sm-6 text-dark">
                        <ol>
                            {
                                props.data[props.id].desc.map((item, index) => {
                                    return <>
                                        <li key={index}>{item}</li>
                                    </>
                                })
                            }
                        </ol>

                    </div>
                </div>
            </Modal.Body>

        </Modal>
    )
}

// card component

export const CardComponent = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Body>
                <div className='d-flex justify-content-center'>
                    <img src={item.image} className="d-block w-25" />
                </div>
                <Card.Title className='text-center mt-3'>{item.title}</Card.Title>
                <Card.Text className='text-center'>{item.content} </Card.Text>
                <div className='d-flex justify-content-center '>
                    <RenderButton lable="Read more" />

                </div>
            </Card.Body>
        </Card>
    )
}

// contact form  

export const ContactForm = () => {
    const initialValues = { userName: "", email: "", phone: "", address: "" }
    const [formValues, setformValues] = useState(initialValues)
    const [formErros, setformErros] = useState({})

    const handelChange = (e) => {

        const { name, value } = e.target
        setformValues({ ...formValues, [name]: value })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        setformErros(validate(formValues))

    }

    const validate = (values) => {

        const errors = {}
        const regex = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
        if (!values.userName) {
            errors.userName = "please enter user name"
        }

        if (!values.email) {
            errors.email = "please enter email"
        } else if (!regex.test(values.email)) {
            errors.email = "please enter valid email";
        }
        if (!values.phone) {
            errors.phone = "please enter user name"
        } else if (values.phone < 4) {
            errors.phone = "greater then 4"
        }

        return errors
    }

    return (
        <>

            <Form onSubmit={handelSubmit} className="d-flex justify-content-center" >
                <fieldset className="w-50 " >
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="name">userName</Form.Label>
                        <Form.Control name="userName" value={formValues.userName} onChange={handelChange} />
                        <p>{formErros.userName}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={formValues.email} onChange={handelChange} />
                        <p>{formErros.email}</p>

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="phone">Phone Number</Form.Label>
                        <Form.Control name="phone" value={formValues.phone} onChange={handelChange} />
                        <p>{formErros.phone}</p>

                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="exampleFormControlTextarea1">Basic textarea</Form.Label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            name="address" value={formValues.address} onChange={handelChange}
                        />
                    </Form.Group>

                    <div className="mt-5 text-center">

                        <Button type="submit" className="w-50">Send Message</Button>
                    </div>

                </fieldset>
            </Form>




        </>
    )
}


export const DemoButtonComponent = () => {
    return (
        <div className="position-relative mt-5 tape ">
            <div className='d-flex  text-white text-center justify-content-center '>
                <p className="text-center para1 mt-2">Looking for live demo? Book your 2hrs live training right now</p>
            </div>
            <div className='d-flex justify-content-center position-absolute demo '>
                <button className='btn  btn-warning rounded-pill border-white border-2'>Get a free live demo</button>

            </div>
        </div>

    )
}

export const VerticalSection = ({ verticalData, verticalData2, webVerticalData }) => {
    return (
        <div className='row text-center m-5 vaertical_section'>
            {verticalData ? <div className='col-md-6  vaertical my-5'>
                <div className='d-flex flex-column align-items-center'>
                    <img src={verticalData.image1} alt="cloud" className='d-block w-25' />
                    <p className='heading'>{verticalData.title}</p>
                    <p className='mini-heading text-center w-75'>{verticalData.content}</p>

                </div>
            </div>
                : verticalData2 ?
                    <div className='col-md-6  vaertical my-5'>
                        <div className='d-flex flex-column align-items-center'>
                            <img src={verticalData2.image1} alt="cloud" className='d-block w-25' />
                            <p className='heading'>{verticalData2.title}</p>
                            <p className='mini-heading text-center w-75'>{verticalData2.content}</p>

                        </div>
                    </div>
                    :
                    <div className='col-md-6  vaertical my-5'>
                        <div className='d-flex flex-column align-items-center'>
                            <img src={webVerticalData[0].image1} alt="cloud" className='d-block w-25' />
                            <p className='heading'>{webVerticalData[0].title}</p>
                            <p className='footer_title text-start '>{webVerticalData[0].content}</p>

                        </div>
                    </div>

            }
            {/* <div className='vr verticalline'></div> */}

            {verticalData ? <div className='col-md-6 my-5'>
                <div className='d-flex flex-column align-items-center'>
                    <img src={verticalData.image2} alt="cloud" className='d-block w-25' />
                    <div>
                        <p className='heading'>{verticalData.title}</p>
                        <p className=' text-center'>{verticalData.content}</p>
                    </div>
                </div>
            </div>

                : verticalData2 ?
                    <div className='col-md-6 my-5'>
                        <div className='d-flex flex-column align-items-center'>
                            <img src={verticalData2.image2} alt="cloud" className='d-block w-25' />
                            <div>
                                <p className='heading'>{verticalData2.title}</p>
                                <p className='mini-heading text-center'>{verticalData2.content}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='col-md-6 my-5'>
                        <div className='d-flex flex-column align-items-center'>
                            <img src={webVerticalData[1].image2} alt="cloud" className='d-block w-25' />
                            <div>
                                <p className='heading'>{webVerticalData[1].title}</p>
                                <p className='footer_title text-start'>{webVerticalData[1].content}</p>
                            </div>
                        </div>
                    </div>

            }

        </div>
    )
}


export const FooterSection = () => {
    return (
        <div className='servicefooter   p-3 background-image1'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='mini-heading-white'>Ready to explore?</p>
                    <p className='para'>Let our team experts walk you through how FireFlink could help you to achieve continuous testing</p>

                </div>

                <div className='col-md-6 text-md-end'>
                    <button className='btn rounded-pill rd mt-4 '>Request a demo</button>
                </div>
            </div>

        </div>
    )
}


export const FooterLinks = () => {

    const footerAry = [
        { title: "Platforms", list: ["Web", "Mobile", "Web Services"] },
        { title: "Insight", list: ["Why Flinko?", "Flinko's objectives", "Our solution stages", "Key benefits"] },
        { title: "Pricing", list: ["Cloud Basic", "Cloud Professional", "On Premises - Enterprise"] },
        { title: "Support", list: ["Contact Us", "Request a demo", "Terms of Use"] },
        { title: "Company Address", list: ["Flinko,Vijayanagram layout,Jaynagar,Bengaluru,karnataka 5600700"] },

    ]
    return (
        <div className='row ps-5'>
            {
                footerAry.map((item, index) => {
                    return (
                        <>

                            <div key={index} className='col-6 col-md-2 p-4'>
                                <ul className=' list-unstyled'>
                                    <li className='footer_title mb-3'>{item.title}</li>
                                    <li className='web_footer'>{item.list.map((item, index) => {
                                        return <>
                                            <li className='cur'>{item}</li>
                                        </>
                                    })}</li>
                                </ul>

                            </div>


                        </>
                    )
                })
            }
        </div>
    )
}



export const AfterNavbar = ({ mainData, webmainData, pricemainData, insightMainData, homeMainData, contactMainData, documentMainData, notesMainData }) => {

    return (
        <div className='row background-image1 main_height'>
            {mainData ? <div className='col-md-6 p-5 mt-5 '>
                <h4 className='heading'>{mainData.title}</h4>
                <h5 className='mini-heading mb-2'>{mainData.subTitle}</h5>
                <p className='heading-paragraph '>{mainData.content}</p>

                <button as={Link} to="#" className='vt btn-width p-2 mt-3 text-center rounded-pill'>
                    Start free trail
                </button>

            </div>
                :
                webmainData ?
                    <div className='col-md-6 p-5 mt-5 '>
                        <h4 className='heading'>{webmainData.title}</h4>
                        <h5 className='mini-heading mb-2'>{webmainData.subTitle}</h5>
                        <p className='heading-paragraph '>{webmainData.content}</p>
                        <button as={Link} to="#" className='vt btn-width p-2 mt-3 text-center rounded-pill'>
                            Start free trail
                        </button>
                    </div>
                    :
                    pricemainData ?
                        <div className='col-md-6 p-5 mt-5 '>
                            <h4 className='heading'>{pricemainData.title}</h4>
                            <h5 className='mini-heading mb-2'>{pricemainData.subTitle}</h5>
                            <p className='heading-paragraph '>{pricemainData.content}</p>
                            <button as={Link} to="#" className='vt btn-width p-2 mt-3 text-center rounded-pill'>
                                Start free trail
                            </button>
                        </div>
                        : insightMainData ?
                            <div className='col-md-6 p-5 mt-5 '>
                                <h4 className='heading'>{insightMainData.title}</h4>
                                <h5 className='mini-heading mb-2'>{insightMainData.subTitle}</h5>
                                <p className='heading-paragraph '>{insightMainData.content}</p>
                                <button as={Link} to="#" className='vt btn-width p-2 mt-3 text-center rounded-pill'>
                                    Start free trail
                                </button>
                            </div>
                            : contactMainData ?
                                <div className='col-md-6 p-5 mt-5 '>
                                    <h4 className='heading'>{contactMainData.title}</h4>
                                    <h5 className='mini-heading mb-2'>{contactMainData.subTitle}</h5>
                                    <p className='heading-paragraph '>{contactMainData.content}</p>
                                    <button as={Link} to="#" className='vt btn-width p-2 mt-3 text-center rounded-pill'>
                                        Start free trail
                                    </button>
                                </div>
                                : homeMainData ?
                                    <div className='col-md-6 p-5 mt-5 '>
                                        <h4 className='heading'>{homeMainData.title}</h4>
                                        <h5 className='mini-heading mb-2'>{homeMainData.subTitle}</h5>
                                        <p className='heading-paragraph '>{homeMainData.content}</p>
                                        <button as={Link} to="#" className='vt btn-width p-2 mt-3 text-center rounded-pill'>
                                            Start free trail
                                        </button>
                                    </div>
                                    : documentMainData ?
                                        <div className='col-md-6 p-5 mt-5 '>
                                            <h4 className='heading'>{documentMainData.title}</h4>
                                            <h5 className='mini-heading mb-2'>{documentMainData.subTitle}</h5>
                                            <p className='heading-paragraph '>{documentMainData.content}</p>
                                            <button as={Link} to="#" className='vt btn-width p-2 mt-3 text-center rounded-pill'>
                                                Start free trail
                                            </button>
                                        </div>
                                        : notesMainData ?
                                            <div className='col-md-6 p-5 mt-5 '>
                                                <h4 className='heading'>{notesMainData.title}</h4>
                                                <h5 className='mini-heading mb-2'>{notesMainData.subTitle}</h5>
                                                <p className='heading-paragraph '>{notesMainData.content}</p>
                                                <button as={Link} to="#" className='vt btn-width p-2 mt-3 text-center rounded-pill'>
                                                    Start free trail
                                                </button>
                                            </div>
                                            :
                                            <div>
                                                <h2>Default Section</h2>
                                            </div>



            }


            {mainData ? <div className='col-md-6 mt-5 mb-2'>
                <img src={mainData.image} alt='mobile' className=' d-block wfirst' />
            </div>
                :
                webmainData ?
                    <div className='col-md-6 mt-5 mb-2'>
                        <img src={webmainData.image} alt='mobile' className=' d-block wfirst' />
                    </div>
                    : pricemainData ?
                        <div className='col-md-6 mt-5 mb-2'>
                            <img src={pricemainData.image} alt='mobile' className=' d-block wfirst' />
                        </div>
                        :
                        insightMainData ?
                            <div className='col-md-6 mt-5 mb-2'>
                                <img src={insightMainData.image} alt='mobile' className=' d-block wfirst' />
                            </div>
                            : contactMainData ?
                                <div className='col-md-6 mt-5 mb-2'>
                                    <img src={contactMainData.image} alt='mobile' className=' d-block wfirst' />
                                </div>
                                : homeMainData ?
                                    <div className='col-md-6 mt-5 mb-2'>
                                        <img src={homeMainData.image} alt='mobile' className=' d-block wfirst' />
                                    </div>
                                    : documentMainData ?
                                        <div className='col-md-6 mt-5 mb-2'>
                                            <img src={documentMainData.image} alt='mobile' className=' d-block wfirst' />
                                        </div>
                                        : notesMainData ?
                                            <div className='col-md-6 mt-5 mb-2'>
                                                <img src={notesMainData.image} alt='mobile' className=' d-block wfirst' />
                                            </div>
                                            :

                                            <div>
                                                <h2>Default View</h2>
                                            </div>


            }

        </div>
    )
}

export const PaperComponent = ({ paperData }) => {


    return (
        <div className="d-flex justify-content-evenly"  >
            <Paper className="w-25 mb-5 shadow">
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
                    <Button className="  w-75" >Get Started</Button>
                </div>
            </Paper>
        </div>
    )
}



export const InsightArrow = ({ color, varient, lable }) => {
    return (
        <Button id="pointer"
            varient={varient ? varient : "contained"}
            color={color ? color : "error"}
        >
            {lable}
        </Button>
    )
}


export const ListComponet = ({ listData }) => {

    return (

        <div className='container mt-5 mb-5 bclr '>
            {
                listData.map((item, index) => {
                    return <>
                        <ul key={index} className="list-unstyled">
                            <li className='heading'> {item.title}</li>
                            <li>{item.list.map((val) => <li >{val}</li>)}</li>
                        </ul>
                    </>
                })
            }
        </div>
    )
}