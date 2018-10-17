const forma = document.querySelector('#forma');
const send = document.querySelector('#send');

        send.addEventListener('click', event => { //event что это и this
            event.preventDefault();
            if (validateForm(forma)) {
                const data = {
                    name: forma.elements.name.velue,
                    email: forma.elements.email.velue,
                    // phone: forma.elements.phone.velue,
                    textarea: forma.elements.textarea.velue
                   
                };
                const xhr = new XMLHttpRequest();
                xhr.open('https://webdev-api.loftschool.com/sendmail');
                xhr.send(JSON.stringify(data));
                console.log('Отправленно!');
            }
        });
        function validateForm(form) {
            let valid = true;
            if (!validateField(form.elements.name)){
                valid = false;
            }
            if (!validateField(form.elements.email)){
                valid = false;
            }
            if (!validateField(form.elements.textarea)){
                valid = false;
            }
            // if (!validateField(form.elements.email)){
            //     valid = false;
            // }
            return valid;
        }
        function validateField(field){
            if (!field.checkValidity()) {
                field.nextElementSibling.textContent = field.validationMessage;
                return false;
            }else {
                field.nextElementSibling.textContent = '';
                return true;
            }
        }