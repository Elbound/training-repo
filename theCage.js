const bird = document.querySelectorAll(".birds");
const chirps = new Audio('audio/mockingbirds.mp3');
const feed = document.getElementById('bfeed');

function fly(b){
    b.style.top = Math.random() * 90+ 'vh';
    b.style.left = Math.random() * 90 + 'vw';
}

function flyNear(b){
    b.style.top = (Math.random() * (83-57) + 57)+ 'vh';
    b.style.left = (Math.random() * (53-37) + 37) + 'vw';
}

function spawnFeed(){
    feed.style.display = 'flex';
    setTimeout(()=>{
        feed.style.display = 'none';
        scatter();
    }, 5000);
}

function scatter(){
    bird.forEach((el)=>{
        // console.log(el);
        fly(el);
    });

}
document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();

    scatter();

    console.log(bird)
    document.addEventListener('click', function(e){
        // console.log(e.target.closest('.birds'));
        const target = e.target.closest('.birds')
        if(!target) return;

        fly(target);

    });

    document.addEventListener('keydown', function (e){
        if(e.code === 'Space'){
            scatter();
            chirps.play();
        }
        if(e.key === 'Enter'){
            console.log("enter pressed");
            bird.forEach((el)=>{
                flyNear(el);
            });
            spawnFeed();
        }
    })
    // bird.forEach(b=>{
    //     b.addEventListener('click', fly);
    // });    

});

function home(){
     window.location.replace("./index.html");
}