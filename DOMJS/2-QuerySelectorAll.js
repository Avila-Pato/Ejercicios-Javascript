const heading2 = document.querySelectorAll('.navegacion a');
console.log(heading2[0]) // Trae el primer enlace

heading2[0].textContent = ' Nuevo Texto para enlace'
heading2[0].href = 'https://chatgpt.com/c/a5b3ec0a-24f3-4f7e-959a-dd6eb9459bf8' 
heading2[0].setAttribute('target', '_blank')
heading2[0].classList.add('enlace')
heading2[0].classList.remove = ('navegacion_heading2')