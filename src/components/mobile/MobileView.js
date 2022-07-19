import React from 'react'
import "../../style/App.scss"
import mobile from '../../assets/services/mobile.png'
import mix from '../../assets/services/mix.png'
import apple from '../../assets/services/apple.png'
import android from '../../assets/services/android.png'
import mobile_web from '../../assets/services/mobile_web.png'
import native from '../../assets/services/native.png'
import macbook1 from '../../assets/services/macbook1.png'
import simulator from '../../assets/services/simulator.png'
import emulator from '../../assets/services/emulator.png'
import image1 from "../../assets/side_1.png";
import image2 from "../../assets/side_2.png";
import image3 from "../../assets/side_3.png";
import image4 from "../../assets/side_4.png";
import SocialMediaLink from '../../molecues/SocialMediaLink'
import { AfterNavbar, DemoButtonComponent, FooterLinks, FooterSection } from '../../molecues/CommonComponents'


const MobileView = () => {
  const ary = [
    { title: "Native App", image: native },
    { title: "Web App", image: mobile_web },
    { title: "mix App", image: mix }

  ] 

  const imgAry = [
    { number: 1, title: "side_1", image: image1 },
    { number: 2, title: "side_2", image: image2 },
    { number: 3, title: "side_3", image: image3 },
    { number: 4, title: "side_4", image: image4 }
  ]


  const mainData = {image:mobile,title:"Flinko- Mobile",subTitle:"Develop your Mobile Scripts with ease",content:"Get on toes with our Web Service testing which drives you unstoppable towards testing the deep Web Service layers in minutes with all intricacies."}

console.log(mainData)
  return (
    <div>
     
     <AfterNavbar mainData={mainData} />

      {/* demo section */}

      <div className='background-image1'>
        <DemoButtonComponent />

        {/* third section */}

        <div className='text-center  mt-5 '>
          <p className='h3 mt-5 mb-5'>Simple solution to Automate</p>

        </div>

        <div className='row mt-5'>
          <div className='col-md-4 d-flex flex-column align-items-center'>
            <img src={native} alt="native" className='mix' />
            <div> <p className='h4 mt-5 mb-5'>Mobile Apps</p></div>

          </div>
          <div className='col-md-4  d-flex  flex-column align-items-center'>
            <img src={mobile_web} alt="native" className='mix' />
            <div> <p className='h4 mt-5 mb-5'>Web Apps</p></div>


          </div>
          <div className='col-md-4  d-flex  flex-column  align-items-center'>
            <img src={mix} alt="native" className='mix2 mix3' />
            <div> <p className='h4 mt-5 mb-5'>Hybrid Apps</p></div>
          </div>
        </div>
      </div>



      {/* Apple  */}

      <div className='row text-center vaertical_section'>
        <div>
          <p className='heading mt-4 mb-4'>Supports Multiple Platforms</p>
        </div>

        <div className='col-md-6 d-flex justify-content-center justify-content-md-center mb-5'>
          <img src={apple} alt="apple" className='d-block w-25' />
        </div>

        <div className='col-md-6 d-flex justify-content-center justify-content-md-center  mb-5'>
          <img src={android} alt="android" className='d-block w-25 ' />
        </div>

      </div>

      {/* goli */}

      <div className='d-flex justify-content-between p-5'>
        <div className='w-50'>
          <p className='h4'>Run your mobile scripts</p>
          <p className='mini-mob  text-start mt-2'>FireFlink supports executing your mobile scripts on multiple cloud platforms</p>
        </div>

        <div className='w-50 d-flex'>
          {
            imgAry.map((item, index) => {
              return (
                <div key={index} className=''>
                  <img src={item.image} alt="image" className=' d-inline-block w-50' />
                </div>
              )
            })
          }
        </div>

      </div>



      {/* vertical sction */}

      <div className='row text-center m-5 vaertical_section'>

        <p className='heading-mobile text-center mt-4'>Supports Various Virtual Devices</p>

        <div className='col-md-6  vaertical my-5'>
          <div className='d-flex flex-column align-items-center'>
            <img src={simulator} alt="simulator" className='d-block w-25' />
            <p className='heading mt-3'>Simulators</p>
            <p className='mini-heading-mobile text-center w-75'>Run mobile test scripts on Simulators. A simulator creates an environment that mimics the behavior and configurations of a real device.</p>

          </div>
        </div>
        {/* <div className='vr verticalline'></div> */}

        <div className='col-md-6 my-5'>
          <div className='d-flex flex-column align-items-center'>
            <img src={emulator} alt="emulator" className='d-block w-25' />
            <div>
              <p className='mt-3 heading'>Emulators</p>
              <p className='mini-heading-mobile text-center '>Run mobile test scripts on Emulators. An emulator duplicates all the hardware and software features of a real device</p>
            </div>
          </div>
        </div>



      </div>



      {/* macbook section */}

      <div className=' row text-center mt-5'>
        <div className='col-md-6'>
          <img src={macbook1} alt="mackbook1" className='mac' />
        </div>
        <div className='col-md-6 p-5 text-start'>

          <p className='h4 text-center visible'>Execute your automated mobile app tests faster than ever</p>
          <p>Create your Web Service automated test cases quickly with natural language-based test step creation that enables you to formulate test steps using simple English statements.</p>
          <p>Test Data Management, and Reusable Step Groups will help you speed up automating tests.</p>
        </div>
      </div>

      {/* second mack */}
      <div className=' row text-center mt-5'>
        <div className='col-md-6 p-5 text-start'>

          <p className='h4 text-start visible'>Execute your automated mobile app tests parallely to reduce time</p>
          <p>Your mobile test cases can be executed concurrently on multiple devices thereby reducing the execution time in the order of the number of test environments configured for execution. </p>
          <p>Faster execution helps find bugs at the earliest so that you don't have to wait longer to start user acceptance testing after the build(RC) is available. </p>
        </div>
        <div className='col-md-6'>
          <img src={macbook1} alt="mackbook1" className='mac' />
        </div>

      </div>


      <FooterSection /> 
      <FooterLinks />
      <SocialMediaLink />


    </div>
  )
}

export default MobileView