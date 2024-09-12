import { useContext } from "react";
import "./App.scss";
import MyRoutes from "./routes/MyRoutes";
import Resolution from "./pages/errors/resolution/resolution";
import WidthContext from "./context/widthContext";

function App() {
    const { width } = useContext(WidthContext);
    return width >= 320 ? <MyRoutes /> : <Resolution />;
}

export default App;
