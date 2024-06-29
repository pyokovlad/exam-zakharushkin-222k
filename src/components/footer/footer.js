import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <h2>Контакты для связи</h2>
        <p>Телефон: +7-123-456-78-90</p>
        <p>Email: medved@example.com</p>
        <p>Адрес: г. Санкт-Петербург, Медведовская улица 14</p>
      </div>
      <div className="copyRight">
        <p>&copy; 2024 MedVed. Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;