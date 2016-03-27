//logical assignment

var armory = { addSword:function(sword) {

// looks at first truthy value, if this.swords exist just push, if it doesn't then create array
this.swords = this.swords || [];
this.swords.push(sword);

console.log("Adding "+sword);
console.log("\nArmory is now "+armory.swords);
}



};

armory.addSword("Meow");
armory.addSword("pistol");
armory.addSword("s-words");



// by using a cached variable that is only looked at upon initial loop init, it saved a bunch of memory calls
//armorySwords = armory.swords;
//for (var i = 0, swordLength = armory.swords.length; i < swordLength; i++)
//for (var i = 0; i < armorySwords.length ; i++)


	// Document fragments

//declaring multiple variables  in one var keyword
var list = document.getElementById("kotslist"),
kotw = ["blah","meow"],
//fragments used as a staging area so only one dom update   is done
fragment = document.createDocumentFragment(),
element;

//no variable declaration within loop to lower resource cost. 
for (var i = 0, x  = kotw.length ; i < x; i++) {
	element = document.createElement("li");
	element.appendChild( document.createTextNode(kotw[i]));
	fragment.appendChild(element);
}
//dom is updated once outside of for loop
list.appendChild(fragment);



// using + returns ms
console.log(+(new Date()));






// speed test
var IP = ['Nipping Global Variable', 'Sneaky Forin', 'Bulging Blocking Script'],
GH = ['Switch Blocks', 'Pesky Gnat', 'Aiedra'],
inhabitants = [IP,GH];

function populationGetter(popn) {
  var list = '';
  for (var i = 0, x = popn.length; i < x; i++) {
    for (var j = 0; j < popn[i].length; j++) {
      list += (popn[i][j] + ', ');
    }
  }
  return list;
}

populationGetter(inhabitants);
var SpeedTest = function(testImplement,testParams,repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
};

SpeedTest.prototype = {
  startTest: function() {
    if (this.testImplement(this.testParams) === false) {
      alert('Test failed with those parameters.');
      return;
    }
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++) {
      beginTime = +new Date();
      this.testImplement(this.testParams);
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log('Average execution across ' + this.repetitions + ': ' + this.average);
  }
};

// end speed test code. 



var concatTest = new SpeedTest(populationGetter,inhabitants,100000);
concastTest.startTest();


*/





/* CAVESOFCLARITY  is a namespace, which is a way to keep data seperated in global scope

wrapping it  it an immedatly invoked function expression and only returning
a partial set of variables allows us to use anonymous scope to keep treasurecherts secret.
it can't be accesed directly by CAVESOFCLARITY.treasureChests due to closure. OpenChest can
still access it
*/

var CAVESOFCLARITY = function() {
 var treasureChests = 3;
 
  return {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  SECRET: {
        openChest: function() {
      treasureChests--;
      alert('DA DADADA DAAAAAAA!');
    }
  }
};

}();
