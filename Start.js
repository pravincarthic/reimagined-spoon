class Start{

    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }
      display(){
        this.title.html("Welcome to The Flight To Nowhere: THE GAME ft. Dog McDucky");
        this.title.position(displayWidth/2 - 50, displayHeight/2-100);
    
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
    }
}