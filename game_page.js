player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question_turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer_turn - " + player2_name ;

function send() {
    get_number1 = document.getElementById("number1").value;
    get_number2 = document.getElementById("number2").value;
    answer=get_number1*get_number2;
   
    question_word1 = "<h4 id='word_display1'> Q. "+get_number1+"</h4>";
    question_word2 = "<h4 id='word_display2'> Q. "+get_number2+"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";

      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
       row = question_word1 +"*"+question_word2 + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
         document.getElementById("word").value = "";
}

question_turn="";
answer_turn="";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer=get_number1*get_number2;
    console.log("answer in lower case -" + answer);
    if(answer == get_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score=player2_score +1;
            document.getElementById("player1_score").innerHTML = player2_score;
                    }
                    else
                    {
                        player2_score = player1_score +2;
                        document.getElementById("player2_score").innerHTML = player1_score;
                    }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " +player2_name ;
   }
            else
            {
question_turn = "player1";
document.getElementById("player_question").innerHTML = "Question Turn - " +player1_name ;
            }
     if(answer_turn == "player1")
     {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " +player2_name ;
             } 
      else
      {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " +player1_name ;
    }  
    
    document.getElementById("output").innerHTML = "";
    }

