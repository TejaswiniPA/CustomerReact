import Header from './components/Header';
import Footer from './components/Footer';
import CustomerList from './components/CustomerList.js';

function App() {
    return (
        <>
            <Header />
            <div className='container mh-650'>

              <CustomerList />

            </div>

            <Footer />
        </>
    );
}

export default App;
