import { useNavigate } from 'react-router';
import Button from '../../../../components/Button';
import './styles.css'
import { useSearchParams } from 'react-router-dom';
import { sanitize } from '../../../../utils/sanitize';

const Navigation = () => {
  const navigate = useNavigate();
  const [searchParams,setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter")
  
  const handleSelect = (filterOption: string) => {
    if(filter === sanitize(filterOption)){
      searchParams.delete('filter')
      setSearchParams(searchParams);
      return 
    }
    navigate(`/?filter=${sanitize(filterOption)}`);
  };

  return (
    <nav className='section-navigation'>
      <div style={{display: "flex", alignItems:"center", gap:"8px"}}>
        <h2>Ativos</h2>
        <h4 style={{color: "var(--gray-text-color)", fontWeight:400}}>/ Apex Unit</h4>
      </div>
      <div style={{display:"flex", gap:"8px"}}>
        <Button title='Sensor de energia' variant='outlined' icon="thunder" isSelected={filter} onClick={()=> handleSelect('Sensor de energia')}/>
        <Button title='Crítico' variant='outlined' icon="alert" isSelected={filter} onClick={()=> handleSelect('Crítico')}/>
      </div>
    </nav>
  )
}

export default Navigation;