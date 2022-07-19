import React from 'react'
import "../../style/App.scss"
import note from '../../assets/notes/note1.png'
import { BiLeftArrowAlt } from "react-icons/bi";
import SocialMediaLink from '../../molecues/SocialMediaLink'
import { AfterNavbar, DemoButtonComponent, FooterLinks, FooterSection, PaperComponent } from '../../molecues/CommonComponents'
import { Button, Input, Paper, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ReleaseNotes = () => {

    const notesMainData = { image: note, title: "Release Notes", subTitle: "Get Updated ", content: "Here are the Latest Features, Bug Fixes and enhancements in recent releases." }
const navigate = useNavigate()


    return (
        <div>

            <AfterNavbar notesMainData={notesMainData} />

            <div className='background-image1'>
                <DemoButtonComponent />

                <div className='d-flex justify-content-center mt-5  mt-5 position-relative'>
                    <div>
                        <p className='mini-heading text-center border-bottom border-primary'> Release Notes</p>
                    </div>
                    <input type="text" placeholder='Search here' className='rounded-pill position-absolute search_btn' />

                </div>

                {/* paper */}
                <div className='d-flex justify-content-end'>
                    <Paper elevation={2} className=" ms-5 me-5 mt-5 mb-5 w-75 main_height shadow" />

                </div>

                <div className='d-flex justify-content-end mb-5 '>

                <Button startIcon={<BiLeftArrowAlt/>}  className=' pe-5 btn_style' onClick={()=>navigate(-1)}>Back to Main Page</Button>

                </div>



            </div>






            <FooterSection />
            <FooterLinks />
            <SocialMediaLink />


        </div>
    )
}

export default ReleaseNotes