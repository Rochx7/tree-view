import Button from '../../../../components/Button';
import './styles.css'

const Navigation = () => {
  return (
    <nav className='section-navigation'>
      <div>
        <h1>Ativos / Apex Unit</h1>
      </div>
      <div style={{display:"flex", gap:"8px"}}>
        <Button title='Sensor de energia' variant='outlined' icon="thunder"/>
        <Button title='Crítico' variant='outlined' icon="alert"/>
      </div>
    </nav>
  )
}

export default Navigation;