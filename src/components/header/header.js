import React from 'react';
import './header.css';
import logo from '/workspaces/exam-zakharushkin-222k/exam-zakharushkin-222k/src/components/img/png-clipart-medicine-symbol-miscellaneous-trademark.png';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <p>MedVed</p>
    </div>
  );
};

export default Header;