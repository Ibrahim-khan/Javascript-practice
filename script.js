console.log(5+5);

				document.getElementById("demo").innerHTML = 5 + 6;

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

							     const number8 = [10,20,30,5,15,40];
								   let text22 = " ";
								     number8.forEach(function16);
									  document.getElementById('demo49').innerHTML = number8;
									   document.getElementById('demo50').innerHTML = text22;
									     function function16(value){
										   text22 += value * 2 + "<br>";
										 }
										      document.getElementById('demo51').innerHTML = number8;
											    const number9 = number8.map(function17);
												  document.getElementById('demo52').innerHTML = number9;
												    function function17(value){
													  return value * 2;
													}
													    document.getElementById('demo53').innerHTML = number8;
														  let number10 = number8.filter(function18);
														    document.getElementById('demo54').innerHTML = number10;
															  function function18 (value){
																return value > 20;
															  }
															       document.getElementById('demo55').innerHTML ="The aray number is: " + number8;
																     const number11 = number8.reduce(function19);																   
																	   document.getElementById('demo56').innerHTML ="The sum is: " + number11;
																	     function function19(total,value){
																			return total + value;
																		 }
																		      const number12 = number8.reduce(function20,100);
																			   document.getElementById('demo57').innerHTML ="The sum is: " + number12;
																			    function function20(total,value){
																					return total + value;
																				}
																		    
																				document.getElementById('demo58').innerHTML = number8;
																			  let allover20 = number8.every(function21);
																			document.getElementById('demo59').innerHTML = "All over 20 : "+allover20;
																		  function function21 (value){
																			return value > 20;
																		  }
																	 let someover20 = number8.some(function22);
																   document.getElementById('demo60').innerHTML = "Some over 20 : " + someover20;
																function function22 (value){
																	return value > 20;
																}
															document.getElementById('demo61').innerHTML = fruits2;
														  const keys = fruits2.keys();
														let text23 = "";
													  for (let x of keys) {
														text23 += x + "<br>";
													  }
												  document.getElementById('demo62').innerHTML = text23;

												const text24 = fruits2.entries();
											  for(let x of text24){
												document.getElementById('demo63').innerHTML += x + "<br>";
											  }
										 const months1 = ["January", "February", "April", "May"];
									   const months2 = months1.with(2, "March");
									 document.getElementById('demo64').innerHTML = months2;
								  const d = new Date();
								document.getElementById('demo65').innerHTML = d;
							  const d1 = new Date("2023-01-02");
							document.getElementById("demo66").innerHTML = d1.getFullYear();
						  document.getElementById("demo67").innerHTML ="getMonth: " + (d.getMonth() + 1)+","+" " + "getDate: "+ d.getDate()
						    +","+ " " + "getHours: " +d.getHours()+","+" "+"getMinuts: "+d.getMinutes()
							+","+" "+"getSeconds"+d.getSeconds()+","+" "+"getMilisonds: "+d.getMilliseconds()+";"+"<br>"
							+"getDay: "+ d.getDay();
					const Months3 = ["January","February","March","April","May","June","July","August","September","October",
						                 "November","December"];
				 const month = Months3[d.getMonth()];
			   document.getElementById('demo68').innerHTML = month;
			 const days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
		   const day = days[d.getDay()];
		 document.getElementById("demo69").innerHTML = day;
	   document.getElementById("demo70").innerHTML = Math.PI;
	document.getElementById("demo71").innerHTML = "Math.round(4.4, 4.5): "+ Math.round(4.4) + ", " + Math.round(4.6) + "<br>" +
	  "Math.ceil(4.4): " + Math.ceil(4.4) + "<br>" + "Math.floor(4.7): " + Math.floor(4.7)+"<br>"+ "Math.trunc(4.7): " + Math.trunc(4.7)+
	  "<br>" + "Math.sign(4): " + Math.sign(4)+"<br>"+"Math.pow(8,2): "+Math.pow(8,2)+"<br>"+"Math.sqrt(64): "+Math.sqrt(64)+
	  "<br>" + "Math.abs(-4.7): "+Math.abs(-4.7)+"<br>"+"The sine value is 90 degrees is: "+Math.sin(90 * Math.PI/180)+
	  "<br>" + "The cosine value of 0 degrees is: "+Math.cos(0 * Math.PI / 180)+"<br>"+"Height value is a list of argument: "+
	  Math.max(0,30,100,150,-40,-200)+"<br>"+"Lowest value is a list of argument: "+Math.min(0,30,100,150,-40,-200)+"<br>"+
	  "Math.log(0): "+ Math.log(0)+"<br>"+"Math.log(1): "+ Math.log(1)+"<br>"+"Math.log(2): "+ Math.log(2)+"<br>"+"Math.log(10): "+
	  Math.log(10)+"<br>"+"Math.log10(1000): "+Math.log10(1000);
       
	     function function14(){
			let age = document.getElementById('age').value;
			let voteable = (age < 18) ? "Not enough" : "Perfect";
			document.getElementById('demo72').innerHTML = voteable + " too vote.";
		 }
																	   

										       
	  
									
											     






