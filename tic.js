let cell = document.querySelectorAll('.cell');
var play = document.querySelector('.playground');
var winner = document.querySelector('.winner');
let op = document.querySelectorAll('.op');
let star = document.querySelector('.start');
let menu = document.querySelector('.menu');

let mode 
op.forEach(function(element) {
    element.addEventListener('click', () => {
       
        op.forEach(function(element) {element.classList.remove('act');});
        element.classList.add('act');
        let act =document.querySelector('.act')
        mode = act.innerHTML;
    });
});
function start()

{
    star.style.display = 'none';
    menu.style.display = 'none';
    play.style.display = 'grid';
    switch (mode) {
        case "EASY":
            cell.forEach(function(element)
                {
                function click()
                    {
                            element.innerHTML = x;
                            c++;
                            element.removeEventListener('click',click);
                            if(c<5){easy();
                            if (check()!=null)
                            {
                                if(check()==1)
                                {winner.innerHTML = 'O wins!!';}
                                else if(check()==-1)
                                {winner.innerHTML ='x wins!!';}
                                else if(check()==0)
                                {winner.innerHTML='Draw!!'}
                            }};
                           
                            element.removeEventListener('click',click);
                    }
                            element.addEventListener('click', click);
                }
            )
            break;
        case "AI":
            cell.forEach(function(element)
                {
                function click()
                    {
                            element.innerHTML = x;
                            c++;
                            if(c<5){machine();};
                            element.removeEventListener('click',click);
                            if (check()!=null)
                            {
                                if(check()==1)
                                {winner.innerHTML = 'O wins!!';}
                                else if(check()==-1)
                                {winner.innerHTML ='x wins!!';}
                                else if(check()==0)
                                {winner.innerHTML='Draw!!'}
                            }
                    }
                            element.addEventListener('click', click);
                }
            )
            break;
        case "2-player":
            let turn = 0;
            cell.forEach(function(element)
                {
                function click()
                    {   
                        if(turn==0){element.innerHTML = x;turn=1;}
                        else if(turn==1){element.innerHTML =o;turn=0;}
                
                        element.removeEventListener('click',click);
                        if (check()!=null)
                        {
                            if(check()==1)
                            {winner.innerHTML = 'O wins!!';}
                            else if(check()==-1)
                            {winner.innerHTML ='x wins!!';}
                            else if(check()==0)
                            {winner.innerHTML='Draw!!'}
                        }
                    }
                            element.addEventListener('click', click);
                }
            )
            break;
        default:
            break;
    }
}

var x ='x'// `<i class="fa-solid fa-xmark"></i>`;
var o = 'o'// `<i class="fa-solid fa-o"></i>`
// cell[2].innerHTML = o;
let c = 0;


    
function easy()
{
     {    for(var i = 0; i < 9; i++)
     {  const randomNumber = Math.floor(Math.random() * 9);
        if(cell[randomNumber].innerHTML=="")
        { 
            cell[randomNumber].innerHTML = o;
            c = 0;
           
            break;
        }
    }
}  
}

function machine()
{       cell[bestMove()].innerHTML = o;
    
    function bestMove()
    {         
        let bestscore = -Infinity;
        let bmove;
        for (let i=0; i<9;i++)
        {
            if(cell[i].innerHTML=="")
            {   
                cell[i].innerHTML = o;
                let score = minimax(cell,0,false);
                cell[i].innerHTML = "";
                if (score > bestscore)
                {
                    bestscore = score;
                    bmove = i;
                }
            }
        }
        return bmove;
    }


 
    function minimax(cell,depth,ismaximizing)

    {
        let bestscoree ;
        let result = check();
        
        if  (result !=null)
        {
            return result;
        }
        if (ismaximizing)
        {   let bscore = -Infinity;
            for(var i = 0; i < 9; i++)
            {
                if(cell[i].innerHTML=="")
                {
                    cell[i].innerHTML = o;
                    let tscore = minimax(cell, depth+1, false);
                    cell[i].innerHTML = "";
                    bscore = Math.max(bscore, tscore);
                    bestdepth = 
                    bestscoree = bscore;
                }
            }
        }
        else
        {
            let best = Infinity;
            for(var i = 0; i < 9; i++)
            {
                if(cell[i].innerHTML=="")
                {
                    cell[i].innerHTML = x;
                    let tscore = minimax(cell, depth+1, true);
                    cell[i].innerHTML = "";
                    best = Math.min(best, tscore);
                    bestscoree = best;
                }
            }
        }
        return bestscoree;
    }
}            
function check() 
{   
    if(cell[0].innerHTML==cell[1].innerHTML && cell[1].innerHTML==cell[2].innerHTML &&cell[0].innerHTML!="")
        
        if(cell[0].innerHTML==x){
            return(-1);
        }
        else
        {
            return(1);
        }

    if(cell[3].innerHTML==cell[4].innerHTML && cell[4].innerHTML==cell[5].innerHTML &&cell[3].innerHTML!="")
    
        if(cell[3].innerHTML==x){
            return(-1);
        }
        else
        {
            return(1);
        }
    
    if(cell[6].innerHTML==cell[7].innerHTML && cell[7].innerHTML==cell[8].innerHTML &&cell[6].innerHTML!="")

        if(cell[6].innerHTML==x){
            return(-1);
        }
        else
        {
            return(1);
        } 

    if(cell[0].innerHTML==cell[3].innerHTML && cell[3].innerHTML==cell[6].innerHTML &&cell[0].innerHTML!="")

        if(cell[0].innerHTML==x){
            return(-1);
        }
        else
        {
            return(1);
        } 

    if(cell[1].innerHTML==cell[4].innerHTML && cell[4].innerHTML==cell[7].innerHTML &&cell[1].innerHTML!="")

        if(cell[1].innerHTML==x){
            return(-1);
        }
        else
        {
            return(1);
        } 

    if(cell[2].innerHTML==cell[5].innerHTML && cell[5].innerHTML==cell[8].innerHTML &&cell[2].innerHTML!="")

        if(cell[2].innerHTML==x){
            return(-1);
        }
        else
        {
            return(1);
        } 

    if(cell[0].innerHTML==cell[4].innerHTML && cell[4].innerHTML==cell[8].innerHTML &&cell[0].innerHTML!="")

        if(cell[0].innerHTML==x){
            return(-1);
        }
        else
        {
            return(1);
        } 

    if(cell[2].innerHTML==cell[4].innerHTML && cell[4].innerHTML==cell[6].innerHTML &&cell[2].innerHTML!="")

        if(cell[2].innerHTML==x)
        {
            return(-1);
        }
        else
        {
            return(1);
        } 
    else {return(checkTie());};                                                  
}
function checkTie() {
    let isTie = true;
    cell.forEach(function(card) {
        if (card.innerHTML === "") {
            isTie = false;
        }
    });
    if (isTie) {
        return 0;
    }
}