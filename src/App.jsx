import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-br from-[#0470a5] to-[#24b24c] text-white text-center text-lg font-semibold p-4">
        <h1>Randi Budi Prananda</h1>
      </header>
      <main className="flex-grow">
        <Home />
      </main>
      <footer className="bg-[#222222] text-white text-center p-2">
        <p>Tuesday, 15 October 2024</p>
      </footer>
    </div>
  );
};

export default App;
