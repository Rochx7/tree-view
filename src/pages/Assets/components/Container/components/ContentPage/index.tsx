import InformationDisplay from "./Components/InformationDisplay";
import "./styles.css"
import TreeView from "./Components/TreeView";

const ContentPage = () => {
    return (
      <div className="content-page">
          <TreeView/>
          <InformationDisplay/>
      </div>
    );
 
  };

export default ContentPage;