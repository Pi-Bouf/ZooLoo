function Animate() {
    var Phone = document.getElementById("Phone");
    var Bloc_1 = document.getElementById("Bloc_1");
    var Bloc_2 = document.getElementById("Bloc_2");
    var Bloc_3 = document.getElementById("Bloc_3");
    var Graph = document.getElementById("Graph");
    
    TweenMax.set(Phone, {
        y: 0
    });
    var tlPhone = new TimelineMax({
        repeat: -1,
        yoyo: true
    });
    tlPhone.to(Phone, 6, {
        y: 40
    });
    
    TweenMax.set([Bloc_1, Bloc_2, Bloc_3], {
        alpha: 1
    });
    TweenMax.set(Graph, {
        drawSVG: '0% 0%'
    });
    
    var tlBloc = new TimelineMax({
        repeat: -1,
        repeatDelay: 2
    });
    
    tlBloc.to(Bloc_1, 1, {
        delay: 2,
        alpha: 0
    })
    .to(Graph, 1.5, {
        drawSVG: '0% 100%',
        ease: Power0.easeNone
    }, "-=0.5")
    .to([Bloc_2, Bloc_3], 0.4, {
        y: -77
    }, "-=1");
}