import React from 'react';
import './styles.css'
import LogoTratian from "../../../../assets/logoTractian.svg"
import Button from '../../../../components/Button';
import { useSearchParams } from 'react-router-dom';
import { sanitize } from '../../../../utils/sanitize';

const Header: React.FC = () => {
const [searchParams, setSearchParams] = useSearchParams();
const unit = searchParams.get("unit")

const handleSelect = (unitOption: string) => {
  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.set('unit', sanitize(unitOption))
  setSearchParams(newSearchParams);
};

  return (
    <header className='main-header'>
        <img src={LogoTratian} alt="Logo da Tractian" />
      <div className='buttons-container'>
        <Button title="Apex Unit" isSelected={unit} onClick={()=> handleSelect("Apex Unit")}/>
        <Button title="Tobias Unit" isSelected={unit} onClick={()=> handleSelect("Tobias Unit")}/>
        <Button title="Jaguar Unit" isSelected={unit} onClick={()=> handleSelect("Jaguar Unit")}/>
      </div>
    </header>
  )
}

export default Header;