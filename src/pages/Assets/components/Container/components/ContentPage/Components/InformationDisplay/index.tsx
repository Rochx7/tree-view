
import "./styles.css"
import MyImage from '../../../../../../../../assets/img1.png'
const InformationDisplay = () => {
    return (
      <div className="info-display-content">
        <h1>Teste</h1>
        <div style={{width:"100%", height:"1px", backgroundColor:"var(--gray-border-color)"}}/>
        <div className="info-content">
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", height:"100%"}}>
            <div style={{width:"336px", height:"226px", border:"1px solid var(--gray-border-color)"}}>
              <img src={MyImage}/>
            </div>
              <div>
                <div>
                  <h4>Tipo de equipamento</h4>
                  <h4>Motor Eletrico "(Trifasico)"</h4>
                </div>
                <div style={{width:"100%", height:"1px", backgroundColor:"var(--gray-border-color)"}}/>
                <div>
                  <h4>Responsaveis</h4>
                  <h4>E  Eletrica</h4>
                </div>
              </div>
          </div>
          
          <div>
          </div>
        </div>
      </div>
    );
 
  };

export default InformationDisplay;