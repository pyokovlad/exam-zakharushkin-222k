// проверка на ввод имени
function valFullName(fullName) {
    let isValid = false;
    // Проверяем, есть ли в имени хотя бы два слова на кириллице
    if (/^[А-Яа-яЁё]+\s[А-Яа-яЁё]+(\s[А-Яа-яЁё]+)?$/.test(fullName)) {
        isValid = true;
    }
    return isValid;
};
  

function valPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    return cleaned.lenght <= 11;
  };
    

  
  function valFutureDate(date) {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    
    selectedDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    
    return selectedDate.getTime() >= nextDay.getTime();
  };
    
  function valBirthDate(date) {
    const BirthDate = new Date(date);
    const minBirthDate = new Date('01-01-2006');
    return BirthDate.getTime() <= minBirthDate.getTime();
  }
  
export {
    valFullName, 
    valFutureDate,
    valPhoneNumber,
    valBirthDate
}
      