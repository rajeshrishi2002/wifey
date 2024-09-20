class Footer extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
		<footer class="">
			<div class="container">
				<div class="footer-cont">
					<div class="logo">
						
					</div>
					<div class="footer-nav">
						<div class="fn-left">
							<p>LYRICS FOR YOU FROM YOUR FAV</p>
							<div>
								<a href="">Hey neeyum naanum saergaiyil<br>
Aedho maayam naergaiyil<br>
Kadavul maelae konda aiyamum
Theergaiyil…<br>


 Kushi… unai karampidithaal<br>
Kushi…un paarvai enil padindhaal<br>
Kushi… unadhargirundhaal<br>
Kushi… nee en kaadhal theevaanaal<br>

Enai nee paarkaiyil<br>
Arai pithaagi pogiren..<br>
Unai naan paarkaiyil<br>
Muzhu pithaaga aagiren..<br> 
 Mugam poongaidhaiyaa<br>
Anaipae endhan aadaiyaa<br>
Mugir pandhaadavae<br>
Vidai than endhan vaetaya<br>


Piriyaa kanavaai…<br>
En kangalil niraivaaya…<br>
Manmael vaanaai<br>
Mazhai theendalai tharuvaaya<br>

Hey kaadhali kaadhali<br>
Vinnai vizhungum vizhi<br>
Ennaiyum vizhungidum vizha<br>
Hey muttiyae saaithoru<br>
Kaadhalaadidum vizha,<br> 
Love You So Much Di Pondati<br>❤️😘🥰🫂</a>
<p>UNN KOODA UNN PAKKATHULAIYE IRUKANUM NU THOONUTHUDA🥹</p>
							</div>
							
						</div>
						
					</div>
	
					<div class="footer_bot">
						<ul class="">
							<li class="">
								<a href="" class="">Lucky</a>
							</li>
							<li class="">
								<a href="" class="">blessed</a>
							</li>
							<li class="">
								<a href="" class="">to have</a>
							</li>
							<li class="">
								<a href="" class=""> you da</a>
							</li>
							<li class="">
								<a href="" class="">Chellam🫂</a>
							</li>
						</ul>
						<span> © 2024 till last breath </span>
					</div>
				</div>
			</div>
		</footer>
        `;
    }
}

window.customElements.define('custom-footer', Footer);