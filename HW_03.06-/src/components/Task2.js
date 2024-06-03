import { Link, Outlet } from 'react-router-dom';
import './Task2-style.css';

export const MainPage = () => (
  <>
    <nav>
      <ul className='nav-list'>
        <li>
          <Link to="/news" className='nav-link'>Новинки</Link>
        </li>
        <li>
          <Link to="/promotions" className='nav-link'>Акції</Link>
        </li>
        <li>
          <Link to="/goodsInStock" className='nav-link'>Товари в наявності</Link>
        </li>
        <li>
          <Link to="/deliveryAndPayment" className='nav-link'>Доставка і оплата</Link>
        </li>
        <li>
          <Link to="/forums" className='nav-link'>Форуми</Link>
        </li>
        <li>
          <Link to="/aboutUs" className='nav-link'>Про нас</Link>
        </li>
        <li>
          <select id="language" name="language">
            <option value="uk">Українська</option>
            <option value="en">English</option>
          </select>
        </li>
      </ul>
    </nav>
    <hr />

    <Outlet />
  </>

);