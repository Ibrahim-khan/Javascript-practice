console.log(5+5);

function function1(){
	document.getElementById("demo2").innerHTML = "Hi Ibrahim";
	document.getElementById("demo3").innerHTML = "How are you?";
}

function function2(){
	var x,y,z;
	x = 6;
	y = x * 5;
	z = x + y;
	document.getElementById("demo4").innerHTML = z * 5;
}

function function3(p1, p2){
	return p1 * p2;
}
let result1 = function3(4, 5);
document.getElementById("demo10").innerHTML = result1;

				
				function function4(f){
					return (5/9) * (f-32);
				}
				let result2 = function4(100);
				document.getElementById("demo11").innerHTML = result2;
				
//Function date start
function function5(){
	document.getElementById("demo15").innerHTML = Date();
}
//Function date end

		//Upper case and Lower case start
		function function6(){
			let text11 = document.getElementById('demo23').innerHTML;
			document.getElementById('demo23').innerHTML = text11.toUpperCase();
		}
		
		function function7(){
			let text12 = document.getElementById('demo24').innerHTML;
			document.getElementById('demo24').innerHTML = text12.toLowerCase();
		}
		//Upper case and Lower case end
		  const  fruits = ["Mango","Banana","Apple","Orange"];
		   let flen = fruits.length;
		     let text20 = "<ul>";
			   for(let i = 0; i<flen; i++) {
				text20 += "<li>" + fruits[i] + "</li>";
			   }
			 text20 +="<ul>";
		document.getElementById('demo26').innerHTML = text20;

		text21 = "<ul>";
		 fruits.forEach (function8);
		  document.getElementById('demo27').innerHTML = text21;
		function function8(value){
			text21 += "<li>" + value + "</li>";
		} 
		  
		const  fruits1 = ["Mango","Banana","Apple","Orange","Kiwi", "Papaya"];
		  document.getElementById("demo28").innerHTML = fruits1.join(" * ");
		    function function9(){
				fruits1.push("Lemon");
				  document.getElementById('demo28').innerHTML = fruits1.join(" * ");
			}
			         const number4 = ["One","Two"];
					   const number1 = ["Three", "Four"];
					     const number2 = ["Five", "Six"];
						   const number3 = number4.concat(number1,number2, "Seven");
						     document.getElementById('demo29').innerHTML = number3;
							   document.getElementById("demo30").innerHTML = fruits1;
							     //document.getElementById('demo31').innerHTML = fruits1.copyWithin(2,0);
								   document.getElementById('demo32').innerHTML = fruits1.copyWithin(2,0,2);
								     const number5 = [[1,2],[3,4],[5,6]];
									   const number6 = number5.flat();
									     document.getElementById('demo33').innerHTML = number6;
										   document.getElementById('demo34').innerHTML = fruits1;
										     fruits1.splice(2,0, "Lemon", "Blackberry");											   
											   document.getElementById ('demo35').innerHTML = fruits1;
											     const  fruits2 = ["Mango","Banana","Apple","Orange","Kiwi", "Apple"];
												   let position = fruits2.indexOf("Apple");
												     document.getElementById('demo36').innerHTML = fruits2;
												       document.getElementById('demo37').innerHTML ="Apple is found in position: " + position;
													 let position1 =  fruits2.lastIndexOf('Apple');
												   document.getElementById("demo38").innerHTML="Apple is found in last position: " + position1;
												 document.getElementById("demo39").innerHTML= fruits2.includes('Orange');
											  const number7 = [4,10,20,30,40,50,35];
											let first1 = number7.find(function10);
										   let high = number7.findLast(x => x > 30);
										 let pos = number7.findLastIndex(x => x >40);
									   document.getElementById('demo40').innerHTML ="number: " + number7 + "<br>" + 
									"First number over 20: " + first1 + "<br>" + "First number over 20 has index: " + 
								  number7.findIndex(function10) + "<br>" + "Last high number of 30 is: " + high + "<br>" +
								"Last high number of 40 is position: " + pos;
							  function function10 (value,index,array){
											return value>20;
										 }
						document.getElementById('demo41').innerHTML = fruits2;
					  fruits2.sort();
					document.getElementById('demo42').innerHTML = fruits2;
				  fruits2.reverse();
				document.getElementById('demo43').innerHTML = fruits2;
			  const months = ["Jan","Feb","Mar","Apr"];
			const sorted = months.toSorted();
		  const reversed = months.toReversed();
		document.getElementById('demo44').innerHTML = months + "<br>"+ "Sorted Months: " + sorted + "<br>" + "Reversed Months: "+ reversed;
	  document.getElementById('demo45').innerHTML ="Number: "+ number7;	
	function function11(){
		number7.sort();
		document.getElementById('demo46').innerHTML = number7;
	}		
  function function12(){
	number7.sort(function(a,b){
		return a - b
	});
    document.getElementById('demo46').innerHTML = number7 +"<br>" + "and lowest number is: " + number7[0];
  }	  
function function13(){
	number7.sort(function(a,b){
		return b - a
	});
	document.getElementById('demo46').innerHTML = number7 +"<br>" + "and highest number is: " + number7[0];;
}
  const cars1 = [
	{type:"Volvo", year:2016},
	{type:"Saab", year:2001},
	{type:"BMW", year:2010}
  ];
      cars1.sort(function(a,b){
		return a.year - b.year
	  });
	    function14();
		  function function14(){
			document.getElementById("demo47").innerHTML = 
			  cars1[0].type + " " + cars1[0].year + "<br>" +
			  cars1[1].type + " " + cars1[1].year + "<br>" +
			  cars1[2].type + " " + cars1[2].year;
		    }
			       const myArr = [
					{name:"X00",price:100 },
					  {name:"X01",price:100 },
					    {name:"X02",price:100 },
						  {name:"X03",price:100 },
							{name:"X04",price:110 },
							  {name:"X05",price:110 },
								{name:"X06",price:110 },
								  {name:"X07",price:110 },
									{name:"X08",price:120 },
									  {name:"X09",price:120 },
										{name:"X10",price:120 },
									{name:"X11",price:120 },
								  {name:"X12",price:130 },
								{name:"X13",price:130 },
							  {name:"X14",price:130 },
							{name:"X15",price:130 },
				 		  {name:"X16",price:140 },
						{name:"X17",price:140 },
					  {name:"X18",price:140 },
					{name:"X19",price:140 }
				   ];
				   		myArr.sort((p1,p2) => {
						  if (p1.price < p2.price) return -1;
						  if (p1.price > p2.price) return 1;
						  return 0;
						});
							let txt = "";
							myArr.forEach(function15);
							  function function15(value){
								txt += value.name + " " + value.price + "<br>";
							  }
							   document.getElementById('demo48').innerHTML = txt;
	  
									
											     






