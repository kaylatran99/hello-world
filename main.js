(function (window) {

  function addHandlers() {
    $('.nav-link').on('click', function (event) {
      removeActiveFromNavItems('#' + this.id);
      var stringOne = "Hello World"
      var stringTwo = "By Kayla Tran";

      if (this.id !== 'code') {
        document.getElementById('textOne').classList.remove("small-text");
        document.getElementById('textTwo').classList.remove("small-text");
      }
      else {
        document.getElementById('textOne').classList.add("small-text");
        document.getElementById('textTwo').classList.add("small-text");
      }
      switch (this.id) {
        case "weekend":
          stringOne = "Sup World"
          stringTwo = "Kayla was here.";
          break;
        case "code":
          stringOne = "0110100001100101011011000110110001101111";
          stringTwo = "01000010 01111001 00100000 01001011 01100001 01111001 01101100 01100001 00100000 01010100 01110010 01100001 01101110";
          break;
      }
      document.getElementById('textOne').innerHTML = stringOne;
      document.getElementById('textTwo').innerHTML = stringTwo;
    });

  }
  function removeActiveFromNavItems(clickedItem) {
    var linkItems = ['#home', '#weekend', '#code']
    for (i in linkItems) {
      if (linkItems[i] !== clickedItem) {
        $(linkItems[i]).removeClass("nav-active");
        $(linkItems[i]).addClass("nav-inactive");
      }
      else {
        $(clickedItem).removeClass("nav-inactive");
        $(clickedItem).addClass("nav-active");
      }
    }
  }

  addHandlers();

})(window)
