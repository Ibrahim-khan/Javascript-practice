
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
		       let day1;
			   switch (new Date().getDay()){
				case 0:
					day1 = "Sunday";
					break;

					case 1:
						day1 = "Monday";
						break;

						case 2: 
						    day1 = "Tuesday";
							break;

							case 3:
								day1 = "Wednesday";
								break;

						case 4:
							day1 = "Thursday";
							break;

					case 5:
						day1 = "Friday";
						break;

				case 6:
					day1 = "Saturday";
					break;
			   }
		document.getElementById('demo73').innerHTML = "Today is " + day1;
		  let day2;
		   switch (new Date().getDay()){
			case 0:
			case 6:
				day2 = "This is weekend";
				break;
				
				case 3:
				case 4:
					day2 = "This is middle week";

			default:
				day2 = "Looking forward to the weekend";
		   }
		   document.getElementById('demo74').innerHTML = day2;
		    const cars2 = ["BMW","TATA","TOYOTA","MAHINDRA","FORD","VOLVO"];
			 let text25 = "";
			  for(let i = 0; i<cars2.length; i++){
				text25 = text25 + cars2[i] + "<br>";
			  }
			      document.getElementById('demo75').innerHTML = text25;
				   const person4 = {fname: "Ibrahim", lname: "Khan", age:27};
				     let number13 = [10,20,30,40,50,60];
					   let text26 = "";
					     let text27 = "";
					     for(let x in person4){
							text26 += person4[x] + " ";
						 }
						   for(let x in number13){
							text27 += number13[x] + ", ";
						   }
						       document.getElementById('demo76').innerHTML = text26 +"<br><br>"+ text27;
							    let text28 = "";
								for(let x of cars2){
									text28 += x + ", ";
								}
								      document.getElementById('demo77').innerHTML = text28;
									    let text29 = "";
										 let i = 0;
										  while( i < 10){
											text29 += "the number is: " + i + "<br>";
											i++;
										  }
										      document.getElementById('demo78').innerHTML = text29;

											    let text30 = "";
												let j = 0;
												 do{
													text30 += "The number is: " + j + "<br>";
													 j++;
												 }
												      while(j<10);
												       document.getElementById('demo79').innerHTML = text30;
													    let text31 = "";
														  for(i = 0; i<10; i++){
															if(i===3){break;}
															text31 += "The number is: " + i + "<br>";
														  }

														      document.getElementById('demo80').innerHTML = text31;
															const name5 =  "W3schools";
														   let text32 = "";
														  for(let x of name5){
															text32 += x + "<br>";
														  }
														document.getElementById('demo81').innerHTML = text32;
													  const letter2 = ["a","b","c"];
													let text33 = "";
												  for (let x of letter2){
													text33+= x + ", ";
												  }
												document.getElementById('demo82').innerHTML = text33;
											  const letter3 = (["a","b","c"]);
											let text34 = "";
										  for (let x of letter3){
											text34+= x + ", ";
										  }
									document.getElementById('demo83').innerHTML = text34 +"<br>"+ "Text size: " + letter3.length;
								  const fruits3 = ([
									["Apple",500],
									["Banana",300],
									["Mango",200],
								  ]);
							let text35 = "";
						  for(let x of fruits3){
							text35+= x + "<br>";
						  }
					  document.getElementById('demo84').innerHTML = text35;
					  const letter4 = new Set(["a","b","c"]);					 
				  letter4.add("d");
				  letter4.add("e");
				let text36 = "";
				for(const x of letter4.values()){
					text36+= x + ", ";
				}
			document.getElementById('demo85').innerHTML ="Text size: "+ letter4.size + "<br>"+"Text is: "+text36;
		const fruits4 = new Map([
			["Apple",500],
			["Banana",300],
			["Mango",200],
		]);
		fruits4.set("Apple",400);
document.getElementById('demo86').innerHTML ="fruits4.set(Apple): "+ fruits4.get("Apple")+"<br>"+"fruits4.size: "+fruits4.size+
"<br>"+"fruits4.has(apples): "+fruits4.has("Apple");

		const fruits5 = new Map([
			["Apple",500],
			["Banana",300],
			["Mango",200]
		]);
		  let text37 = "";
		   fruits5.forEach (function(value, key){
			 text37+= key + ' = ' + value + "<br>"
		   })
		     document.getElementById('demo87').innerHTML = text37;

			   document.getElementById('demo88').innerHTML = 
			    
			   "'Ibrahim' is: " + typeof "Ibrahim" + "<br>" +
			     "3.14 is: " + typeof 3.14 + "<br>" +
			  	   "NaN is: " + typeof NaN + "<br>" +
			  		 "false is: " + typeof false + "<br>" +
			  		   "[1,2,3,4] is: " + typeof [1,2,3,4] + "<br>" +
			   			"{fname: 'Ibrahim', age: 27} is: " + typeof {fname:'Ibrahim', age:27} + "<br>" +
			  		 "new Date() is: " + typeof new Date() + "<br>" +
			  	   "function(){} is: " + typeof function(){} + "<br>" +
			     "myCar is: " + typeof myCar + "<br>" +
			   "null is: " + typeof null;

			      document.getElementById('demo89').innerHTML = "100 + 50 * 3 = " + (100 + 50 * 3) + "<br>" +
				    "(100 + 50) * 3 = " + (100 + 50) * 3 + "<br>" +
					"100 / 50 * 3 = " + 100 / 50 * 3;
					  
					   try{
						adddlert ("Welcome JavaScript");
					   }
					     catch(err){
							document.getElementById('demo90').innerHTML = err.message;
						 }
 							
						      function function23(){
								const message = document.getElementById('demo92');
								message.innerHTML = "";
								let x = document.getElementById('demo91').value;
								  
								   try{
									if (x == "") throw "empty";
									if (isNaN(x)) throw "not a number";
									x = Number(x);
									if(x<5) throw "too low";
									if(x>10) throw "too high";
								   }
											catch (err){
												message.innerHTML = "Input is " + err;
											}

							        }
												  var x20 = 5;
												   var x21 = 7;
												    var x22;
												     elem = document.getElementById("demo93");
													  elem.innerHTML = x20 + "<br>" + x21 +"<br>"+ x22;
													     x22 = 8;
														   const person5 = {
															   fname: "Ibrahim",
															   lname: "Khan",
															   age: 27,
															   fullname: function(){
																	return this.fname + " " + this.lname;
															   }
														   };
														         document.getElementById('demo94').innerHTML = person5.fullname();
														
															const person6 = {
																fullname(){
																	return this.fname + " " + this.lname; 
																}
															}
														const person7 = {
															fname: "Ibrahim",
															lname: "khan",
														}
													let x23 = person6.fullname.call(person7);
												document.getElementById('demo95').innerHTML = x23;
											  let function24 = (a , b) => a * b;
											document.getElementById('demo96').innerHTML = function24 (5 , 6);
										  let hello = "";
										hello = () => {
											return "Hello World!";
										}
									document.getElementById("demo97").innerHTML = hello();
								  class car3 {
									constructor(name6, year) {
										this.name = name6;
										this.year = year;
									}
								  }
							const myCar1 = new car3 ("Ford", 2014);
						  const myCar2 = new car3 ("Volvo", 2020);
						document.getElementById("demo98").innerHTML = myCar1.name + " " + myCar2.name;
					

  let sentence = "learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. if \
     you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular \
	  technologies to convert you from a no-stack to a full-stack developer. Lear with Sumit also deep dives onto advanced topics using \
	    the latest best practices for you seasoned web developer.";

		  let matchs = sentence.match(/sumit/ig);
		    let length1 = matchs ? matchs.length : "Not found";
			 let position2 = sentence.search(/sumit/i);
			   position2 =  position2 >= 0 ? position2 : "Not Found";

		          document.getElementById('demo100').innerHTML = length1 + "<br>" +   matchs + "<br>" + "First position: " + position2;
					  function linearSearch (arr, val){
						let length2 = arr.length;
						  for(let i = 0; i<length2; i++ ){
							if (arr[i] === val){
								return i;
								}
								  }
						         return "not found";
								  }
									 console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));

								  	//১ - ১০০ পর্যন্ত কোন সংখ্যা গুলো ৩,৫ এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য। 
									  /*	function fizzBuzz(number) {
										for(let i = 1; i <= number; i++) {
										  if(i % 15 === 0) {
											console.log(`${i} is FizzBuzz`);
											  } else if(i % 3 === 0){
												  console.log(`${i} is Fizz`);
												    }else if(i % 3 === 0){
													  console.log(`${i} is Buzz`);
													    } else {
														  console.log(i);
															}
														 	}
												             }
														    	fizzBuzz(100); */
																  const mixedArr = [
																	"lws",
																	   undefined,
																	     "learn With Sumit",
																		   false,
																		     "",
																			  "apple",
																			    40,
																				  "k",
																				    true,
																					  "Thanks all",
																					    NaN
																  ];
																  						  const trueArray = mixedArr.filter(function(el){
																							if(el) {
																								return true;
																							} else {
																								return false;
																							}
																						  });
																						 const trueArray1 = mixedArr.filter(Boolean);
																						document.getElementById('demo101').innerHTML =
																					  "Use Function(): " + trueArray + "<br>" + "Use Boolean: " + trueArray1;
																					const obj = {
																						a: "lws",
																						b: undefined,
																						c: "learn With Sumit",
																						d: false,
																						e: "",
																						f: "apple",
																						g: 40,
																						h: "k",
																						i: true,
																						j: "Thanks all",
																						k: NaN
																					};
																			/*		
																			const truthyObject = function (obj){
																		for(let i in obj){
																		  if (!obj[i])  {
																			delete obj[i];
																		  }
																		}

																		  return obj;
																			}  
																console.log(truthyObject(obj)); */
															let person8 = {
																fname: "Ibrahim",
																lname: "Khan",
																age: 27,
																edu: "BSc in CSE",
																ins: {
																dip: "DPI",
																bsc: "NUB",
																voc: "D N"
																}
															};
														let x24 = person8;
														x24.age = 28;

													  let text38 = "";
													for(let x25 in person8){
														text38 += person8[x25] + " ";
													}
												document.getElementById('demo103').innerHTML = person8.age + "<br>" + text38 + "<br>" +
												  "Access nested object" + "<br>" + person8.ins.bsc;

											let x26 = "";
											let person9 = {
												fname: "Ibrahim",
												lname: "Khan",
												age  : 27,
												cars : [
													{name: "Ford", models:["Fiesta", "Focus", "Mustang"]},
													{name: "BMW",  models:["320", "X3", "X5"]},
													{name: "Fiat", models:["500", "Panda"]}
												]
											};
									for(let i in person9.cars){
										x26 += "<h2>" + person9.cars[i].name + "</h2>";
										for(let j in person9.cars[i].models){
											x26 += person9.cars[i].models[j] + "<br>";
										}
									};
							document.getElementById('demo104').innerHTML = x26;
				
					let person10 = {
						fname: "Ibrahim",
						lname: "Khan",
						age  : 27,
						fullname: function(){
							return (this.fname + " " + this.lname).toUpperCase();
						}
					}; 
		document.getElementById('demo105').innerHTML = "My name is " + person10.fullname();
	let person11 = {
		fname: "Ibrahim",
		lname: "Khan",
		language : "Bangla",
		   get lang(){
			return this.language;
		   },

		language1: "NO",
		set lang1(value){
			this.language1 = value.toUpperCase();
		},

		get fullname(){
			return this.fname + " " + this.lname.toUpperCase();
		}
	};
	person11.lang1 = "English";
document.getElementById('demo106').innerHTML = person11.lang + "<br>" + person11.language1 + "<br>" + person11.fullname;
  //Define an Object
  let obj1 = {counter : 0};

    //Define getters and setters
    Object.defineProperty(obj1, "reset", {
		get : function () {this.counter = 0;}
	});
	      Object.defineProperty(obj1, "increment", {
			get : function () {this.counter++; }
		  });

		      Object.defineProperty(obj1, "decrement", {
				get : function () {this.counter--;}
			  });

			      Object.defineProperty(obj1, "add", {
					set : function (value) {this.counter += value;}
				  });

				       Object.defineProperty(obj1, "subtract", {
						  set : function (value) {this.counter -= value;}
					   });
					     
					        //Play with counter
							 obj1.reset;
							  obj1.add = 5;
							    obj1.subtract = 1;
								  obj1.increment;
								    obj1.decrement;
									  document.getElementById('demo107').innerHTML = obj1.counter;

									  let letter5 = new Set(["a","b","c"]);
									    // Add a new Element
									      letter5.add("d");
									        letter5.add("e");								  
											  // Display set.size
												  document.getElementById("demo108").innerHTML = letter5.size;
												    
												     let letter6 = new Set();
													   letter6.add("a");
													     letter6.add("b");
														   letter6.add("c");
														     letter6.add("c");
															   letter6.add("c");
															     letter6.add("c");
																   document.getElementById('demo109').innerHTML = letter6.size;
																      
																      let letter7 = new Set(["a","b","c","d"]);
																	    let text39 = "";
																		  letter7.forEach (function(value){
																			text39+= value + "<br>";
																		  })
																		       document.getElementById('demo110').innerHTML = text39;
																			     
																			       let letter8 = new Set(["I","b","r","a","h","i","m"]);
																				     let text40 = "";
																					   for(let x of letter8.values()){
																						text40+= x + "<br>";
																					   } 
																					       document.getElementById('demo111').innerHTML = text40;
																						let fruits6 =new Map ([
																							["Apple", 500],
																							["Mango", 400],
																							["Banana", 300]
																						]);
																						fruits6.set("Orange", 200);
																					document.getElementById('demo112').innerHTML = 
																					fruits6.get("Apple") + "<br>" +
																					fruits6.get("Orange") + "<br>" + "Fruits size: " + 
																					fruits6.size;
																				let text41 = "";
																			fruits6.forEach(function(value, key) {
																				text41 += key + ' = ' + value + "<br>";
																			})
																		document.getElementById('demo113').innerHTML = text41;		
																	  let x27 = function25(4,5)*2;
																		document.getElementById('demo114').innerHTML = x27;
																	  
																	function function25(a,b){
																		return a * b;
																	}
																(function () {
																	document.getElementById('demo115').innerHTML = "Hello! I called myself.";
																})();
															function function26(a,b){
																return arguments.length;
															}
														  document.getElementById("demo116").innerHTML = function26(4,5) + "<br>" + function26.toString();

														function function27(x,y){
															if (y=== undefined){
																y = 2;
															}
														    return x * y;
														}
													document.getElementById("demo117").innerHTML = function27(5);
												  
												function findMax(){
													let max = -Infinity;
													for(let i = 0; i < arguments.length; i++){
														if(arguments[i] > max){
															max = arguments[i];
														}
													}
													return max;
												}

												let x28 = findMax(3,5,2);
											
											document.getElementById('demo118').innerHTML ="Largest number is (3,5,2): " +  x

										function sumAll(){
											let sum = 0;
											for(let i = 0; i < arguments.length; i ++){
												sum+= arguments[i];
											}
											return sum;
										}
										let suma = sumAll(10,20,30,40);													
									document.getElementById('demo119').innerHTML ="sum of all number is: " + suma;

								let object1 = {
									fname: "Ibrahim",
									lname: "Khan",
									fullname: function(){
										return this.fname + " " + this.lname;
									}
								};
								document.getElementById('demo120').innerHTML = object1.fullname();

							let person12 = {
								fullname: function(city, country){
									return this.fname + " " + this.lname + ", " + city + ", " + country;
								}
							}
							
							let person13 = {
								fname: "Ibrahim",
								lname: "Khan"
							}

							let person14 = {
								fname: "Shihab",
								lname: "Khan"
							}
						let a = 4;
					  document.getElementById('demo121').innerHTML = person12.fullname.call(person14, "Dhaka", "Bangladesh") + "<br>" +
					"<br>" + a * a;
				let counter1 = 0;
			  function add(){
				
				counter1 += 1;
			  }

			add();
			add();
			add();
		document.getElementById('demo122').innerHTML = "The couter is: " + counter1;
	
	function add(){
		let counter2 = 0;
		counter2 += 1;
		return counter2;
	}

	function function28(){
		document.getElementById('demo123').innerHTML = add();
	}

const add1 = (function(){
	let counter3 = 0;
	return function() {
		counter3 += 1;
		return counter3;
	}
}) ();

function function29(){
	document.getElementById('demo124').innerHTML = add1();
}
  class car {
	constructor(name,year){
		this.name = name;
		this.year = year;
	}

			age(){
				const date = new Date();
				  return date.getFullYear() - this.year;
			}
  }
						let myCar3 = new car("Ford", 2014);
						 let myCar4 = new car("Audi", 2019);

						   document.getElementById('demo125').innerHTML = myCar3.name + " is " + myCar3.age() + " years old." + 
						   "<br>" + myCar4.name;
						     
						      class acar {
								constructor(brand){
									this.carname = brand;
								}
									   present(){
										return 'I have a ' + this.carname;
									   }
							  }
							  			    class Model extends acar {
												constructor(brand, mod){
													super(brand);
													  this.model = mod;
												}
												     show(){
														return this.present() + ' , it is a ' + this.model; 
													 }
											}

															let myCar5 = new Model("Ford", "Mustang");
															  document.getElementById('demo126').innerHTML = myCar5.show();

															    class bcar{
																	constructor(brand){
																		this.carname = brand;
																	}
																	       get cnam(){
																			return this.carname;
																		   }
																		        set cnam(x){
																					this.carname = x;
																				}
																}
																					const myCar6 = new bcar("Ford");
																					  document.getElementById('demo127').innerHTML = myCar6.cnam;
																					
																				class ccar{
																					constructor(name){
																						this.name = name;
																					}
																			  static hello(x){
																				return "Hello " + x.name;
																			  }
																				}
																		const myCar7 = new ccar("Ford");
																	document.getElementById('demo128').innerHTML = ccar.hello(myCar7);

																				//JavaScript Callback start
																  function myDisplayer (some){
																	document.getElementById('demo129').innerHTML = some;
																  }
																function myFirst(){
																	myDisplayer("Hello");
																}
															  function mySecond(){
																myDisplayer("Goodbye");
															  }															
															mySecond();
															myFirst();

														  
														  function myDisplayer1(some){
															document.getElementById('demo130').innerHTML = some;
														  }

														function myCalculator(num1, num2){
														  let sum = num1 + num2;
														  myDisplayer1(sum);
														}
													  myCalculator(5,5);	
													
												function myDisplayer2(something){
													document.getElementById("demo131").innerHTML = something;
												}
											  function myCalculator1 (num1, num2, myCallback){
												let sum = num1 + num2;
												myCallback(sum);
											  }
											myCalculator1(10,10, myDisplayer2);
										
										function asynchronous(){
											document.getElementById('demo132').innerHTML = "I love Islam.";
										}
									  setTimeout(asynchronous, 2000);

										//set Interval Timer
									setInterval(asynchronous1, 1000);
								  function asynchronous1(){
									let d = new Date();

									document.getElementById('demo133').innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
								  }
							  
								  //Promises
								  
							  const paymentSuccess = true;
							  const marks = 85;
							function enroll(callback){
								console.log('Course enrollment is in progress.');

						  setTimeout (function(){
							if(paymentSuccess){
								callback();
							} else{
								console.log('Payment failed');
							}
						  }, 1000);
							}
						function progress(callback){
							console.log('Course on progress...');

							setTimeout(function(){
								if(marks >= 80){
									callback();
								} else {
									console.log('You could not get enough marks to get the certificate')
								}
							}, 2000);
						}

					function getCertificate(){
						console.log('Preparing you certificate!');

						setTimeout (function(){
							console.log("Congrats! ");
						}, 1500);
					}
				enroll(function(){
					progress(getCertificate);
				})
		const element = document.getElementById("intro");
	  const element1 = element.getElementsByTagName("p");

	document.getElementById("demo134").innerHTML = "Fitst paragraph Intro (index 0) is: " + element1[0].innerHTML;

  const element2 = document.querySelectorAll("p.intro1");
document.getElementById('demo135').innerHTML = "index(0) is : " + element2[0].innerHTML;

//Document Form
  const form = document.forms["form1"];
    let text42 = "";
	  for(let i = 0; i<form.length; i++){
		text42 += form.elements[i].value + "<br>";
		  }
		    document.getElementById("demo136").innerHTML = text42;

			  document.getElementById('image').src = "biospray.png";

			    function validateform(){
					let x = document.forms["myform"] ["fname"].value;
					if (x == ""){
						alert ("Name must be filled out");
						return false;
					}
				}
				             function validation1(){
								let x = document.getElementById("numb").value;
								  let text = "";
								    if(isNaN(x) || x < 1 || x > 10){
										text = "Input not valid";
									} 
									      else {
											text = "Input  Ok";
										  }
										       document.getElementById("demo137").innerHTML = text;
											   
							 }

													document.getElementById('css').style.color = "red";
													  document.getElementById('css').style.fontSize = "30px";

													    function mymove(){													
															  let pos = 0;
															    const animate = document.querySelector(".animated");
																  const interval = setInterval(frame, 5);

																     function frame(){
																		if (pos < 350){
																			pos++;
																			animate.style.top = pos + 'px';
																			animate.style.left = pos + 'px';
																		} else {
																			clearInterval(interval);
																		}
																	 }
														}
																					function   changeText(){
																						document.querySelector('#cText');
																						cText.innerHTML = "Hello World";
																					}

																						function displayDate(){
																							document.querySelector('time1');
																							time1.innerHTML = Date();
																						}

																						         function upperCase(){
																									const x = document.getElementById('fname3');
																									  x.value =x.value.toUpperCase();
																								 }

																											function upperCase1(){
																												const x = document.querySelector('#fname4');
																												x.value =x.value.toUpperCase();
																											}

																										function mOver(obj){
																											obj.innerHTML = "Thank You"
																										}

																									function mOut(obj) {
																										obj.innerHTML = "Mouse Over Me"
																									}

																								document.querySelector('#btime').addEventListener('click', displayDate);
																							function displayDate(){
																								document.querySelector('#demo138').innerHTML = Date();
																							}
																						document.querySelector('#alert').addEventListener('click', function(){
																							alert('Hello World');
																						})
																					
																					let x29 = document.querySelector('#alert1');
																					 x29.addEventListener('click', onealert);
																					 x29.addEventListener('click', secondalert);
																				
																					function onealert(){
																						alert('Hello World');
																					}
																				function secondalert(){
																					alert('Second Alert');
																				}

																			let x30 = document.querySelector('#myBtn');
																		  x30.addEventListener('mouseover', functionfirst);
																		  x30.addEventListener('click', functionsecond);
																		  x30.addEventListener('mouseout', functionthird);

																	function functionfirst(){
																		document.getElementById('demo139').innerHTML += "Mouse Over <br>";																		
																	}
																function functionsecond(){
																	document.getElementById('demo139').innerHTML += "Clicked <br>";
																}
															function functionthird(){
																document.getElementById('demo139').innerHTML += "Mouse Out <br>";
															}
														
														const para = document.createElement("p");
														const node = document.createTextNode("This is new.");
													para.appendChild(node);

												  const element3 = document.getElementById("div1");
												element3.appendChild(para);

											const para1 = document.createElement("p");
											const node1 = document.createTextNode("This is new 1");
										  para1.appendChild(node1);

										const element4 = document.getElementById("div2");
										const child = document.getElementById("p3");
										element4.insertBefore(para1, child);

									function remove(){
										document.getElementById("p3").remove();
									}

										const myCollection = document.getElementsByTagName("p");
										  document.getElementById("demo140").innerHTML = "The element of the second paragraph is: " + myCollection[1].innerHTML;
										    function function30(){
												const function30 = document.getElementsByTagName("p");
												  for(let i = 0; i < myCollection.length; i++){
													myCollection[i].style.color = "red";
												  }
											}
											            document.getElementById('demo140').innerHTML = 
														  "Browser inner window width: " + innerWidth + "px<br>" +
														  "Browser inner window height: " + innerHeight + "px" + "<br>" + 
														  "The full URL of this page: " + window.location.href + "<br>" + 
														  "Window hostname: " + window.location.hostname + "<br>" + 
														  "Window pathname: " + window.location.pathname + "<br>" + "Navigator.appCodeName is: " +
														  navigator.appCodeName +"<br>" + "Navigator product is: " + navigator.product + "<br>" +
														  "navigator app version: " + navigator.appVersion + "<br>" + 
														  "navigator platform: " + navigator.platform; 
														    														      
														     let myWindow;

																function windowOpen(){
																	myWindow = window.open('https://google.com');
																}
																	function windowClose(){
																		myWindow.close();
																	}

																			function newDoc(){
																				window.location.assign("https://www.facebook.com");
																			}

																					function back(){
																						history.back();
																					}

																					      function forward(){
																							history.forward();
																						  }

																										function alert1(){
																											var text43;
																											if(confirm("Press a button!")){
																												text43 = "You press Ok!";
																											} else {
																												text43 = "You press cancel";
																											}
																											document.getElementById('demo141').innerHTML = text43;
																										}

																								function alert(){
																									let text;
																									let person = prompt("Please enter your name:", "Khan");
																									if(person == null || person == ""){
																										text = "User cancelled the prompt.";
																									} else {
																										text = "Hello " + person + " , How are you ?";
																									}
																									document.getElementById('demo142').innerHTML = text;
																								}

																					setInterval(myTimer, 1000);
																					function myTimer(){
																						const d = new Date();
																						document.getElementById("demo143").innerHTML = d.toLocaleTimeString();
																					}

																			const x31 = document.getElementById('demo144');
																		  function getLocation(){
																			try{
																				navigator.geolocation.getCurrentPosition(showPosition);
																			} catch{
																				x31.innerHTML = err;
																			}
																		  }

																	function showPosition(position){
																		x31.innerHTML = position.coords.latitude +"<br>" + position.coords.longitude; 
																	}

															function inputObj(){
																const inputObj1 = document.getElementById('id3');
																if(!inputObj1.checkValidity()){
																	document.getElementById('demo145').innerHTML = inputObj1.validationMessage;

																}else{
																	document.getElementById("demo145").innerHTML = "Input OK";
																}
															}
													let w;
												  function startWorker(){
													if(typeof(w) == "undefined"){
														w = new Worker("demo_workers.js");
													}
													w.onmessage = function(event){
														document.getElementById('result').innerHTML = event.data;
													};
													
													}
													function stopWorker(){
														w.terminate();
														w = undefined;
												  }
									const display = document.getElementById('display');

									function getData(){
										fetch('https://www.biosprayplus.org/contact.html')
										  .then((res) => res.text())
										  .then((data) => {
											display.innerText = data;
										  });
									}



									function loadDoc() {
										const xhttp = new XMLHttpRequest();
										xhttp.onload = function() {
										  document.getElementById("demo146").innerHTML =
										  this.responseText;
										}
										xhttp.open("GET", "ajax_info.txt");
										xhttp.send();
									  }

			function loadDoc1(){
				const xhttp = new XMLHttpRequest();
				xhttp.onload = function(){
					document.getElementById('demo147').innerHTML = this.responseText;
				}
				xhttp.open("GET", "demo_get.asp?fname=Ibrahim&lname=Khan");
				xhttp.send();
			}

					let json = {name: "John", age: 30, today: new Date(), city: "Dhaka"};
					  json.name = "Ibrahim";
					    json["age"] = 27;

						  let json1 = JSON.stringify(json);
						    document.getElementById('demo148').innerHTML = json1;

							  let text44 = '{"fname" : "Ibrahim", "lname" : "Khan", "age" : 27, "city" : "Dhaka", "birth" : "1996-07-06"}'							   
							    let myObj = JSON.parse(text44);
								 myObj.birth = new Date(myObj.birth);

								   let mybirth = JSON.parse(text44, function(key, value){
									if(key == "birth"){
										return new Date(value);
									}else{
										return value;
									}
								   });
								  
										let text45 = '["Ibrahim", "Khan", 27, "Dhaka"]'
										 let myObj1 = JSON.parse(text45);								  
										  document.getElementById('demo149').innerHTML = myObj.fname + " " + myObj.lname + " , " + myObj.birth + 
										   "<br>" + mybirth.birth + "<br>" + myObj1[2];

								   			  //Storing data:
											    localStorage.setItem("testJSON", json1);

												//Retrieving data:
												let text46 = localStorage.getItem("testJSON");
												  let obj2 = JSON.parse(text46);
													document.getElementById('demo150').innerHTML = obj2.name;

													   let myJson = '{"Name" : "Ibrahim", "Age" : 27, "Car" : "Null"}'
													     let myObj2 = JSON.parse(myJson);

														   let text47 = "";
														    let text48 = "";
														     for (const x in myObj2){
																text47 += x + " , ";
																text48 += myObj2[x] + " , ";
															 }
															      document.getElementById('demo151').innerHTML =myJson + "<br>" + "<br>" + 
																  "Looping Object Propertics: " + text47 + "<br>" + 
																  "Looping Object value: " + text48;

																      const dbParam = JSON.stringify({table: "customers", limit:20});
																	   const xmlhttp = new XMLHttpRequest();
																	    xmlhttp.onload = function(){
																			const myObj3 = JSON.parse(this.responseText);
																			 let text49 = "<table border='1'>"
																			  for(let x in myObj3){
																				text49 += "<tr><td>" + myObj3[x].name + "<tr><td>";
																			  }
																			       text49 += "</table>"
																				     document.getElementById('demo152').innerHTML = text49;
																		}

																		                  xmlhttp.open("POST", "json_demo_html_table.txt");
																						   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
																						    xmlhttp.send("x = " + dbParam);


																							


													
			    

					

			     
			      
																
															

															
									 
											


