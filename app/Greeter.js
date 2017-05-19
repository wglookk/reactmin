// // Greeter.js
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "Hi there and greetings!哈哈234";
//   return greet;
// };
function Greeter() {
  this.say = function(){
    let [a, b, c] = [1, 2, 3];
    console.log(a +"|"+ b)
  }
}
module.exports ={
  Greeter:Greeter
}
