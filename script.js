/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
	alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
	do {
	play();
    } while(confirm('Spila annan leik?'))
}
  	

 /**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
	var correct = 0;
	var i;
	var startTime = new Date().getTime();
	/* Spyr 10 spurninga */
	for(i = 0; i < 10; i++) {
		var answer = ask();
		/*  */
		if(answer == null) {
			alert('Hætt í leik');
			break;
		}
		if(answer) {
			correct++;
		}
	}
	var endTime = new Date().getTime();
	if (i == 10) {
		showResult(startTime, endTime, correct);
	} 

}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda prompt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
	
	var question = "Hvað er ";
	var firstNumber;
	var secondNumber;
	var operator = randomNumber(0, 3);
	
	/* Plús */
	if (operator == 0) {
		firstNumber = randomNumber(1, 100);
		secondNumber = randomNumber(1, 100);
		var answer = prompt(question + firstNumber + " + " + secondNumber + "?");
		if(answer == null) {
			return null;
		}
		return (parseInt(answer) == (firstNumber + secondNumber));
	}

	/* Mínus */
	if (operator == 1) {
		firstNumber = randomNumber(1, 100);
		secondNumber = randomNumber(1, 100);

		var answer = prompt(question + firstNumber + " - " + secondNumber + "?");
		if(answer == null) {
			return null;
		}
		return (parseInt(answer) == (firstNumber - secondNumber));
	}

	/* Margföldun */
	if (operator == 2) {
		firstNumber = randomNumber(1, 10);
		secondNumber = randomNumber(1, 10);

		var answer = prompt(question + firstNumber + " * " + secondNumber + "?");
		if(answer == null) {
			return null;
		}
		return (parseInt(answer) == (firstNumber * secondNumber));	
	}

	/* Deiling */
	if (operator == 3) {
		secondNumber = randomNumber(2, 10);
		firstNumber = randomNumber(2, 10) * secondNumber;

		var answer = prompt(question + firstNumber + " / " + secondNumber + "?");
		if(answer == null) {
			return null;
		}
		return (parseInt(answer) == (firstNumber / secondNumber));
	}

}

/**
* Birtir fjölda réttra svara og tíma fyrir leikinn.
*/
function showResult(startTime, endTime, correct) {
	var time = (endTime - startTime)/1000;
	alert('Þú svaraðir ' + correct + ' af 10 dæmum rétt á ' + time.toFixed(2) + ' sekúndum\nMeðalrétt svör á sekúndu eru ' + (correct/time).toFixed(2));
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
