
// about tabs functions 

const education = document.querySelector(".education"),
    experience = document.querySelector(".experience");
educationTabContent = document.querySelector('.tab-content-education');
experienceTabContent = document.querySelector('.tab-content-experience');

education.addEventListener('click', () => {

    if (experience.classList.contains('active')) {
        experience.classList.remove('active')
        experienceTabContent.classList.remove('active')
        education.classList.add('active')
        educationTabContent.classList.add('active')
    }

})

experience.addEventListener('click', () => {

    if (education.classList.contains('active')) {
        education.classList.remove('active')
        educationTabContent.classList.remove('active')
        experience.classList.add('active')
        experienceTabContent.classList.add('active')
    }

})