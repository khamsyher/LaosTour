import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './components/About/AboutPage';
import ServicePage from './components/Service/ServicePage';
import Blog from './components/Blog';
import Contact from './components/Contact';
import DestinationPage from './components/Destiantion/DestinationPage';
import PackagePage from './components/Package/PackagePage';
import Phongsali from './components/Phongsali/phongsalipage';
import Luangnamtha from './components/Luangnamtha/luangnamtha';
import Attapeu from './components/attapeu/attapeupage';
import Bokeo from './components/Bokeo/bokeopage';
import Oudomxay from './components/Oudomxay/oudomxaypage'
import Luangprabng from './components/Luangprabang/luangprabangpage';
import Huaphan from './components/Huaphan/huaphanpage';
import Xiangkhoang from './components/Xiangkhoang/xiangkhoangpage'
import Xayabouli from './components/Xayabouli/xayaboulipage'
import Viengchan from './components/Viengchan/viengchanpage'
import Xasomboun from './components/Xaysomboun/xaysombounpage'
import Vietiane from './components/Vietianecapital/vietianecapitalpage'
import Boulikhamsai from './components/Boulikhamsai/boulikhamsaipage'
import Khammouane from './components/Khammouane/khammouanepage'
import Savannakhet from './components/Savannakhet/savannakhetpage'
import Salavan from './components/Salavan/salavanpage'
import Sekong from './components/Sekong/sekongpage'
import Chanpasak from './components/Chanpasak/chanpasakpage'
import Hotel from './components/Hotel/hotelpage'
import Ticket from './components/Ticket/ticketpage'
import Guide from './components/Guide/guidepage'
import Aboutimage from './components/AboutImage/aboutimagepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="service" element={<ServicePage/>} />
          <Route path='destination' element={<DestinationPage/>}/>
          <Route path='packagepage' element={<PackagePage/>}/>
          <Route path='phongsaliplaces' element={<Phongsali/>}/>
          <Route path='place' element={<Luangnamtha/>}/>
          <Route path='attapeuplaces' element={<Attapeu/>}/>
          <Route path='bokeoplaces' element={<Bokeo/>}/>
          <Route path='oudomxayplaces' element={<Oudomxay/>}/>
          <Route path='luangprabangplaces' element={<Luangprabng/>}/>
          <Route path='huaphanplaces' element={<Huaphan/>}/>
          <Route path='xiangkhoangplaces' element={<Xiangkhoang/>}/>
          <Route path='xayabouliplaces' element={<Xayabouli/>}/>
          <Route path='viengchanplaces' element={<Viengchan/>}/>
          <Route path='xaysombounplaces' element={<Xasomboun/>}/>
          <Route path='vietianecapitalplaces' element={<Vietiane/>}/>
          <Route path='boulikhamsaiplaces' element={<Boulikhamsai/>}/>
          <Route path='khammouaneplaces' element={<Khammouane/>}/>
          <Route path='savannakhetplaces' element={<Savannakhet/>}/>
          <Route path='salavanplaces' element={<Salavan/>}/>
          <Route path='sekongplaces' element={<Sekong/>}/>
          <Route path='chanpasakplaces' element={<Chanpasak/>}/>
          <Route path='hotelplaces' element={<Hotel/>}/>
          <Route path='tickettype' element={<Ticket/>}/>
          <Route path='guidepeople' element={<Guide/>}/>
          <Route path='aboutimage' element={<Aboutimage/>}/>
          <Route>
            <Route path='blog' element={<Blog/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='blog' element={<Blog/>}/>
          </Route>
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
