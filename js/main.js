var index = document.getElementsByClassName("radioCheck");
var app = new Vue({
  el: '#root',
  data: {
    quests:[
      {
        name: "first",
        title:'Quanto fa 5 x 5 ?',
        answer: [10, 25, 30, 50],
        correctAnswer: 25
      },
      {
        name: "second",
        title:'Quanto fa 7 x 7 ?',
        answer: [43, 38, 51, 49],
        correctAnswer: 49
      },
      {
        name: "third",
        title: 'Quanto fa 3 x 3 ?',
        answer: [12, 9, 24, 36],
        correctAnswer: 9
      },
      {
        name: "fourth",
        title: 'Quanto fa 9 x 9 ?',
        answer: [81, 79, 68, 54],
        correctAnswer: 81
      },
      {
        title: 'Hai totalizzato : ',
        answer: [],
        correctAnswer: ""
      }
    ],
    userAnswer:[],
    counter : 0,
    userPoint: 0,
    remind: null,
    activeAnswer: null
  },
  created(){
    this.activeAnswer = this.quests[0];
  },
  methods:{
    changeAnswer(){
      if(this.counter < this.quests.length && this.remind != null){
        this.remind= null;
        if(this.activeAnswer.correctAnswer == this.userAnswer[this.counter]){
          this.userPoint++;
        }
        console.log(this.userAnswer);
        this.counter++;
        this.activeAnswer = this.quests[this.counter];
      }
    },
    backAnswer(){
      if(this.counter != 0){
        this.counter--;
        this.activeAnswer = this.quests[this.counter];
      }
    },
    onChange(event){
              var data = event.target.value;
              this.userAnswer.push(data);
    }
  }
})
