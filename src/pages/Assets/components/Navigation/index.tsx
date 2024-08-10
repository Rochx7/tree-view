import Button from '../../../../components/Button';
import { useSearchParams } from 'react-router-dom';
import { sanitize } from '../../../../utils/sanitize';
import './styles.css'

interface hashFilterTitle{
  [key: string]: string;
}

const Navigation = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter")
  const getUnitParam: string = searchParams.get("unit") || "apex-unit"

  const handleSelect = (filterOption: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if(filter === sanitize(filterOption)){
      newSearchParams.delete('filter')
      setSearchParams(newSearchParams);
      return 
    }
    newSearchParams.set('filter', sanitize(filterOption) as string)
    setSearchParams(newSearchParams);
  };

  const hashFilterTitle:hashFilterTitle = {
    "apex-unit": "Apex Unit",
    "tobias-unit": "Tobias Unit",
    "jaguar-unit": "Jaguar Unit"
  }

  return (
    <nav className='section-navigation'>
      <div style={{display: "flex", alignItems:"center", gap:"8px"}}>
        <h2>Ativos</h2>
        <h4 style={{color: "var(--gray-text-color)", fontWeight:400}}>/ {hashFilterTitle[getUnitParam]}</h4>
      </div>
      <div style={{display:"flex", gap:"8px"}}>
        <Button title='Sensor de energia' variant='outlined' icon="thunder" isSelected={filter} onClick={()=> handleSelect('Sensor de energia')}/>
        <Button title='Crítico' variant='outlined' icon="alert" isSelected={filter} onClick={()=> handleSelect('Crítico')}/>
      </div>
    </nav>
  )
}

export default Navigation;