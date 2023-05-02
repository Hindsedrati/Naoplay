import './Home.scss';
import Const from '../../Components/Const/index'
import Naoplay from '../../Components/Naoplay/index'
import Api from '../../Components/Api/index'
import Digitalisation from '../../Components/Digitalisation/index';
import Gateway from '../../Components/Gateway/index';
import Management from '../../Components/Management/index';
import Proxisation from '../../Components/Proxisation/index';
import Mentorat from '../../Components/Mentorat/index';

function Home() {
  return (
    <main className='app-container'>
      <Const />
      <Naoplay />
      <Api />  
      <Digitalisation />
      <Gateway />
      <Management />
      <Proxisation />
      <Mentorat />
    </main>
  );
}

export default Home;
