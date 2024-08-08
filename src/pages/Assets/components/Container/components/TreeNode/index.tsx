import { useState } from "react";
import "./styles.css"

const TreeNode = ({ node }) => {
  
  const [open, setOpen] = useState(true)
  
  function toggle(){
    setOpen((prevState) => !prevState)
  }
  
    return (
      <div>
        <div style={{display:"flex", gap:"8px"}}> 
          {node.children?.length > 0 && (<div style={{ cursor: "pointer"}} onClick={toggle}> {" > "} </div>)} {node.name} 
        </div>
        <div className="tree-node">
        {open && node.children.map((child) => (
              <TreeNode key={child.id} node={child} />
            ))}
      </div>
        </div>
    );
 
  };

export default TreeNode;