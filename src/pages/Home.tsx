import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Landing from "../components/Landing"

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
   
     <Landing/>
  
    </IonPage>
  );
};

export default Home;
