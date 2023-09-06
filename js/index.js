const scrollText = document.querySelector('.about__description-text');

scrollText.addEventListener('mousedown', () => {
    scrollText.classList.add('paused');
});

scrollText.addEventListener('mouseup', () => {
    scrollText.classList.remove('paused');
});


const aboutPhoto = document.querySelector('.about__photo');
const aboutText = document.querySelector('.about__text');

function animate(entries, observer) {
    const isSmallScreen = window.innerWidth < 767;

    if (entries[0].isIntersecting) {
        if (isSmallScreen) {
            aboutPhoto.style.animation = 'slideleftslow 2s'; 
            aboutText.style.animation = 'sliderightbig 2s'; 
        } else {
            aboutPhoto.style.animation = 'slideleftslow 2s'; 
            aboutText.style.animation = 'sliderightslow 2s'; 
        }
        
        aboutPhoto.style.opacity = '1';
        aboutText.style.opacity = '1';
        observer.unobserve(aboutPhoto);
    }
}

const observer = new IntersectionObserver(animate, { rootMargin: "-75px" });

observer.observe(aboutPhoto);


const projectOlympiad = document.getElementById('olympiad');
const projectUber = document.getElementById('uber');
const projectCrud = document.getElementById('crud');

function animate2(entries, observer) {
    if (entries[0].isIntersecting) {
        projectOlympiad.style.animation = 'slideleftbig 3s';
        projectOlympiad.style.opacity = '1'
        observer.unobserve(projectOlympiad); 
    }
}

function animate3(entries, observer) {
    if (entries[0].isIntersecting) {
        projectUber.style.animation = 'sliderightbig 2.5s';
        projectUber.style.opacity = '1'
        observer.unobserve(projectUber); 
    }
}

function animate4(entries, observer) {
    if (entries[0].isIntersecting) {
        projectCrud.style.animation = 'slideleftbig 2s';
        projectCrud.style.opacity = '1'
        observer.unobserve(projectCrud); 
    }
}

const observer1 = new IntersectionObserver(animate2, { rootMargin: "-85px" });
const observer2 = new IntersectionObserver(animate3, { rootMargin: "-85px" });
const observer3 = new IntersectionObserver(animate4, { rootMargin: "-85px" });

observer1.observe(projectOlympiad);
observer2.observe(projectUber);
observer3.observe(projectCrud);


const contactQuestion = document.querySelector('.contacts__question');
const contactAction = document.querySelector('.contacts__action');

function animate5(entries, observer) {
    if (entries[0].isIntersecting) {
        contactQuestion.style.animation = 'showup 3s ';
        contactQuestion.style.opacity = '1'
        observer.unobserve(contactQuestion); 
    }
}

function animate6(entries, observer) {
    if (entries[0].isIntersecting) {
        console.log(111)
        contactAction.style.animation = 'sliderightslow1 3s';
        contactAction.style.opacity = '1'
        observer.unobserve(contactAction); 
    }
}

const observer4 = new IntersectionObserver(animate5, { rootMargin: "-15px" });
const observer5 = new IntersectionObserver(animate6, { rootMargin: "-15px" });

observer4.observe(contactQuestion);
observer5.observe(contactAction);