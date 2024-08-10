import InformationDisplay from "../InformationDisplay";
import TreeView from "../TreeView";
import "./styles.css"

const ContentPage = () => {
    return (
      <div className="content-page">
        <TreeView/>
        <InformationDisplay/>
      </div>
    );
 
  };

export default ContentPage;