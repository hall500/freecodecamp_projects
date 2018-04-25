function view(val){
	var about = document.getElementById("about-me");
	var portfolio = document.getElementById("portfolio");
	var contact = document.getElementById("contact");
	
	var link_about = document.getElementById("link-about");
	var link_portfolio = document.getElementById("link-portfolio");
	var link_contact = document.getElementById("link-contact");
	
	switch(val){
		case 'about':
		  about.style.display = "block";
		  portfolio.style.display = "none";
		  contact.style.display = "none";
		  link_about.style.backgroundColor = "rgba(160, 193, 221, 0.753)";
		  link_about.style.color = "#ffffff";
		  link_portfolio.style.backgroundColor = "#ffffff";
		  link_portfolio.style.color = "#5680ed";
		  link_contact.style.backgroundColor = "#ffffff";
		  link_contact.style.color = "#5680ed";
		  break;
		case 'portfolio':
		  portfolio.style.display = "block";
		  about.style.display = "none";
		  contact.style.display = "none";
		  link_about.style.backgroundColor = "#ffffff";
		  link_about.style.color = "#5680ed";
		  link_portfolio.style.backgroundColor = "rgba(160, 193, 221, 0.753)";
		  link_portfolio.style.color = "#ffffff";
		  link_contact.style.backgroundColor = "#ffffff";
		  link_contact.style.color = "#5680ed";
		  break;
		case 'contact':
		  about.style.display = "none";
		  portfolio.style.display = "none";
		  contact.style.display = "block";
		  link_about.style.backgroundColor = "#ffffff";
		  link_about.style.color = "#5680ed";
		  link_portfolio.style.backgroundColor = "#ffffff";
		  link_portfolio.style.color = "#5680ed";
		  link_contact.style.backgroundColor = "rgba(160, 193, 221, 0.753)";
		  link_contact.style.color = "#ffffff";
		  break;
		default:
		  about.style.display = "block";
		  portfolio.style.display = "none";
		  contact.style.display = "none";
		  link_about.style.backgroundColor = "rgba(160, 193, 221, 0.753)";
		  link_about.style.color = "#ffffff";
		  link_portfolio.style.backgroundColor = "#ffffff";
		  link_portfolio.style.color = "#5680ed";
		  link_contact.style.backgroundColor = "#ffffff";
		  link_contact.style.color = "#5680ed";
		  break;
	}
}