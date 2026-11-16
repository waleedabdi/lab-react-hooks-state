import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.darkMode : ''}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode((currentMode) => !currentMode)}
      />

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        onAddToCart={(product) =>
          setCartItems((currentItems) => [...currentItems, product])
        }
      />

      <Cart items={cartItems} />
    </div>
  )
}

export default App
