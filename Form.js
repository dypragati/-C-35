class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2', 'Car Racing Game ')
        title.position(130, 0);
        var button = createButton('play')
        button.position(130, 160);
        var inp = createInput('name')
        inp.position(250, 200);
        var greeting = createElement('h3');
        button.mousePressed(function(){
            inp.hide();
            button.hide();
            var name = inp.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello "+ name);
            greeting.position(130, 160);
        });

    }

}