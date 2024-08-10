import React from 'react';
import './styles.css'
import LogoTratian from "../../../../assets/logoTractian.svg"
import Button from '../../../../components/Button';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const Header: React.FC = () => {
const navigate = useNavigate();
const [searchParams] = useSearchParams();
const unit = searchParams.get("unit")

const handleSelect = (unit: string) => {
  navigate(`/?unit=${unit.toLowerCase().replace(' ', '-')}`);
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