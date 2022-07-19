import { Route, Routes } from 'react-router-dom';
import Blog from './components/blog/Blog';
import Header from './components/Home/Home';
import DemoRequest from './components/demo/DemoRequest'
import NavBar from './components/navbar/NavBar';
import WebServices from './components/web-services/WebServices';
import MobileView from './components/mobile/MobileView';
import Pricing from './components/pricing/Pricing';
import Insight from './components/insight/Insight';
import Web from './components/web/Web';
import ContactUs from './components/contact/ContactUs';
import Documents from './components/resources/Documents';
import ReleaseNotes from './components/resources/ReleaseNotes';

function App() {
  return (
   <div style={{overflowX:"hidden"}}>
<NavBar/>
   
   <Routes>
    <Route path='/'  element={<Web/>} />
    <Route path='/webservices'  element={<WebServices/>} />
    <Route path='/mobile'  element={<MobileView/>} />
    <Route path='/price'  element={<Pricing/>} />
    <Route path='/insight'  element={<Insight/>} />
    <Route path='/contact'  element={<ContactUs/>} />
    <Route path='/document'  element={<Documents/>} />
    <Route path='/notes'  element={<ReleaseNotes/>} />

   </Routes>

   </div>
  );
}

export default App;
