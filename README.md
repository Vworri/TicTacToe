## Synopsis

Play tic tac toe with Hal or with a friend
## Code Example

```    function checkforwin() {
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
       }}```

I am very proud of the logic I used to check for the win after every move. I like how neat and tidy it looks and you can easily chack
for errors if the code breaks.
## Motivation
This program was part of the curriculum to get my front-end development certificate.


## Installation

The cdn needs access to the internet to work. Other than that, there is not actual installation required.

## Tests

There are no tests

## Contributors

Just Me, Myself and I
## License

MIT
