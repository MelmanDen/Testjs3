window.addEventListener('DOMContentLoaded', function(){

		let products = document.querySelectorAll('.product'),
						buttons = document.getElementsByTagName('button'),
					open = document.getElementsByClassName('open')[0];

					function createcart(){
							let cart = document.createElement("div"),
									  field = document.createElement('div'),
									  heading = document.createElement('h2'),
									  close = document.createElement("button");

							cart.classList.add("cart");
							field.classList.add("cart-field");
							close.classList.add("close");

							close.textContent = "Закрыть";
							heading.textContent = "В нашей корзине";

							document.body.appendChild(cart);
							cart.appendChild(heading);
							cart.appendChild(field);
							cart.appendChild(close);
		}

		createcart();

		let field = document.querySelector(".cart-field"),
						cart = document.querySelector('.cart'),
						close = document.querySelector(".close"),
						shop = document.querySelector('.shop');


						for (let i = 0; i<buttons.length-1; i++){
								buttons[i].addEventListener('click', function(F){
									let item = products[i].cloneNode(true),
													btn = item.querySelector('button');
													

										
										field.appendChild(item);
										products[i].remove();
										btn.textContent = "Убрать";
											btn.addEventListener('click', function(){
											item.remove();
											shop.appendChild(products[i]);
											btn.textContent = "Купить";
								})

								})
						}

						function opencart(){
								cart.style.display = "block"
						};
						function closecart(){
								cart.style.display = "none"
						};

						open.addEventListener('click', opencart);
						close.addEventListener('click', closecart);

						
											



});