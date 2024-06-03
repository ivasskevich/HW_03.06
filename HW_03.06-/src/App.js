
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Novinku, Action, Tovarivnaivnosti, Dostavkaioplata, Forum, Pronas, NotFound } from './components/Task1'
import { MainPage } from './components/Task2';
import { MainPage2 } from './components/Task3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} >
          {/* <Route path="/" element={<MainPage2 />} > */}
          {/*компонент использует навигацию!*/}
          <Route index element={<Novinku />} />
          <Route path="news" element={<Novinku />} />
          <Route path="promotions" element={<Action />} />
          <Route path="goodsInStock" element={<Tovarivnaivnosti />} />
          <Route path="deliveryAndPayment" element={<Dostavkaioplata />} />
          <Route path="forums" element={<Forum />} />
          <Route path="aboutUs" element={<Pronas />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;