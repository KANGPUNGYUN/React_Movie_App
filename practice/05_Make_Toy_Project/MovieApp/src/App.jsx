// BrowserRouter는 일반적으로 사용하는 url로 설정해줍니다. HashRouter는 이동할 url사이에 #이 붙어서 설정됩니다.
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

import Home from './routes/Home'
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movie/:id" element={<Detail />}/>
    </Routes>
  </Router>;
}
export default App;
