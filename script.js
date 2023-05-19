// Функция для определения количества дней в месяце
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Функция для генерации календаря
function generateCalendar(year, month) {
  const calendar = document.querySelector('.calendar');

  // Очищаем содержимое календаря
  calendar.innerHTML = '';

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const prevMonth = month - 1 < 0 ? 11 : month - 1;

  // Создаем пустые ячейки для дней предыдущего месяца
  for (let i = 0; i < firstDayOfWeek; i++) {
    const li = document.createElement('li');
    li.classList.add('empty');
    const prevMonthDays = getDaysInMonth(year, prevMonth);
    li.textContent = prevMonthDays - (firstDayOfWeek - i - 1);
    calendar.appendChild(li);
  }

  // Создаем ячейки для дней текущего месяца
  for (let day = 1; day <= daysInMonth; day++) {
    const li = document.createElement('li');
    li.textContent = day;
    calendar.appendChild(li);
  }

  // Создаем пустые ячейки для дней следующего месяца
  const totalCells = 42; // Общее количество ячеек в календаре (6 недель * 7 дней)
  const remainingCells = totalCells - firstDayOfWeek - daysInMonth;
  for (let i = 1; i <= remainingCells; i++) {
    const li = document.createElement('li');
    li.classList.add('empty', 'next-month');
    li.textContent = i;
    calendar.appendChild(li);
  }
}

// Получаем текущую дату
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// Генерируем календарь для текущего месяца
generateCalendar(currentYear, currentMonth);

// Обработчики событий для изменения месяца
const prevMonthBtn = document.querySelector('.strelaLeft');
const nextMonthBtn = document.querySelector('.strelaRight');

prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
});

generateCalendar(2014, 4)