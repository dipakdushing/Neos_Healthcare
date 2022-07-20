import "./App.css";
import { Navbar } from "./component/global/navbar/Navbar";
import { AllRoutes } from "./routes/Routes";
// import loadImage from "./assets/loading.svg";

function App() {
  // const loading = useSelector((state) => state.loading.isLoading);
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
