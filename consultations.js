function getRandomDate() {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1); // Мінімум - завтра

    const maxDate = new Date(currentDate);
    maxDate.setDate(currentDate.getDate() + 20); // Максимум - через 20 днів

    const randomDate = new Date(tomorrow.getTime() + Math.random() * (maxDate.getTime() - tomorrow.getTime()));

    return randomDate;
}

function scheduleAppointment() {
    const selectedDoctor = document.getElementById('doctors').value;
    const confirmationDiv = document.getElementById('confirmation');

    const randomDate = getRandomDate();
    const formattedDate = `${randomDate.getDate()}/${randomDate.getMonth() + 1}/${randomDate.getFullYear()}`;
    const formattedTime = `${randomDate.getHours()}:${randomDate.getMinutes()}`;

    const confirmationMessage = `Ви успішно записані на консультацію у ${selectedDoctor} 
                                  на ${formattedDate} о ${formattedTime}.`;

    confirmationDiv.innerText = confirmationMessage;
}
