import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Main />
          <Footer />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
