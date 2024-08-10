import ContentPage from './components/ContentPage';
import Navigation from './components/Navigation';
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