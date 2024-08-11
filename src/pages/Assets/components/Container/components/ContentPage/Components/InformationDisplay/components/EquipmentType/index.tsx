import MyImage from '../../../../../../../../../../assets/img1.png'
const EquipmentType = () => {
  return (
    <div style={{display:"flex", justifyContent:"flex-start", gap:"24px"}}>
      <div style={{width:"450px", border:"1px solid var(--gray-border-color)"}}>
        <img src={MyImage} style={{width:"450px"}}/>
      </div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center", width:"100%", gap:"24px"}}>
          <div style={{display:"flex", flexDirection:"column", gap:"8px" }}>
            <h4>Tipo de equipamento</h4>
            <h4 style={{color:"var(--gray-text-color)", fontWeight:400}}>Motor Elétrico (Trifásico)</h4>
          </div>
          <div style={{width:"100%", height:"1px", backgroundColor:"var(--gray-border-color)"}}/>
          <div style={{display:"flex", flexDirection:"column", gap:"8px" }}>
            <h4>Responsaveis</h4>
            <h4 style={{color:"var(--gray-text-color)", fontWeight:400}}><span>E</span> Elétrica</h4>
          </div>
        </div>
    </div>
  )
}

export default EquipmentType;