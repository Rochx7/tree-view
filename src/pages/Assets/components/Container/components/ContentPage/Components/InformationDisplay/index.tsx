import EquipmentType from "./components/EquipmentType";
import SensorInfo from "./components/SensorInfo";
import "./styles.css"

const InformationDisplay = () => {
    return (
      <section className="info-display-content">
        <h1>Teste</h1>
        <div style={{width:"100%", height:"1px", backgroundColor:"var(--gray-border-color)"}}/>
          <div className="info-content">
              <EquipmentType/>
              <SensorInfo/>
          </div>
      </section>
    );
 
  };

export default InformationDisplay;