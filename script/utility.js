function getById(id) {
    return document.getElementById(id);
}

function getTextValue(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setAvrything(idOne, idTwo, idTree, idFour, idFive, idSix, idSeven, idEight) {
    const btnOne = getById(idOne);
    btnOne.setAttribute('disabled', true);
    const outerBtnOne = getById(idTwo);
    outerBtnOne.classList.add('bg-gray-200')

    const taskAssignedValue = getTextValue(idTree);
    const taskAssignedRemove = taskAssignedValue - 1;
    const taskAssigned = getById(idFour);
    taskAssigned.innerText = taskAssignedRemove;

    const navNumValue = getTextValue(idFive);
    const navNumAdd = navNumValue + 1;
    const navNum = getById(idSix);
    navNum.innerText = navNumAdd;

    const time = new Date();
    const newTime = time.toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric'});
    const activityLogAdd = getById(idSeven);
    const titleText = getById(idEight).innerText;
    const titleAdd = document.createElement('p');
    titleAdd.classList.add('m-4')
    titleAdd.classList.add('p-4')
    titleAdd.classList.add('bg-white')
    titleAdd.classList.add('rounded-xl')
    titleAdd.innerText = `You have Complete The Task ${titleText} at ${newTime}`
    activityLogAdd.appendChild(titleAdd);

    if(taskAssignedValue === 1)
    {
        alert('Congrats!!! You have Completed all the Current Task');
    }
}