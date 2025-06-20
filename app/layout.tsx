import Footer from './components/Footer';
import Header from './components/Header';
import Client from './components/Client';

const RootLayer = ({ children }: any) => {
  return (<html>
    <body>
    <Header/>
      <main>{children}</main>  
    <Client/>
    <Footer/>
    </body>
  </html>) 

//Main represent page  file


} 

export default RootLayer;