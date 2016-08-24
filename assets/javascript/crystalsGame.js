$( document ).ready(function () {
	var wins = 0;
	var losses = 0;
	var totalScore = 0;
	var numberToGuess = "";
	var counter = 0;
	var numbers = ["","","",""];
	


	function getRandomInt() {
  		return Math.floor(Math.random() * 102 + 19);
	}

	var numberToGuess = getRandomInt();
	// console.log(numberToGuess);
	$('#numberToGuess').text(numberToGuess);


	function getRandomNum1() {
  		return Math.floor(Math.random() * 12 + 1);
	}
	var randNumber1 = getRandomNum1();
	// console.log(randNumber1);
	

	function getRandomNum2() {
  		return Math.floor(Math.random() * 12 + 1);
  	}
  	var randNumber2 = getRandomNum2();
	// console.log(randNumber2);


  	function getRandomNum3() {
  		return Math.floor(Math.random() * 12 + 1);
  	}
  	var randNumber3 = getRandomNum3();
	// console.log(randNumber3);


  	function getRandomNum4() {
  		return Math.floor(Math.random() * 12 + 1);
  	}
  	var randNumber4 = getRandomNum4();
	// console.log(randNumber4);

	var numbers = [randNumber1,randNumber2,randNumber3,randNumber4];

	console.log(numbers);

	
	var crystalImage = $('<img>');

	crystalImage.attr('data-num', numbers[0]);
	crystalImage.attr('src','assets/images/crystal1.jpg');
	crystalImage.attr('alt','crystals');
	crystalImage.addClass('crystal');

	var crystalImage2 = $('<img>');

	crystalImage2.attr('data-num', numbers[1]);
	crystalImage2.attr('src','assets/images/crystal2.jpg');
	crystalImage2.attr('alt','crystals');
	crystalImage2.addClass('crystal');

	var crystalImage3 = $('<img>');

	crystalImage3.attr('data-num', numbers[2]);
	crystalImage3.attr('src','assets/images/crystal3.jpg');
	crystalImage3.attr('alt','crystals');
	crystalImage3.addClass('crystal');


	var crystalImage4 = $('<img>');

	crystalImage4.attr('data-num', numbers[3]);
	crystalImage4.attr('src','assets/images/crystal4.jpg');
	crystalImage4.attr('alt','crystals');
	crystalImage4.addClass('crystal');


	$('#crystals').append(crystalImage, crystalImage2, crystalImage3, crystalImage4);
	

	$('.crystal').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourScore').text(counter);


      if (counter == numberToGuess){
        wins++;
        $('#wins').text(wins);
        alert('You won!');
      }

      else if( counter > numberToGuess){
      	losses++;
      	$('#losses').text(losses);
        alert('You lost!');
      }
    });

});