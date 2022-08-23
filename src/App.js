import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';

// Components
import Nav from './components/Nav';

// Pages
import Dashboard from './pages/Dashboard';
import TicketPage from './pages/TicketPage';

// Context
import CategoriesContext from './CategoriesContext';
import axios from 'axios';

function App() {

  const [ categories, setCategories ] = useState(null);

  // Fetching categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      const tickets = await axios.get(`${process.env.REACT_APP_BACKEND}/tickets`)
      
      const dataObject = tickets.data.data;

      const categoriesArray = Object.values(dataObject).map((ticket) => ticket.category);

      const categoriesSet = [ ...new Set(categoriesArray)];

      setCategories(categoriesSet);
    }

    fetchCategories();
  },[])

  return (
    <div className="app">
      <CategoriesContext.Provider value={{categories, setCategories}}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/ticket' element={<TicketPage />} />
            <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
