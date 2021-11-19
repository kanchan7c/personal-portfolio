
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

// portfolio item details popup 

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-project-btn')) {
        togglePopup();
        document.querySelector('.portfolio-popup').scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
})

const togglePopup = () => {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling')
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
}

document.querySelector('.popup-close').addEventListener('click', togglePopup);


const portfolioItemDetails = (portfolioItem) => {

    document.querySelector('.popup-thumbnail img').src = portfolioItem.querySelector('.portfolio-item-thumbnail img').src;

    document.querySelector('.popup-header h3').innerText = portfolioItem.querySelector('.portfolio-item h3').innerText;

    document.querySelector('.popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;


}