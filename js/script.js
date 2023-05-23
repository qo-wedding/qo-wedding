$(document).ready(function () {
    // change header
    let blockHeader = $(".blockHeader");
    let viewScroll = $(window);
    let topChange = 550;
    viewScroll.scroll(function(){
		if (viewScroll.scrollTop() > topChange) {
            blockHeader.addClass("blockHeaderFixed");
		} 
        else {
            blockHeader.removeClass("blockHeaderFixed");
        }
	});
  
    // cherrishing
    let btnShowBanking = $(".cherrishing");
    let showBanking = false;
    let modal = $(".blockModal");
    let btnClose= $(".blockModal__wrap--btnClose");
    btnShowBanking.on("click", function() {
        showBanking = true;
        if (showBanking === true){
            modal.addClass("active");
        }
    });
    btnClose.on("click", function() {
        showBanking = false;
        if (showBanking === false){
            modal.removeClass("active");
        }
    });
    // btnMenuMoblie
    let btnMenu= $(".blockHeader__btnMenuMoblie");
    let listMenuMobile = $(".blockMenuMobile");
    let itemMenuMobile = $(".blockMenuMobile__listMenu--item");
    let showMenu = false;
    let selectorLogo = btnMenu.parent().children(".blockHeader__logo")
    btnMenu.on("click", function() {
        showMenu = !showMenu;
        if (showMenu === true){
            btnMenu.addClass("active");
            listMenuMobile.addClass("active");
            selectorLogo.addClass("active");
        } else {
            btnMenu.removeClass("active");
            listMenuMobile.removeClass("active");
            selectorLogo.removeClass("active");
        }
    });
    itemMenuMobile.on("click", function() {
        showMenu = false;
        if (showMenu === false){
            btnMenu.removeClass("active");
            listMenuMobile.removeClass("active");
            selectorLogo.removeClass("active");
        }
    });
    
})
function countdown() {
    const targetDate = new Date('May 28, 2023 11:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    // Update the display
    document.getElementById('day').innerText = days;
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
  }
  
  // Call the countdown function every second
  setInterval(countdown, 1000);
 
