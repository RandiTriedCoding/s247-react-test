import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white text-center p-4">
        <h1>Randi Budi Prananda</h1>
      </header>
      <main className="flex-grow">
        <Home />
      </main>
      <footer className="bg-gray-700 text-white text-center p-2">
        <p>Tuesday, 15 October 2024</p>
      </footer>
    </div>
  );
};

export default App;
