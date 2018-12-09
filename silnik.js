function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("hamburger_icon").style.display="none"
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("hamburger_icon").style.display="block"
}
function myFunction(rob){
	var addAboutContent=`<div class="myFun"><div class="addAbout_title"><h1>Pomożemy Ci zaistnieć w wirtualnej rzeczywistości</h1></div>
	<div class="addAbout_content">
	<p style="font-size:22px; text-align:justify;"">Jest dostępnych wiele różnych wersji Lorem Ipsum, 
	ale większość zmieniła się pod wpływem dodanego humoru 
	czy przypadkowych słów, które nawet w najmniejszym 
	stopniu nie przypominają istniejących. <br>Jeśli masz 
	zamiar użyć fragmentu Lorem Ipsum, lepiej mieć pewność, 
	że nie ma niczego „dziwnego” w środku tekstu. Wszystkie 
	Internetowe generatory Lorem Ipsum mają tendencje do 
	kopiowania już istniejących bloków, co czyni nasz 
	pierwszym prawdziwym generatorem w Internecie.</p>
	<p style="font-size:22px; text-align:justify;"">Jest dostępnych wiele różnych wersji Lorem Ipsum, 
	ale większość zmieniła się pod wpływem dodanego humoru 
	czy przypadkowych słów, które nawet w najmniejszym 
	stopniu nie przypominają istniejących. Jeśli masz 
	zamiar użyć fragmentu Lorem Ipsum, lepiej mieć pewność, 
	że nie ma niczego „dziwnego” w środku tekstu. </p>
	<p style="font-size:22px; text-align:justify;"">Jest dostępnych wiele różnych wersji Lorem Ipsum, 
	ale większość zmieniła się pod wpływem dodanego humoru 
	czy przypadkowych słów, które nawet w najmniejszym 
	stopniu nie przypominają istniejących.</p>
	<p style="font-size:32px; text-align:center;"">Dowiedz się więcej!</p>
	</div><div>`;

	var addServices=`<div class="myFun" style="text-align:center;">
						<div class="addAbout_title"><h1>Portfolio</h1></div>
							<div class="addAbout_content">
								<h5 style="font-size:22px;">Nasze realizacje</h5>
									<div class="popUp" style="top:70px; left:50px;">
										<img class="imgObrazek" src="obrazki/czystee.png"/>
										<button class="buttonPopUp" id="myBtn" onclick="writePopUp(0)">Open PopUp</button>

										<div class="innerPopUp" id="innerPopUp">
										
  										</div>


										</div>
									</div>
									<div class="popUp" style=" top:70px; right:50px;">
										<img class="imgObrazek" src="obrazki/czystee.png"/>
										<button class="buttonPopUp" id="myBtn2" onclick="writePopUp(1)">Open PopUp</button>

										<div class="innerPopUp" id="innerPopUp">
										
  										</div>
										</div>
									</div>
									<div class="popUp" style="bottom:0; left:50px;">
										<img class="imgObrazek" src="obrazki/czystee.png"/>
										<button class="buttonPopUp" id="myBtn3" onclick="writePopUp(2)">Open PopUp</button>

										<div class="innerPopUp" id="innerPopUp">
										
  										</div>
										</div>
									</div>
									<div class="popUp" style=" bottom:0; right:50px;">
										<img class="imgObrazek" src="obrazki/czystee.png"/>
										<h3>Title</h3>
										</div>
									</div>
							</div>
						</div>
					<div>`;

	var addClients=`<div class="myFun">
						<div class="addAbout_title"><h1>Nasi klienci</h1></div>
							<div class="addAbout_content">
								<h5>Galeria Kaluzera </h5>
								
							</div>
						</div>
					</div>`;

	var addContact=`<div class="addAbout_title"><h1>Skontaktuj się z nami</h1></div>
	<div>
	<h3>Najlepiej zadzwoń ale jeśli wolisz- napisz!</h3>
	<div style="font-size:44px;">XXX-XXX-XXX</div>
	<div>front-end@frontend.jj</div>
	<div>`;

	var tablica=[addAboutContent, addServices, addClients, addContact];
		

	document.getElementById("content_content").innerHTML=tablica[rob];
	
}

function myFunctionSmall(robocza){
	var link1=`<div class="mySmall"><div class="addAbout_title"><h1>Contact / link 11111</h1></div>
	<div class="addAbout_content">
		<div>1111111111Jest dostępnych wiele różnych wersji Lorem Ipsum, 
	ale większość zmieniła się pod wpływem dodanego humoru 
	czy przypadkowych słów, które nawet w najmniejszym 
	stopniu nie przypominają istniejących. Jeśli masz 
	zamiar użyć fragmentu Lorem Ipsum, lepiej mieć pewność, 
	że nie ma niczego „dziwnego” w środku tekstu.</div>
	</div></div>`;

	var link2=`<div class="mySmall"><div class="addAbout_title"><h1>Contact / link 2222</h1></div>
	<div class="addAbout_content">
		<div>22222Jest dostępnych wiele różnych wersji Lorem Ipsum, 
	ale większość zmieniła się pod wpływem dodanego humoru 
	czy przypadkowych słów, które nawet w najmniejszym 
	stopniu nie przypominają istniejących. Jeśli masz 
	zamiar użyć fragmentu Lorem Ipsum, lepiej mieć pewność, 
	że nie ma niczego „dziwnego” w środku tekstu.</div>
	</div></div>`;

	var link3=`<div class="mySmall"><div class="addAbout_title"><h1>Contact / link 33333</h1></div>
	<div class="addAbout_content">
		<div>33333333Jest dostępnych wiele różnych wersji Lorem Ipsum, 
	ale większość zmieniła się pod wpływem dodanego humoru 
	czy przypadkowych słów, które nawet w najmniejszym 
	stopniu nie przypominają istniejących. Jeśli masz 
	zamiar użyć fragmentu Lorem Ipsum, lepiej mieć pewność, 
	że nie ma niczego „dziwnego” w środku tekstu.</div>
	</div></div>`;
	var tablicaSmall=[link1, link2, link3];
	document.getElementById("content_content").innerHTML=tablicaSmall[robocza];
}

function writePopUp(robPopUp){
	var innerPopUp1=`<div id="myModal" class="modal">  
  											<div class="modal-content">
    										<span class="close">&times;</span>
    										<img style="width:70vw; height:70vh;" src="obrazki/czyste.png"/>
  											</div>`;
  	var innerPopUp2=`<div id="myModal" class="modal">  
  											<div class="modal-content">
    										<span class="close">&times;</span>
    										<img style="width:70vw; height:70vh;" src="obrazki/czyste.png"/>
  											</div>`;
  	var innerPopUp3=`<div id="myModal" class="modal">  
  											<div class="modal-content">
    										<span class="close">&times;</span>
    										<img style="width:70vw; height:70vh;" src="obrazki/czyste.png"/>
  											</div>`;


  	var tablicaPopUp=[innerPopUp1, innerPopUp2, innerPopUp3];
	document.getElementById("innerPopUp").innerHTML=tablicaPopUp[robPopUp];

	var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var btn2 = document.getElementById("myBtn2");
	var btn3 = document.getElementById("myBtn3");
	var tablicaButton=[btn, btn2, btn3];
	var span = document.getElementsByClassName("close")[0];

	tablicaButton[robPopUp].onclick = function() {
    	modal.style.display = "block";
	}

//x close the modal
	span.onclick = function() {
    	modal.style.display = "none";
	}

// clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal.style.display = "none";
    }
}
}