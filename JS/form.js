class Form{
    constructor(){

        this.input = createInput("name");
        this.button = createButton("play");
        this.title = createElement("h1");
        this.greeting = createElement("h2");

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }

    display(){

        this.title.html("Car racing game");
        this.title.position(130, 0);
        this.input.position(130, 160);
        this.button.position(200, 250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

            this.greeting.html("welcome " + player.name);
            this.greeting.position(220, 250);
        }); 


    }

}