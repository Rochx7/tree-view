import Navigation from '../Navigation';
import ContentPage from './components/ContentPage';
import './styles.css'

const Container = () => {
  return (
    <section className='section-container'>
        <Navigation/>
        <ContentPage/>
    </section>
  )
}

export default Container;