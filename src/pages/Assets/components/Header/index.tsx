import React, { useState } from 'react';
import './styles.css'
import LogoTratian from "../../../../assets/logoTractian.svg"
import Button from '../../../../components/Button';

const Header: React.FC = () => {
  const [unitSelected, setUnitSelected] = useState("Apex Unit")

const handleSelect = (value:string) =>{
  setUnitSelected(value)
}

  return (
    <header className='main-header'>
        <img src={LogoTratian} alt="Logo da Tractian" />
      <div className='buttons-container'>
        <Button title="Apex Unit" isSelected={unitSelected} onClick={()=> handleSelect("Apex Unit")}/>
        <Button title="Tobias Unit" isSelected={unitSelected} onClick={()=> handleSelect("Tobias Unit")}/>
        <Button title="Jaguar Unit" isSelected={unitSelected} onClick={()=> handleSelect("Jaguar Unit")}/>
      </div>
    </header>
  )
}

export default Header;