const factorial = (field) => {
  if (field === 0 || field === 1) 
    return 1
  
 let total = 1
 for (i = field-1; i > 1; i--) {
	 field *= i
 }
   return field
}

const form = document.querySelector('form');


form.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const input1 = form.elements.num.value;
  const answer = factorial(input1);

  form.elements.factorial.value = answer;
});






