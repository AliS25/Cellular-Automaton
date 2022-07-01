// Function that creates everything on the page
function all(size, cellsOn){
    //The randomness in the state of each individual cell
    let randomValue=0;
//2d array for keeping track of the states of all cells
let cells=[];
//first row of cells
let firstGen=[];
//add it to the cells array
cells.push(firstGen);
    //body element
    const body=document.body;
    //array of the initial rules
    const rules=[true,true,true,true,true,true,true,true]
    //Initial rule number
    let ruleNum=255;
    //create a sub-heading 
let msg = document.createElement('h2');
//give it a class attribute
msg.setAttribute('class','msg')

//create a label element
const colorOnLabel=document.createElement('label');
//give it a class attribute
colorOnLabel.setAttribute('class','color')
//give it text content
colorOnLabel.textContent='Color of cells that are on: '
//add it to the body(screen)
body.appendChild(colorOnLabel)

//create an input element
const colorOn=document.createElement('input');
//give it a type attribute
colorOn.setAttribute('type','color')
//give it a class attribute 
colorOn.setAttribute('class','color')
//add it to the body
body.appendChild(colorOn);

//create an input element
const colorOnSubmit=document.createElement('input');
//give it a type attribute
colorOnSubmit.setAttribute('type','submit')
//give it a class attribute
colorOnSubmit.setAttribute('class','color')
//give it a value attribute
colorOnSubmit.setAttribute('value','Submit Color')
//add it to the body
body.appendChild(colorOnSubmit)

//Add an event listener to the previous input element which listens for a click
colorOnSubmit.addEventListener('click',function(){
    //reset the display:
    //get all elements with a class of 'ruleBox' and remove them from the body
    let boxes = document.querySelectorAll('.ruleBox');
    boxes.forEach(box => {
      box.remove();
    });
        //get all elements with a class of 'msg' and remove them from the body
    let messages = document.querySelectorAll('.msg');
    messages.forEach(message => {
      message.remove();
    });
        //get all elements with an id of 'main' and remove them from the body
    let panels = document.querySelectorAll('#main');
    panels.forEach(pan => {
      pan.remove();
    });
        //get all elements with a class of 'rand' and remove them from the body
    let randins = document.querySelectorAll('.rand');
    randins.forEach(randin => {
      randin.remove();
    });
        //get all elements with a class of 'ruleNumber' and remove them from the body
    let ruleVals = document.querySelectorAll('.ruleNumber');
    ruleVals.forEach(ruleVal => {
      ruleVal.remove();
    });
        //get all elements with a class of 'color' and remove them from the body
    let colorVals = document.querySelectorAll('.color');
    colorVals.forEach(colorVal => {
      colorVal.remove();
    });
    //Call the function to create everything again on the page providing it the new color as an argument and the same size
        all(size,colorOn.value);
    })

//create a break element    
const brk=document.createElement('br');
//give it a class attribute
brk.setAttribute('class','ruleNumber')
//add it to the body
body.appendChild(brk);

//create a label element
let ruleLabel=document.createElement('label');
//give it a class attribute
ruleLabel.setAttribute('class','ruleNumber');
//give it text content
ruleLabel.textContent='Select a rule number or toggle each rule: '
//add it to the body
body.appendChild(ruleLabel);


//create an input element
let ruleNumber=document.createElement('input');
//give it a type attribute 
ruleNumber.setAttribute('type','number')
//give it a class attribute
ruleNumber.setAttribute('class','ruleNumber')
//give it a min attribute
ruleNumber.setAttribute('min','0')
//give it a max attribute
ruleNumber.setAttribute('max','255')
//add it to the body 
body.appendChild(ruleNumber);

//create a break element
const brk2=document.createElement('br');
//give it a class attribute 
brk2.setAttribute('class','rand')
//add it to the body
body.appendChild(brk2);

//create a label element
const randLabel=document.createElement('label');
//give it a class attribute
randLabel.setAttribute('class','rand')
//give it text content
randLabel.textContent='Randomness slider: '
//add it to the body
body.appendChild(randLabel)

//create an input element
const rand=document.createElement('input');
//give it a type attribute
rand.setAttribute('type','range')
//give it a min attribute
rand.setAttribute('min','0')
//give it a max attribute
rand.setAttribute('max','100')
//give it a step attribtue
rand.setAttribute('step','1')
//give it a value attribute
rand.setAttribute('value','0')
//give it a class attribute
rand.setAttribute('class','rand')
//add it to the body
body.appendChild(rand);

//create an output element
const randOutput=document.createElement('output');
//give it a class attribute
randOutput.setAttribute('class','rand');
//add it to the body
body.appendChild(randOutput);


// create a div element that will contain all the rules
const ruleBox=document.createElement('div');
//give it a class attribute
ruleBox.setAttribute('class','ruleBox')
//add it to the body
body.appendChild(ruleBox);
//Initialize the eight possible states/rules
for(let i=0;i<8;i++){
    //create a div element that will represent a single rule
    const ruleElement=document.createElement('div');
    //give it a class attribute attribute
ruleElement.setAttribute('class','ruleElement')
//add it to the body
ruleBox.appendChild(ruleElement);
//Initial four cells to describe each rule
for(let j=0;j<4;j++){
    //create a dive element to represent a cell
    const ruleCell=document.createElement('div');
    //give it a class attribute
    ruleCell.setAttribute('class','ruleCell')
    //give it a name attribute
    ruleCell.setAttribute('name',''+j)
    //give it an id attribute
    ruleCell.setAttribute('id','rule'+i+j)
    //add it to the body
    ruleElement.appendChild(ruleCell);
    //set the following cells' color to white
        if(''+i+j==00||''+i+j==01||''+i+j==02||''+i+j==10||''+i+j==11||''+i+j==20||''+i+j==22||''+i+j==30||''+i+j==41||''+i+j==42||''+i+j==51||''+i+j==62){
            ruleCell.style.backgroundColor='white';
        }
        //set the remaining cells' color to the color provided by the function argument
        else ruleCell.style.backgroundColor=cellsOn;


//These are the cells that the user can interact with
if(j===3){
    //Add an event listener to each of these cells that listens for a click and applies the following function
    ruleCell.addEventListener('click',function(){
        //if the color of the cell was originally white, change it to the cellsOn color and update the rules array 
        if(ruleCell.style.backgroundColor=='white'){
 ruleCell.style.backgroundColor=cellsOn;
rules[''+i]=true;
        }
        //Otherwise, change the color to white and update the rules array
else {
   ruleCell.style.backgroundColor='white';
rules[''+i]=false;
    }

    //if the 2d cells array has something at its second index, meaning all the generations of cells have already been drawn, then reset 
    if(cells[1]!=null){
        //loop through all the elements of the container containing the generations of cells and delete them except for the initial generation
for(let i=1;i<256;i++){
for(let j=0;j<size;j++){
    panel.querySelector('.child').remove();
}
}
}
//Create the universe of cells again with the updated rules array
    creatUni(randomValue);
    //if the index in the rules array corresponding to the clicked cell is true then increase the rulenumber by 2 raised to i, otherwise, decrease
if(rules[''+i]===true)ruleNum+=(2**i);
else ruleNum-=(2**i);
//give the msg updated text content
msg.textContent = 'This is rule number: '+ruleNum;
    });   
}
}
}
//display the initial text content
msg.textContent = 'This is rule number: '+ruleNum;
//add it to the body
body.appendChild(msg);

//create a div element which will contain all the generations of the cells
const panel=document.createElement('div');
//give it an id attribute 
panel.setAttribute('id','main');
//make the grid have 'size'(determined by the all function argument) columns per row
panel.style.gridTemplateColumns='repeat('+size+',1fr)';
//add it to the body
body.appendChild(panel)
//loop to create the top row of the universe of cells
    for(let i=0;i<size;i++){
        //each cell is a div element
        const box = document.createElement('div');
        //all the cells have class "box"
        box.setAttribute('class','box');
        //Every cell in the top row has its own name specified by its position
        box.setAttribute('name',''+i)
        //add each box to the panel
        panel.appendChild(box);
        //set the initial color to cellsOn
        box.style.backgroundColor=cellsOn;
        //similarly set the initial state to true
        cells[0].push(true);
        //A function to toogle the color and update the corresponding state in the 2d array
        box.addEventListener('click',function(){
            if(box.style.backgroundColor=='white'){
    box.style.backgroundColor=cellsOn;
cells[0][box.getAttribute('name')]=true;
            }
else {
box.style.backgroundColor='white';
cells[0][box.getAttribute('name')]=false;
        }
    //if the 2d cells array has something at its second index, meaning all the generations of cells have already been drawn, then reset 
        if(cells[1]!=null){
    //loop through all the elements of the container containing the generations of cells and delete them except for the initial generation
for(let i=1;i<256;i++){
    for(let j=0;j<size;j++){
        panel.querySelector('.child').remove();
    }
    }
}
//Create the universe of cells again with the updated initial states
        creatUni(randomValue);
        });       
    }

    // give randOutput text content equal to the value of the input 'rand'
    randOutput.textContent = rand.value+' %';
    //add an event listener to the input rand that listens for any input and repsonds with the following function
    rand.addEventListener('input', function() {
        //multiply the provided input by 0.01 to make it a numeber between 0 and 1
        randomValue=rand.value*0.01;
        //update the text content 
        randOutput.textContent = rand.value+' %';

      //if the 2d cells array has something at its second index, meaning all the generations of cells have already been drawn, then reset 
        if(cells[1]!=null){
     //loop through all the elements of the container containing the generations of cells and delete them except for the initial generation
    for(let i=1;i<256;i++){
    for(let j=0;j<size;j++){
        panel.querySelector('.child').remove();
    }
    }
    }
    //Create the universe of cells again with the randomValue argument
        creatUni(randomValue);
      });


//function that takes in a number as an argument and creates all of the generatioins of cels provided the rules and states of the initial generation
 function creatUni(random){
    //create 256 generations of cells
for(let i=1;i<256;i++){
    //array representing the current generation
let newCells=[];
//add the array to the 2d array of all the cells
cells.push(newCells);
//for every cell in the generation
    for(let j=0;j<size;j++){
        //create an array to hold the state of the cell in the previous generation at the same position and that cell's left and right neighbors
        let curr=[];
        //get the cell's left neighbor's state. If the cell is at position 0, then its left neighbor is the rightmost cell
        if(j===0)curr.push(cells[i-1][size-1]);
        else curr.push(cells[i-1][j-1]);
        //get the cell's state.
        curr.push(cells[i-1][j])
        //get the cell's right neighbor's state. If the cell is at position i-1, then its right neighbor is the leftmost cell
        if(j===size-1)curr.push(cells[i-1][0]);
        else curr.push(cells[i-1][j+1]);
//APply the coressponding corresponding rule based on the 3 states collected
        if(curr[0]===false&curr[1]===false&curr[2]===false)
        cells[i][j]=rules[0];
        else if(curr[0]===false&curr[1]===false&curr[2]===true)
        cells[i][j]=rules[1];
        else if(curr[0]===false&curr[1]===true&curr[2]===false)
        cells[i][j]=rules[2];
        else if(curr[0]===false&curr[1]===true&curr[2]===true)
        cells[i][j]=rules[3];
        else if(curr[0]===true&curr[1]===false&curr[2]===false)
        cells[i][j]=rules[4];
        else if(curr[0]===true&curr[1]===false&curr[2]===true)
        cells[i][j]=rules[5];
        else if(curr[0]===true&curr[1]===true&curr[2]===false)
        cells[i][j]=rules[6];
        else if(curr[0]===true&curr[1]===true&curr[2]===true)
        cells[i][j]=rules[7];
               //each cell is a div element
               const box = document.createElement('div');
               //all the cells have class "box"
               box.setAttribute('class','child');
               //add each box to the panel
               panel.appendChild(box);
               //Use the randomness variable to switch a cell's state to the opposite state and update the 2d array
               if(Math.random()<random){
               if(cells[i][j]===false)cells[i][j]=true;
               else cells[i][j]=false;
               }
//set the color of the cell based on its state
               if (cells[i][j]===true)box.style.backgroundColor=cellsOn;
               
               else box.style.backgroundColor='white';
               
               
    }
}
}
//Add an event listener to the element ruleNumber that listens for input and applies the following function
ruleNumber.addEventListener('input', function(){
    //convert the input to a binary number
    let bin=Number(ruleNumber.value).toString(2);
    //update all eight rules/possible states
    for(let i=0;i<8;i++){
        //get the cell in each rule that can be toggled
        let rulerep=document.getElementById('rule'+i+'3')
        //while the binary string has values do the following
        if(bin.length-i>0){
            //if the character is 1 and the cell is off, click it
if(bin.charAt(bin.length-i-1)==1 & rulerep.style.backgroundColor=='white')rulerep.click();
            //if the character is 0 and the cell is on, click it
else if(bin.charAt(bin.length-i-1)==0 & rulerep.style.backgroundColor!='white')rulerep.click();
        }
        else {
        //if the cell is on, click it
            if(rulerep.style.backgroundColor!='white')rulerep.click();
        }
    }
})
//variable representing the submmit button for size
let uni=document.querySelector('.submit');
//variable representing the input for the size
let uniSize=document.querySelector('#universeSize')
//add an event listener to the submit element that listens for a click and applies the following fucntion
uni.addEventListener('click',function(){
    //reset the display:
    //get all elements with a class of 'ruleBox' and remove them from the body
    let boxes = document.querySelectorAll('.ruleBox');
boxes.forEach(box => {
  box.remove();
});
    //get all elements with a class of 'msg' and remove them from the body
let messages = document.querySelectorAll('.msg');
messages.forEach(message => {
  message.remove();
});
    //get all elements with an id of 'main' and remove them from the body
let panels = document.querySelectorAll('#main');
panels.forEach(pan => {
  pan.remove();
});
    //get all elements with a class of 'rand' and remove them from the body
let randins = document.querySelectorAll('.rand');
randins.forEach(randin => {
  randin.remove();
});
    //get all elements with a class of 'ruleNumber' and remove them from the body
let ruleVals = document.querySelectorAll('.ruleNumber');
ruleVals.forEach(ruleVal => {
  ruleVal.remove();
});
    //get all elements with a class of 'color' and remove them from the body
let colorVals = document.querySelectorAll('.color');
colorVals.forEach(colorVal => {
  colorVal.remove();
});
    //Call the function to create everything again on the page providing it the new size as an argument and the same color
    all(Number(uniSize.value),cellsOn);
})
}
    //Call the function to create everything initially on the page providing it a size and a color
all(32,'black');