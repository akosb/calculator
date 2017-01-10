var calculation = "";

(function() {

	var clearDisplay = function() {
		var display = document.getElementById("display")
		display.innerHTML = "";
	}

	var updateDisplay = function(text) {
		var display = document.getElementById("display")
		display.innerHTML += text;		
	}

	var click = function(source) {
		console.log("clicked:", source);
		switch(source) {
			case "AC": {
				calculation = "";
				clearDisplay();
				return;				
			}
			case "=": {
				var result = eval(calculation)
				console.log( calculation, result);
				calculation = result;
				clearDisplay()
				updateDisplay(result);
				break;
			}
			default: {
				calculation += source;
				updateDisplay(source)
				break;
			}
		}

	}

	var init = function() {
		updateDisplay("");
	}

	controller = {
		init: init,
		click: click
	}

}());