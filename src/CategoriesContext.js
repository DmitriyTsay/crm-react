import axios from 'axios';
import { createContext } from 'react';

const CategoriesContext = createContext({
    categories: null,
    setCategories: () => {},
});

export default CategoriesContext;