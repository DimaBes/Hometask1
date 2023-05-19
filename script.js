function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function generateCalendar(year, month) {
  const calendar = document.querySelector('.calendar');

function updateMonthText(year, month) {
  const monthText = document.querySelector('.month');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  monthText.textContent = `${monthNames[month]} ${year}`;
}
updateMonthText(currentYear, currentMonth);

const prevMonthBtn = document.querySelector('.strelaLeft');
const nextMonthBtn = document.querySelector('.strelaRight');

prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
  updateMonthText(currentYear, currentMonth);
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
  updateMonthText(currentYear, currentMonth);
});


  calendar.innerHTML = '';

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const prevMonth = month - 1 < 0 ? 11 : month - 1;

  for (let i = 0; i < firstDayOfWeek; i++) {
    const li = document.createElement('li');
    li.classList.add('empty');
    const prevMonthDays = getDaysInMonth(year, prevMonth);
    li.textContent = prevMonthDays - (firstDayOfWeek - i - 1);
    calendar.appendChild(li);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const li = document.createElement('li');
    li.textContent = day;
    calendar.appendChild(li);
  }

  const totalCells = 42;
  const remainingCells = totalCells - firstDayOfWeek - daysInMonth;
  for (let i = 1; i <= remainingCells; i++) {
    const li = document.createElement('li');
    li.classList.add('empty', 'next-month');
    li.textContent = i;
    calendar.appendChild(li);
  }
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

generateCalendar(currentYear, currentMonth);

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

generateCalendar(2013, 5)