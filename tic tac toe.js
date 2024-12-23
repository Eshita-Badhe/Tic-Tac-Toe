alert("Start with X!");
let flag=new Array(9).fill(-1);
let btn=new Array(9);
let win=-1;
let player="X";
let winner;
for(let i=0;i<9;i++)
{
    btn[i]=document.getElementsByTagName("button")[i];
}
function play(boxn)
{
    for(let i=0;i<9;i++)
    {
        if(boxn==i)
        {
            btn[i].textContent=player;
            if(player=="X")
            {
                flag[i]=1;
                player="O";
            }
            else
            {
                flag[i]=0;
                player="X";
            }
        }
    }
    if(check())
    {
        if(win==0)
        {
            winner="O won!";
        }
        else
        {
            winner="X won"
        }
        result();
    }
    if(isTie())
    {
        winner="TIE..!";
        result();
    }
}

function check()
{
    const winPatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [3,4,6]
    ];

    for(let i=0;i<2;i++)
    {
        for(let pat of winPatterns)
        {
            const [a,b,c]=pat; 
            if(flag[a]==i&&flag[b]==i&&flag[c]==i)
            {
                win=i;
                return true;
            }
        }
    }
    
    if(win==-1)
    {
        return false;
    }
}

function isTie()
{
    return flag.every(cell => cell !== -1);
}

function result()
{
    let result=document.getElementById("result");
    let p=document.createElement("p");
    p.textContent=winner;
    result.appendChild(p);
    let reset=document.createElement("button");
    reset.textContent="Replay!";
    reset.style.padding="0px";
    reset.style.backgroundColor="blueviolet";
    result.appendChild(reset);
    reset.onclick = () => 
    {
        location.href="index.html";
    }
}
