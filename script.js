
  
let currentQuestionIndex = 0;
let animationIsRunning = false;
let fireworksFnc;
let questions = [
    {
        question: "מה המצווה שניתנה לאהרון בפרשת בהעלותך",
        choices: {
            A: "לבנות את המשכן",
            B: " להדליק את המנורה",
            C: "להקריב קורבנות",
            D: "לקחת את מנין העם"
        },
        correctAnswer: "B"
    },
      {
        question: "ממה הייתה עשויה המנורה במשכן",
        choices: {
            A: "עץ",
            C: "זהב",
            B: "נחושת",
            D: "כסף",
        },
        correctAnswer: "C"
    },
    {
        question: "כמה קנים היו למנורה",
        choices: {
            A:  "שלושה",
            B: "חמישה",
            C: "שבעה",
            D: "שמונה"
        },
        correctAnswer: "C"
    },
    {
        question: "למה מסמלת המנורה",
        choices: {
            A:  "עושר והוד",
            B: "אור והדרכה רוחנית",
            C: "כוח ושלטון",
            D: "ידע וחכמה"
        },
        correctAnswer: "B"
    },
];

function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("choiceA").innerText = question.choices.A;
    document.getElementById("choiceB").innerText = question.choices.B;
    document.getElementById("choiceC").innerText = question.choices.C;
    document.getElementById("choiceD").innerText = question.choices.D;

}


function chooseAnswer(answer) {  
    if(!animationIsRunning){
        if (answer === questions[currentQuestionIndex].correctAnswer) {
            try{
                fireworksFnc();
            } catch(err){
                console.log(err)
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(()=>displayQuestion(), 5000)
            } else {
                currentQuestionIndex = 0;
                displayQuestion();
                alert("כל הכבוד מקווה שנהנתם");
            }
        } else {
            alert('לא נכון')
        }
    }  

}

window.onload = function() {
    displayQuestion();
    fireworksFnc =() =>{
        animationIsRunning = true;
        let fireworksElement = document.getElementById("fireworks");
        fireworksElement.style.display = "block";
        const fireworks = new Fireworks.default(fireworksElement, {
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 50,
            traceLength: 3,
            traceSpeed: 10,
            explosion: 5,
            intensity: 30,
            flickering: 50,
            lineStyle: 'round',
            hue: {
              min: 0,
              max: 360
            },
            delay: {
              min: 30,
              max: 60
            },
            rocketsPoint: {
              min: 50,
              max: 50
            },
            lineWidth: {
              explosion: {
                min: 1,
                max: 3
              },
              trace: {
                min: 1,
                max: 2
              }
            },
            brightness: {
              min: 50,
              max: 80
            },
            decay: {
              min: 0.015,
              max: 0.03
            },
            mouse: {
              click: false,
              move: false,
              max: 1
            }
          }) 
        fireworks.start()
        
        setTimeout(() => { fireworksElement.style.display = "none"; animationIsRunning = false }, 5000); // Display for 3 seconds
    }
};


