/**User Story: I can play a game of Tic Tac Toe with the computer.

 User Story: My game will reset as soon as it's over so I can play again.

 User Story: I can choose whether I want to play as X or O.
 * Created by DragonQueen on 12/15/16.
 */

$(document).ready(function () {
    //user is by default x
    var myturn = "X";
    //check board against array
     var checkArray = ['','','','','','','','',''];
    // machine is by default 'O'
    var otherguy = 'O';
    // keeps track of whose turn it is
    var opponent = "Dave";
    var playerOturn = false;
    //count to keep track of turns
    var count = 0;

    var player2 = "";
    var player1 = "";

    //initial parameters from user
    $("#submitbtn").click(function () {
        var checkCellopponent= $('#Dave').css('display');
        if (checkCellopponent === 'none'){
            opponent = 'Hal'

        }
        if (checkCellopponent !== 'none'){
            opponent = 'Dave'

        }

        if ($('#chooseX').is(":checked")){
            player1 = "X";
            player2 = "O";
            $('#turnO').trigger('click');


        }
        if ($('#chooseO').is(":checked")){
            player1 = "O";
            player2 = "X";
            $('#turnX').trigger('click');
        }

        document.getElementById('Usrform').style.display = 'none';
        document.getElementById('board').style.display = 'block';
        return false;
    });

    //toggle default so player may choose

    //chose which player you are


    //if O: turn O is initialized
    $('#turnO').click(function () {
         myturn = "O";


    });
    //if X: turn X is initialized
    $('#turnX').click(function () {
        myturn = "X";



    });
    $('#X').click(function () {
        reset();
    });
    $('#O').click(function () {
        reset();
    });
    //if playing against human
    $('#Dave').click(function () {
        document.getElementById('Hal').style.display = 'none';
        window.alert("You are now playing against a Human. Player two is now called Dave. Hal is none too happy")
    });


    /// if playing against computer
    $('#Hal').click(function () {
        document.getElementById('Dave').style.display = 'none';
        window.alert("You are now playing against Hal, the computer. Beware: He cheats")
    });
    $('.cell').click(function () {
        //stores value
        var cellid = $(this).attr('id');
        //calling play funct is step 2
        playHuman(player1.toLocaleLowerCase(), cellid);});

/*
    function play(xoro, id) {
            checkforwin();
                if (checkforwin() === false){
                    if(xoro === 'x'){
                        if (opponent !== "hal" && player2 === "O"){
                        $('#turnO').trigger('click');}
                        if (opponent === "Hal" && player2 === "O"){
                            playHal("o");
                        }
                    }
                    if(xoro === 'o'){
                        if (opponent !== "hal" && player2 === "X"){
                            $('#turnX').trigger('click');}
                        if (opponent === "Hal" && player2 === "O"){
                                playHal('x');}}}
        count ++;
            }*/


    function playHuman(xoro,id) {
        var checkCellX = $('#' + id + 'x').css('display');
        var checkCellO = $('#' + id + 'o').css('display');
        checkArray[id-1] = xoro;
        if (checkCellX === 'none' && checkCellO === 'none'){
            document.getElementById(id + xoro).style.display = 'inline-block';
            checkforwin();

        }

        console.log("no winner yet! for the humans");
        console.log(checkArray)
        if (checkforwin() === false){
        if (opponent ===  "Hal"){
            playHal(player2.toLocaleLowerCase())
        }
        if (opponent == 'Dave'){
            if (xoro === 'x'){
                $('#turnO').trigger('click');
                player1 = "O"
            }
            if (xoro === 'o'){
                $('#turnX').trigger('click');
                player1 = "X"
            }
        }}

       count ++;
    }

    function playHal(xoro) {
        xoro = player2.toLocaleLowerCase();
        var cellnum = Math.floor(Math.random() * 9) + 1 ;
        var checkCellX = $('#'+cellnum +'x').css('display');
        var checkCellO = $('#' + cellnum + 'o').css('display');
        checkArray[cellnum-1] = xoro;

        if (checkCellX === 'none' && checkCellO === 'none'){
            document.getElementById(cellnum + xoro).style.display = 'inline-block';}
        if (checkCellX !== 'none' || checkCellO !== 'none'){
            playHal(xoro);}
        checkforwin();
        if (checkforwin() === false){
           console.log("no winner yet!")

        }
        count ++;}


        ///check if there is a win
    function checkforwin() {
        //columns
        if (checkArray[0] !== '' && checkArray[0] === checkArray[1] && checkArray[1]===checkArray[2]){
            (document.getElementById(checkArray[0].toUpperCase()).style.display = 'block');

        }
         if (checkArray[3] !== '' && checkArray[3] === checkArray[4] && checkArray[4] ===checkArray[5]){
             document.getElementById(checkArray[3].toUpperCase()).style.display = 'inline-block';

        }
        if (checkArray[6] !== '' && checkArray[6] === checkArray[7] && checkArray[7] ===checkArray[8]){
            document.getElementById(checkArray[6].toUpperCase()).style.display = 'inline-block';

        }
        //rows
        if (checkArray[0] !== '' && checkArray[0] === checkArray[3] && checkArray[3] ===checkArray[6]){
            document.getElementById( checkArray[0].toUpperCase()).style.display = 'inline-block';

        }
        if (checkArray[1] !== '' && checkArray[1] === checkArray[4] && checkArray[4] ===checkArray[7]){
            document.getElementById(checkArray[1].toUpperCase()).style.display = 'inline-block';

        }
        if (checkArray[2] !== '' && checkArray[2] === checkArray[5] && checkArray[5] ===checkArray[8]){
            document.getElementById(checkArray[2].toUpperCase()).style.display = 'inline-block';
        }
        //diagonals
        if (checkArray[0] !== '' && checkArray[0] === checkArray[4] && checkArray[4]===checkArray[8]){
            document.getElementById(checkArray[0].toUpperCase()).style.display = 'inline-block';
        }
        if (checkArray[2] !== '' && checkArray[2] === checkArray[4]&& checkArray[4] ===checkArray[6]){
            document.getElementById(checkArray[2].toUpperCase()).style.display = 'inline-block';
        }
        else {
            return false;
    }}

    //clicking on the cell is step 1

    function reset() {
        location.reload()

    }






    $('.myCheckbox').click(function() {
        $(this).siblings('input:radio').prop('checked', false);
    });

});