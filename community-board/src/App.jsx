import './App.css';
import Container from './components/Container';

const App = () => {
  return(
    <div className="App">
      <div className="Header"> 
        <img src="/img/CoverTopImage.png" width="500" />
        <h1>GamerNet: Your Local Gaming Community Board</h1>
      </div>
      <Container />
    </div>
  )
}

export default App;  