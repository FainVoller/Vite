import { useState, useEffect } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

// Функция получения данных 
const fetchProducts = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=8');
  if (!res.ok) throw new Error('Failed to fetch');
  const data = await res.json();
  return data.products;
};

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app-container">
      {/* === СЕКЦИЯ HERO === */}
      <header id="center" className="hero-section">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Hero" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div className="intro-text">
          <h1>Welcome to the Store</h1>
          <p>Click the counter and check out our products below.</p>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((c) => c + 1)}
          >
            Count is {count}
          </button>
        </div>
      </header>

      {/* === РАЗДЕЛИТЕЛЬ === */}
      <div className="ticks"></div>

      {/* === ПРОДУКТЫ === */}
      <section id="products">
        <h2>Our Products</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="product-image" 
                />
                <h3>{product.title}</h3>
                <p className="brand">{product.brand}</p>
                <p className="price">${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>

     
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={viteLogo} alt="Vite" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <img className="button-icon" src={reactLogo} alt="React" />
                Learn React
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  );
}

export default App;