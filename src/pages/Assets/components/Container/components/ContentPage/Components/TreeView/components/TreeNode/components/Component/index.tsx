import { useSearchParams } from "react-router-dom";
import BoltIcon from "../../../../../../../../../../../../assets/Bolt";
import ComponentIcon from "../../../../../../../../../../../../assets/Component";
import "./style.css"


const Component = ({node}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const component = searchParams.get("component")
  const isSelected = component === node.id

  const handleSelect = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if(isSelected){
      newSearchParams.delete('component')
      setSearchParams(newSearchParams);
      return 
    }
    newSearchParams.set('component', node.id)
    setSearchParams(newSearchParams);
  };

  const renderCurrentIcon = () => {
    if(node.sensorType === "energy"){
      return <BoltIcon isEnergy={node.status === "operating"}/>
    }
    if(node.status){
      return <div className={`component-icon ${node.status === "operating" ? "operating" : "alert"}`}/>
    }
  }
  
  return (
    <div className={`component-node ${isSelected && "is-select"}`}onClick={handleSelect}>
      <ComponentIcon isSelected={isSelected}/>
      <p>{node.name}</p>
      {renderCurrentIcon()}
    </div>
  )
}

export default Component;