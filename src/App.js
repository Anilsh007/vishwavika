import './App.css';
import SiteFooter from './layout/SiteFooter';
import SiteHeader from './layout/SiteHeader';

function App() {
  return (
    <div className="App">
      <SiteHeader />       
      <main className='mainBody'>
        <h1>main Body</h1>
      </main>
      <SiteFooter/>
    </div>
  );
}

export default App;
