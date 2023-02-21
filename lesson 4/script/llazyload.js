const images = document.querySelectorAll('[data-src]');

const options = {
    threshold: 0};

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source){
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver(
    (entries)=>{
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
            
            console.log(entries);
        })


    },
    options
);

images.forEach(img => {
    io.observe(img);
})

if(!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('visits').textContent = 'This is your 1st visit';
} else {
    giveDate();
}

function giveDate() {
    let lastDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    
    let difference = currDate - lastDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('visits').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());

}