document.getElementById('completed-btn-one')
    .addEventListener('click', function (event) {
        alert('Board Updated Successfully');
        setAvrything('completed-btn-one', 'inner-btn-one', 'task-assigned', 'task-assigned', 'nav-num', 'nav-num', 'activity-log-add', 'title-text');

    })
document.getElementById('completed-btn-two')
    .addEventListener('click', function (event) {
        alert('Board Updated Successfully');
        setAvrything('completed-btn-two', 'outer-btn-two', 'task-assigned', 'task-assigned', 'nav-num', 'nav-num', 'activity-log-add', 'title-text-two');

    })
document.getElementById('completed-btn-tree')
    .addEventListener('click', function (event) {
        alert('Board Updated Successfully');
        setAvrything('completed-btn-tree', 'outer-btn-tree', 'task-assigned', 'task-assigned', 'nav-num', 'nav-num', 'activity-log-add', 'title-text-tree');

    })
document.getElementById('completed-btn-four')
    .addEventListener('click', function (event) {
        alert('Board Updated Successfully');
        setAvrything('completed-btn-four', 'outer-btn-four', 'task-assigned', 'task-assigned', 'nav-num', 'nav-num', 'activity-log-add', 'title-text-four');

    })
document.getElementById('completed-btn-five')
    .addEventListener('click', function (event) {
        alert('Board Updated Successfully');
        setAvrything('completed-btn-five', 'outer-btn-five', 'task-assigned', 'task-assigned', 'nav-num', 'nav-num', 'activity-log-add', 'title-text-five');

    })
document.getElementById('completed-btn-six')
    .addEventListener('click', function (event) {
        alert('Board Updated Successfully');
        setAvrything('completed-btn-six', 'outer-btn-six', 'task-assigned', 'task-assigned', 'nav-num', 'nav-num', 'activity-log-add', 'title-text-six');

    })

document.getElementById('clear-history')
    .addEventListener('click', function (event) {
        const activityLog = getById('activity-log-add');
        activityLog.innerText = '';
    })

const date = getById('date');
const Ndate = new Date();
const week = Ndate.toLocaleString('en-US', { weekday: 'short' })
const weekDayName = getById('weekday-name');
weekDayName.innerText = `${week},`;

const monthName = Ndate.toLocaleString('en-US', { month: 'short' });
const monthNumeric = Ndate.toLocaleString('en-US', { month: 'numeric' });
const yearNumeric = Ndate.toLocaleString('en-US', { year: 'numeric' });
date.innerText = `${monthName} ${monthNumeric} ${yearNumeric}`


document.getElementById('theme')
    .addEventListener('click', function (event) {
        const bodyBgColor = getById('body-bg-color');
        const bgColor = Math.ceil(Math.random() * 1000000) + 100000;
        const bodyBgColorId = getById('body-bg-color');
        const bgColroNew = `#${bgColor}`
        bodyBgColorId.style.backgroundColor = bgColroNew;
    })