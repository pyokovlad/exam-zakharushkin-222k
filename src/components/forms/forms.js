import React, { useState } from 'react';
import './form.css';
import {valFullName, valPhoneNumber, valFutureDate, valBirthDate} from './utils.js'

const MainForm = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [futureDate, setFutureDate] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [dateOfBirthError, setDateOfBirthError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [futureDateError, setFutureDateError] = useState('');

  const handleFullNameChange = (value) => {
    setFullName(value);
    if (value.trim() === '') {
      setFullNameError('ФИО не может быть пустым');
    } else if (!valFullName(value)) {
      setFullNameError('Пожалуйста, введите корректное ФИО (хотя бы два слова кириллицей)');
    } else {
      setFullNameError('');
    }
  };

  const handleDateOfBirthChange = (value) => {
    setDateOfBirth(value);
    if (value.trim() === '') {
      setDateOfBirthError('Дата рождения не может быть пустой');
    } else if (!valBirthDate(value)) {
        setDateOfBirthError('Год не может быть позднее 2006г');
    } else {
      setDateOfBirthError('');
    }
  };

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    let match = cleaned.match(/^(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      let intlCode = (match[1] ? '+7' : '');
      return [intlCode, match[2], match[3], match[4], match[5]].filter(Boolean).join('-');
    }
    return value;
  };

  const handlePhoneNumberChange = (value) => {
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);

    if (value.trim() === '') {
      setPhoneNumberError('Номер телефона не может быть пустым');
    } else {
      setPhoneNumberError('');
    }
  };





  const handleEmailChange = (value) => {
    setEmail(value);
    if (value.trim() === '') {
      setEmailError('Email не может быть пустым');
    } else if (!valEmail(value)) {
      setEmailError('Пожалуйста, введите корректный адрес электронной почты (латиницей, с @ и .)');
    } else {
      setEmailError('');
    }
  };

  const handleFutureDateChange = (value) => {
    setFutureDate(value);
    if (value.trim() === '') {
      setFutureDateError('Дата не может быть пустой');
    } else if (!valFutureDate(value)) {
      setFutureDateError('Пожалуйста, введите дату, которая как минимум следующий день от текущего');
    } else {
      setFutureDateError('');
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'fullName':
        handleFullNameChange(value);
        break;
      case 'dateOfBirth':
        handleDateOfBirthChange(value);
        break;
      case 'phoneNumber':
        handlePhoneNumberChange(value);
        break;
      case 'email':
        handleEmailChange(value);
        break;
      case 'futureDate':
        handleFutureDateChange(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Дополнительная проверка перед отправкой формы, если нужно
  };

  return (
    <main className="main">
      <form onSubmit={handleSubmit} className="form">
        <h1>Запись на приём</h1>
        <div className="formGroup">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => handleFullNameChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="Иванов Иван Иванович"
            required
          />
          <label htmlFor="fullName" className="label sr-only">ФИО</label>
          {fullNameError && <p className="error">{fullNameError}</p>}
          <p>ФИО</p>
        </div>
        <div className="formGroup">

          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => handleDateOfBirthChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="01.01.1990"
            required
          />
          <label htmlFor="dateOfBirth" className="label sr-only">Дата рождения</label>
          {dateOfBirthError && <p className="error">{dateOfBirthError}</p>}
          <p>Дата рождения</p>
        </div>
        <div className="formGroup">
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="+7-904-123-45-67"
            required
          />
          <label htmlFor="phoneNumber" className="label sr-only">Номер телефона</label>
          {phoneNumberError && <p className="error">{phoneNumberError}</p>}
          <p>Номер телефона</p>
        </div>
        
        <div className="formGroup">
          <input
            type="date"
            id="futureDate"
            value={futureDate}
            onChange={(e) => handleFutureDateChange(e.target.value)}
            onBlur={handleBlur}
            required
          />
          <label htmlFor="futureDate" className="label sr-only">Будущая дата</label>
          {futureDateError && <p className="error">{futureDateError}</p>}
          <p>Дата приема</p>
        </div>

        <div className="formGroup">
            <label for="time">Выберите время приёма:</label>
            <select id="time" name="time" onchange="handleFruitChange()">
                <option value="8:00">8:00</option>
                <option value="9:00">9:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
            </select>
        </div>
        
        <button type="submit">Записаться</button>
      </form>
    </main>
  );
};

export default MainForm;