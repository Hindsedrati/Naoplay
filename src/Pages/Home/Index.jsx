import './Home.scss';
import Const from '../../Components/Const/index'
import Naoplay from '../../Components/Naoplay/index'
import Partenrs from '../../Components/Parteners/index'
import Api from '../../Components/Api/index'
import Digitalisation from '../../Components/Digitalisation/index';
import Management from '../../Components/Management/index';
import Proxisation from '../../Components/Proxisation/index';
import Mentorat from '../../Components/Mentorat/index';
function Home() {
  return (
    <main>
      <Const />
      <Naoplay />
      <Partenrs />
      <Api />
      <Digitalisation />
      <Management />
      <Proxisation />
      <Mentorat />
    </main>
  );
}

export default Home;
