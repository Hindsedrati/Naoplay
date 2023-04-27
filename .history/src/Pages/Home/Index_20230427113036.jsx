import './Home.scss';
import Const from '../../Components/Const/index'
import Naoplay from '../../Components/Naoplay/index'
import Partners from '../../Components/Partners/index'
import Api from '../../Components/Api/index'
import Digitalisation from '../../Components/Digitalisation/index';
import Gateway from '../../Components/Gateway/index';
import Management from '../../Components/Management/index';
import ApiManagement from '../../Components/ApiManagement/index';
import Proxisation from '../../Components/Proxisation/index';
import Mentorat from '../../Components/Mentorat/index';

function Home() {
  return (
    <main>
      <Const />
      <Naoplay />
      <Partners />
      <Api />  
      <Digitalisation />
      <Gateway />
      <Management />
      <ApiManagement />
      <Proxisation />
      <Mentorat />
    </main>
  );
}

export default Home;
