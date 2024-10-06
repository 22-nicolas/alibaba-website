const logoObsv = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
            entry.target.classList.remove('alt-logo')
        }
    });
});

const logo = document.querySelectorAll(".alt-logo")

logo.forEach((el) => logoObsv.observe(el));



const essenObsv = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('essen-vorschau')
            entry.target.classList.remove('essen-vorschau-hidden')
        } /*else {
            entry.target.classList.add('essen-vorschau-hidden')
            entry.target.classList.remove('essen-vorschau')
        }*/
    });
});

const essen = document.querySelectorAll(".essen-vorschau-hidden")

essen.forEach((el) => essenObsv.observe(el));