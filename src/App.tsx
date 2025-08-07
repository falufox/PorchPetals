import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { OrderPage } from './pages/OrderPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { HouseplantDetailPage } from './pages/HouseplantDetailPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen relative">
          {/* Decorative background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lavender-200/20 to-petal-200/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sage-200/20 to-kraft-200/20 rounded-full blur-lg animate-sway"></div>
            <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-rosewood-200/20 to-lavender-200/20 rounded-full blur-lg animate-gentle-bounce"></div>
          </div>
          
          <Header />
          <main className="container mx-auto px-4 py-8 relative z-10">
            <div className="animate-fade-in">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/houseplant/:id" element={<HouseplantDetailPage />} />
              </Routes>
            </div>
          </main>
          
          {/* Subtle botanical decorations */}
          <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none">
            <div className="absolute bottom-0 left-10 text-6xl text-sage-300/20 animate-sway">🌿</div>
            <div className="absolute bottom-0 right-16 text-4xl text-petal-300/20 animate-float">🌸</div>
            <div className="absolute bottom-0 left-1/3 text-5xl text-kraft-400/20 animate-gentle-bounce">🍃</div>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
