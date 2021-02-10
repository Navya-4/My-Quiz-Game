class Form {
    
    constructor (){

      this.input = createInput("Enter Your Name")
      this.button = createButton("Confirm!")
      this.greeting = createElement("h3")
      this.question = createElement ("h2")
      this.option1 = createElement ("h3")
      this.option2 = createElement ("h3")
      this.option3 = createElement ("h3")
      this.option4 = createElement ("h3")

    }

    display(){

      var title = createElement ("h1")
      title.html ("⚝ My Quiz ⚝")
      title.position (550, 20, 20,20)

      this.question.html ("Question :- 'I speak without a mouth, I hear without ears. I have no body, but I come alive with the wind. What am I?'")
    
      this.option1.html ("1:- Echo ")
      this.option2.html ("2:- Clock")
      this.option3.html ("3:- Bottle Neck ")
      this.option4.html ("4:- I don't know")

      this.option1.position (150, 250)
      this.option2.position (150, 300)
      this.option3.position (150, 350)
      this.option4.position (150, 400)

      this.question.position (150, 115)

      this.option1.hide()
      this.option2.hide()
      this.option3.hide()
      this.option4.hide()

      this.question.hide()

      this.button.position (610, 250, 20, 20)
      this.button.mousePressed (()=>{
        player = new Player ()
        //player.update()
        this.input.hide()
        this.button.hide()
        contestantCount++
        player.index = contestantCount
        player.updateCount(contestantCount)
        player.name = this.input.value()
            this.greeting.html ("✮ Hello ✮ "+ player.name)
            this.greeting.position(500, 75)
      })

      this.input.position (560, 200, 20, 20)

    }


}