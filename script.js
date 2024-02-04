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
		  
		const  fruits1 = ["Mango","Banana","Apple","Orange"];
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





