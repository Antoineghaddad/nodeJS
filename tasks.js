
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  text = text.replace("\n" , " ");
  text = text.trim(" ");
  text = text.split(" ");

  if (text[0] === 'quit' || text[0] === 'exit') {
    quit();
  }
  else if(text[0] === 'hello'){
    hello(text[1]);
  }

  else if(text[0] === "output" ) {
     added(text[1]);
  }
  else if(text[0] === "add"){
    push(text[1]);
  }
  else if(text[0] === "remove"){
    text.shift();
    remove(text);
  }
  else if(text[0] === "edit"){
    editt();
    text.shift();
    editt(text);
  }
  
  else if(text[0] === 'help'){
    help();
  }
  else{
    unknownCommand(text);
  }
}







/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */

function hello(arg){
  if(arg == null){
  console.log('hello!')
  }else{
    console.log("hello" +" "+ arg + "!")
  }
  
}
var NewList = [];

function added(){
  console.log(NewList);
}


function push(item1){

    NewList.push(item1);
  
 
}

function remove(item1){
  if(item1 == "") {
    NewList.splice(NewList.length-1,1);
  }
  else if(item1 <=0 || item1 > NewList.length){
      console.log("error ! number doesn't exist")
    }
    else {
      NewList.splice(item1 -1 ,1);
  }
  
  }
  function editt(arg){
    
    if(arg == null){
      console.log("Error! Unknown Command!")
  }


/**
 * Exits the application
 *
 * @returns {void}
 */


function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

function help1(){
  console.log("Type 'help' for any issues or missing commands!");
}

function help(){
  console.log('Type \'Hello\' to Say Hello! \nType \'exit\' or \'quit\' to say goodbye and exit!' +'\n'+ 
  'Type hello + name to get hello name! \nType \'add\' to add an element to the list' + 
  "\n" + "Type 'Remove 1' to remove the first element \nType 'Remove 2' to remove the second element" +
  "\n" + "Type 'Remove' to delete the last element");
 
}

// The following line starts the application

startApp("Antoine haddad");
help1();

