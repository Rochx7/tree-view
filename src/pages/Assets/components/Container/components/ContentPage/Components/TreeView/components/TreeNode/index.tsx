import { useState } from "react";
import Arrow from "../../../../../../../../../../assets/Arrow.svg"
import "./styles.css"
import Component from "./components/Component";
import ItemList from "./components/ItemList";
import { Asset, Location } from "../../../../../../../../../../types";

const TreeNode = ({ node }:{node:Asset | Location}) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = node?.children?.length > 0;

  const onToggle = () =>{
    setIsOpen((prevState) => !prevState)
  }

  const hashRender = {
    location: () => <ItemList node={node} nodeIcon="location"/>,
    asset: () => <ItemList node={node} nodeIcon="asset"/>,
    component: () => <Component node={node}/>,
  };

  const renderOption = () => {
    if(node.isLocation ){
      return "location"
    }
    if(node.locationId && hasChildren || node.parentId && hasChildren){
      return "asset"
    }
    return "component"
  }

    return (
      <div>
        <div style={{display:"flex", gap:"8px", fontSize:"14px", color:"var(--blue-text-color)"}}> 
          {hasChildren && <img src={Arrow} alt="" onClick={onToggle} style={{ cursor: "pointer", transition: "0.2s", ...(!isOpen && { transform: "rotate(-90deg)" }),}}/>}
          {hashRender[renderOption()]()}
        </div>
        <div className="tree-node">
          {isOpen && node.children.map((child) => (
                <TreeNode key={child.id} node={child} />
              ))}
        </div>
      </div>
    );
 
  };

export default TreeNode;