*<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Object Prototypes | COMP1073 Client-Side JavaScript</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="css/normalize.css" rel="stylesheet" />
<link href="css/styles.css" rel="stylesheet" />
</head>
<body>
<h1>Inheritance in JavaScript</h1>
<p>Let's put JavaScript prototypes and inheritance to work – with <em>coffee</em>.</p>
<p id="output"></p>
<script>
var output = document.getElementById('output');
/* Review the below constructor function, 'Coffee' */
function Coffee(size, isDecaf, qtyCream, qtySugar) {
// size should be 'large', 'medium', or 'small'
this.size = size;
// isDecaf is boolean
this.isDecaf = isDecaf;
// qtyCream and qtySugar are integers
this.qtyCream = qtyCream;
this.qtySugar = qtySugar;
// Use a ternary operator to determine whether the coffee is decaf
this.decaf = (this.isDecaf === true ? 'decaffeinated' : 'caffeinated');
// Describe the coffee
this.description = 'A ' + this.size + ' ' + this.decaf + ' coffee with ' + this.qtyCream + ' cream and ' + this.qtySugar + ' sugar.';
}
/* Observe how the method 'serveIt' is defined on the constructor's prototype. */
Coffee.prototype.serveIt = function() {
// Generate an IMG element of the appropriate size, with the object's description as the title attribute value
var cup = document.createElement("img");
cup.setAttribute('title', this.description);
cup.setAttribute('src', 'images/coffee-cup.svg');
var cupSize;
switch (this.size) {
case 'small':
cupSize = '100px';
break;
case 'medium':
cupSize = '125px';
break;
case 'large':
cupSize = '150px';
break;
default:
cupSize = '100px';
}
// Size the SVG in terms of its height based on this.size
cup.setAttribute('height', cupSize);
// Insert the new IMG element with src, title, and height attributes all set into the paragraph
output.appendChild(cup);
}
/* Create a new constructor based on Coffee ... Americano */
function Americano(size, isDecaf, qtyCream, qtySugar) {
Coffee.call(this, size, isDecaf, qtyCream, qtySugar);
// Americano doesn't have milk type
this.milkType = '';
// Describe the Americano
this.description = 'A ' + this.size + ' ' + this.decaf + ' Americano with ' + this.qtyCream + ' cream and ' + this.qtySugar + ' sugar.';
}
Americano.prototype = Object.create(Coffee.prototype);
Americano.prototype.constructor = Americano;
Americano.prototype.serveIt = function() {
// Generate an IMG element of the appropriate size, with the object's description as the title attribute value
var cup = document.createElement("img");
cup.setAttribute('title', this.description);
cup.setAttribute('src', 'images/coffee-cup-blue.svg');
var cupSize;
switch (this.size) {
case 'small':
cupSize = '75px';
break;
case 'medium':
cupSize = '100px';
break;
case 'large':
cupSize = '125px';
break;
default:
cupSize = '75px';
}
// Size the SVG in terms of its height based on this.size
cup.setAttribute('height', cupSize);
// Insert the new IMG element with src, title, and height attributes all set into the paragraph
output.appendChild(cup);
}
// Create an instance of Americano
var myAmericano = new Americano('large', false, 1, 0);
myAmericano.serveIt();
</script>
</body>
</html>*