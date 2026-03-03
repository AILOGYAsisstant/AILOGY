import TopNavbar from './components/TopNavbar';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen6 from './pages/Screen6';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased transition-colors duration-300">
      <TopNavbar />
      <main className="flex-1 w-full relative pt-20">
        <section id="executive-summary">
          <Screen1 />
        </section>

        <section id="market-platform">
          <Screen2 />
        </section>

        <section id="products-traction">
          <Screen6 />
        </section>

        <section id="strategy-financials">
          <Screen3 />
        </section>

        <section id="team-ask">
          <Screen4 />
        </section>
      </main>
    </div>
  );
}

export default App;
