function all(size){
//2d array keeping track of states
let cells=[];
//first row of the universe
let firstGen=[];
//add it to the cells array
cells.push(firstGen);
    //body element
    const body=document.body;
    //panel containing the grid
    //array of the rules
    const rules=[true,true,true,true,true,true,true,true]
    let ruleNum=255;
let msg = document.createElement('h2');
msg.setAttribute('class','msg')

const ruleBox=document.createElement('div');
ruleBox.setAttribute('class','ruleBox')
body.appendChild(ruleBox);
for(let i=0;i<8;i++){
    const ruleElement=document.createElement('div');
ruleElement.setAttribute('class','ruleElement')
ruleBox.appendChild(ruleElement);
for(let j=0;j<4;j++){
    const ruleCell=document.createElement('div');
    ruleCell.setAttribute('class','ruleCell')
    ruleCell.setAttribute('name',''+j)
    ruleCell.setAttribute('id','rule'+i+j)
    ruleElement.appendChild(ruleCell);
        //set the initial color to black
        if(''+i+j==00||''+i+j==01||''+i+j==02||''+i+j==10||''+i+j==11||''+i+j==20||''+i+j==22||''+i+j==30||''+i+j==41||''+i+j==42||''+i+j==51||''+i+j==62){
            ruleCell.style.backgroundColor='white';
        }
        else ruleCell.style.backgroundColor='black';



if(j===3){
    ruleCell.addEventListener('click',function(){
        if(ruleCell.style.backgroundColor==='black'){
ruleCell.style.backgroundColor='white';
rules[''+i]=false;

        }
else {ruleCell.style.backgroundColor='black';
rules[''+i]=true;
    }
    if(cells[1]!=null){
        for(let i=1;i<256;i++){
        console.log(cells.pop());
    }
for(let i=1;i<256;i++){
for(let j=0;j<size;j++){
    panel.querySelector('.child').remove();
}
}
}
    creatUni();
if(rules[''+i]===true)ruleNum+=(2**i);
else ruleNum-=(2**i);
msg.textContent = 'This is rule number: '+ruleNum;
    });   
}
}
}

msg.textContent = 'This is rule number: '+ruleNum;
body.appendChild(msg);

const panel=document.createElement('div');
//panel id
panel.setAttribute('id','main');
panel.style.gridTemplateColumns='repeat('+size+',1fr)';
//add panel to the body of the html doc
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
        //set the initial color to black
        box.style.backgroundColor='black';
        //similarly set the initial state to true
        cells[0].push(true);
        //A function to toogle the color and update the state
        box.addEventListener('click',function(){
            if(box.style.backgroundColor==='black'){
box.style.backgroundColor='white';
cells[0][box.getAttribute('name')]=false;
            }
else {box.style.backgroundColor='black';
cells[0][box.getAttribute('name')]=true;

        }
        if(cells[1]!=null){
            for(let i=1;i<256;i++){
            console.log(cells.pop());
        }
for(let i=1;i<256;i++){
    for(let j=0;j<size;j++){
        panel.querySelector('.child').remove();
    }
    }
}
        creatUni();
        });       
    }



 function creatUni(){
for(let i=1;i<256;i++){
let newCells=[];
cells.push(newCells);
    for(let j=0;j<size;j++){
        let curr=[];
        if(j===0)curr.push(cells[i-1][size-1]);
        else curr.push(cells[i-1][j-1]);
        curr.push(cells[i-1][j])
        if(j===size-1)curr.push(cells[i-1][0]);
        else curr.push(cells[i-1][j+1]);

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
               //set the color
               if (cells[i][j]===true)box.style.backgroundColor='black';
               else box.style.backgroundColor='white';
               
    }
}
}
let ruleNumber=document.querySelector('#ruleNumber');
ruleNumber.addEventListener('input', function(){
    let bin=Number(ruleNumber.value).toString(2);
    console.log(bin);
    for(let i=0;i<8;i++){
        let rulerep=document.getElementById('rule'+i+'3')
        if(bin.length-i>0){
if(bin.charAt(bin.length-i-1)==1 & rulerep.style.backgroundColor=='white')rulerep.click();
else if(bin.charAt(bin.length-i-1)==0 & rulerep.style.backgroundColor=='black')rulerep.click();
        }
        else {
            if(rulerep.style.backgroundColor=='black')rulerep.click();
        }
    }
})

let uni=document.querySelector('.submit');
let uniSize=document.querySelector('#universeSize')
uni.addEventListener('click',function(){
    let boxes = document.querySelectorAll('.ruleBox');
boxes.forEach(box => {
  box.remove();
});
let messages = document.querySelectorAll('.msg');
messages.forEach(message => {
  message.remove();
});
let panels = document.querySelectorAll('#main');
panels.forEach(pan => {
  pan.remove();
});
    all(Number(uniSize.value));
})
}
all(32);
