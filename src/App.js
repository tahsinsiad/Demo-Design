import Header from './components/Header';
import './style.css';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
function App() {
  return (
    <>
      <div
        style={{
          width: '100%',
          position: 'fixed',
          marginBottom: '120px',
          zIndex: '99999999',
        }}
      >
        <Header />
      </div>
      <div style={{ position: 'relative' }}>
        <Test2 />
      </div>
      <div style={{ position: 'relative' }}>
        <Test />
      </div>
      <div style={{ position: 'relative' }}>
        <Test3 />
      </div>
      <div style={{ position: 'relative' }}>
        <Test4 />
      </div>
      <div style={{ position: 'relative' }}>
        <Test5 />
      </div>
    </>
  );
}

export default App;
