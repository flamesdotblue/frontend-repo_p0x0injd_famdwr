import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Auth />
      </main>
      <Footer />
    </div>
  );
}

export default App;
