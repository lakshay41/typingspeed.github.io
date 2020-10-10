var availabletext=['Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.',
'Medical transcription, also known as MT, is an allied health profession dealing with the process of transcribing voice-recorded medical reports that are dictated by physicians, nurses and other healthcare practitioners. Medical reports can be voice files, notes taken during a lecture, or other spoken material. These are dictated over the phone or uploaded digitally via the Internet or through smart phone apps.',
'Do something for somebody every day for which you do not get paid.',
'The anger of a good man lasts an instant; that of a meddler two hours; that of a base man a day and a night; and that of a great sinner until death.'];


var button=document.getElementById('bts');
var button1=document.getElementById('bts1');
var msg=document.getElementById('msg');
var text=document.getElementById('text');
var starttime,endtime;

function wordcounter(userwrite)
{
	var count=userwrite.split(" ").length;
	return count;
}
function changetext()
{
	if(button.value=='Start Again')
	{
	randomno=Math.floor(Math.random()*availabletext.length);
	msg.innerHTML=availabletext[randomno];
	}
	else if(button.value=='Start')
	{
	randomno=Math.floor(Math.random()*availabletext.length);
	msg.innerHTML=availabletext[randomno];
	}
}
function compare(str1,str2)
{
	var count=0;
	var word1=str1.split(" ");
	var word2=str2.split(" ");
	word1.forEach(function(item,index){
		if(item==word2[index])
		{
			count++;
		}
	})
	return count;
}
function starttyping()
{
	var date=new Date();
	starttime=date.getTime();
	button.value="Done";

}
function starttyping1()
{
	changetext();
	var date=new Date();
	starttime=date.getTime();
	button.value="Done";
}

function endtyping()
{
	var date=new Date();
	endtime=date.getTime();
	var totaltime=((endtime-starttime)/1000); 
	var userwrite=text.value;
	var wordcount=wordcounter(userwrite);
	var speed=Math.round((wordcount/totaltime)*60);
	var correct=compare(msg.innerHTML,userwrite);
    var result=((correct/msg.innerHTML.length)*100);
	msg.innerHTML="Your Typing Speed Is "+speed+" Words Per Minute"+" And You Have "+result+" % Accuracy.....";
	text.value="";

}

function change(){
	if(button.value=='Start')
	{
		text.disabled=false;
		starttyping();
	}
	else if(button.value=='Start Again')
	{
		text.disabled=false;
		starttyping1();
	}
	else if(button.value=='Done')
	{
		text.disabled=true;
		button.value="Start Again";
		endtyping();
	}

}