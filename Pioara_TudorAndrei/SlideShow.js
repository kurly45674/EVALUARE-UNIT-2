var slideIndex=0;
function myFunction() 
  {
	var i;
	var slides = document.getElementsByClassName("myslides");
	
	for (i=0; i<slides.length; i++){
		slides[i].style.display = ("none");
	}
	slideIndex++;
	if (slideIndex>slides.length)
		{slideIndex=1;}
	slides[slideIndex-1].style.display = ("flex");
	setTimeout(myFunction, 3000);
}

