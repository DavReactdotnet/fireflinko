import React from 'react'
import "../../style/App.scss"
import doc1 from '../../assets/document/doc1.png'
import { BiLeftArrowAlt } from "react-icons/bi";


import SocialMediaLink from '../../molecues/SocialMediaLink'
import { AfterNavbar, DemoButtonComponent, FooterLinks, FooterSection, PaperComponent } from '../../molecues/CommonComponents'
import { Button, Input, Paper, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Documents = () => {

    const documentMainData = { image: doc1, title: "Documents", subTitle: "Explore FireFlink !", content: "Here you'll get the information to ensure an easy and effective way to automate the applications with FireFlink." }
    const navigate = useNavigate()


    return (
        <div>

            <AfterNavbar documentMainData={documentMainData} />

            <div className='background-image1'>
                <DemoButtonComponent />

                <div className='d-flex justify-content-center mt-5  mt-5 position-relative'>
                    <div>
                        <p className='mini-heading text-center border-bottom border-primary'>Documents</p>
                    </div>
                    <input type="text" placeholder='Search here' className='rounded-pill position-absolute search_btn' />
                </div>

                {/* paper */}
                <div className='d-flex justify-content-end'>
                    <Paper elevation={2} className=" ms-5 me-5 mt-5 mb-5 w-75 main_height shadow" />

                </div>

                <div className='d-flex justify-content-end mb-5 '>

                    <Button startIcon={<BiLeftArrowAlt />} variant='text' className=' pe-5 btn_style ' onClick={() => navigate(-1)}>Back to Main Page</Button>

                </div>



            </div>






            <FooterSection />
            <FooterLinks />
            <SocialMediaLink />


        </div>
    )
}

export default Documents