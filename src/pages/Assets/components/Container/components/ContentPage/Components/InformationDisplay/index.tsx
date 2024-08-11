import EquipmentType from "./components/EquipmentType";
import SensorInfo from "./components/SensorInfo";
import "./styles.css"
import useFormattedData from "../../../../../../../../hooks";
import BoltIcon from "../../../../../../../../assets/Bolt";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TreeNode } from "../../../../../../../../types";

const InformationDisplay = () => {
  const [currentComponent, setCurrentComponent] = useState({name:"", status:"", sensorType:""})
  const [searchParams] = useSearchParams();
  const component = searchParams.get("component") || ""
 const {  formattedData,findComponent } = useFormattedData() 

useEffect(()=>{
  if(formattedData.length){
    const getComponent: TreeNode | undefined = findComponent(formattedData, component)
    if(getComponent){
      setCurrentComponent(getComponent)
    }
  }
},[component, formattedData])

  const renderCurrentIcon = () => {
    if(currentComponent.sensorType === "energy"){
      return <BoltIcon isEnergy={currentComponent.status === "operating"}/>
    }
    if(currentComponent.status){
      return <div className={`component-icon ${currentComponent.status === "operating" ? "operating" : "alert"}`}/>
    }
  }

    return (
      <section className="info-display-content">
        <div className="info-header">
        <h2>{ currentComponent.name || ""}</h2>
          {renderCurrentIcon()}
        </div>
        <div style={{width:"100%", height:"1px", backgroundColor:"var(--gray-border-color)"}}/>
          <div className="info-content">
              <EquipmentType/>
              <SensorInfo/>
          </div>
      </section>
    );
 
  };

export default InformationDisplay;