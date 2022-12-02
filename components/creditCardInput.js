class creditCardInput extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const creditCardInputContainer = document.createElement('div');

        creditCardInputContainer.classList.add('creditcard-input');

        creditCardInputContainer.innerHTML = `
        <style>
            h3 a {
                text-decoration: none;
                color: #000000;
            }

            .jump-hover {
                transition: 300ms all;
                transform: translateY(0);
            }

            .jump-hover:hover {
                    transform: translateY(-2px);
                }
            }

            .creditcard-input-content {
                display: flex;
                justify-content: center;
                align-content: center;
                align-items: center;
                flex-flow: column;
            }

            @media only screen and (min-width: 1024px) {
                .creditcard-input-content {
                  display: flex;
                  flex-flow: row;
                  align-items: center;
                }
            }

            .creditcard-form {
                display: grid;
                grid-column-gap: 10px;
                grid-template-columns: auto auto;
                grid-template-rows: 70px 70px 70px 70px;
                grid-template-areas: "cardNumber cardNumber""fullName fullName""expirationMonth expirationYear""securityCode securityCode""btnSubmit btnSubmit";
                padding: 20px;
                color: #707070;
            }

            .creditcard-form label {
                color: #222222;
            }

            .creditcard-form .field-form:first-of-type {
                grid-area: cardNumber;
            }
            
            .creditcard-form .field-form:nth-of-type(2) {
                grid-area: fullName;
            }
            
            .creditcard-form .field-form:nth-of-type(3) {
                grid-area: expirationMonth;
            }

            .creditcard-form .field-form:nth-of-type(4) {
                grid-area: expirationYear;
            }
            
            .creditcard-form .field-form:nth-of-type(5) {
                grid-area: securityCode;
            }
            .creditcard-form .field-form:nth-of-type(6) {
                grid-area: btnSubmit;
            }
            
            .field-form input {
                height: 40px;
                border-radius: 5px;
                border: 1px solid #EDEDED;
                padding: 0px 10px;
                box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
                transition: all 300ms;
            }

            .field-form input:focus {
                outline: none;
                border: 1px solid #4065b6;
            }

            .field-form {
                display: flex;
                flex-flow: column;
            }

            .btn-submit {
                height: 40px;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                color: #FFFFFF;
                background: rgb(42,84,176);
                background: linear-gradient(0deg, rgba(42,84,176,1) 0%, rgba(58,94,168,1) 100%);
                transition: all 300ms;
            }

            .btn-submit:hover {
                height: 40px;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                color: #FFFFFF;
                background: rgb(64,101,182);
                background: linear-gradient(0deg, rgba(64,101,182,1) 0%, rgba(75,119,213,1) 100%);
            }

            .btn-disabled {
                cursor: not-allowed !important;
                background: rgb(119,120,121);
                background: linear-gradient(0deg, rgba(119,120,121,1) 0%, rgba(174,177,184,1) 100%);
            }
            .btn-disabled:hover {
                cursor: not-allowed !important;
                background: rgb(119,120,121);
                background: linear-gradient(0deg, rgba(119,120,121,1) 0%, rgba(174,177,184,1) 100%);
            }

            .creditcard {
                width: 400px;
                height: 200px;
                -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
                transition: -webkit-transform 0.6s;
                -webkit-transition: -webkit-transform 0.6s;
                transition: transform 0.6s;
                transition: transform 0.6s, -webkit-transform 0.6s;
                cursor: pointer;
                border-radius: 20px;
                padding: 30px;               
                box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                background: rgb(42,84,176);
                background: linear-gradient(0deg, rgba(42,84,176,1) 0%, rgba(131,154,203,1) 100%);
            }

            .creditcard .front, .creditcard .back {
                position: absolute;
                width: 100%;
                max-width: 400px;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                -webkit-font-smoothing: antialiased;
                color: #47525d;
            }

            .creditcard .back {
                -webkit-transform: rotateY(180deg);
                transform: rotateY(180deg);
            }

            .creditcard.flipped {
                -webkit-transform: rotateY(180deg);
                transform: rotateY(180deg);
            }

            .card-header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
            }

            .card-chip {
                width: 80px;
                height: 50px;
                background-color: #e1dddd;
                border-radius: 10px;
            }

            .card-contactless-icon {
                width: 30px;
                object-fit: contain;
            }

            .card-logo {
                width: 80px;
                object-fit: contain;
            }

            .card-body {
                margin-top: 20px;
            }

            .card-label {
                font-size: 10px;
                font-weight: 100;
                color: #FFFFFF;
            }

            .card-number-text {
                font-weight: 500;
                font-size: 35px;
                color: #FFFFFF;
                font-family: monospace;
            }

            .card-details {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                margin-top: 20px;
            }

            .valid-text {
                text-transform: uppercase;
                font-size: 25px;
                color: #FFFFFF;
                font-family: monospace;
            }

            .card-black-stripe {
                height: 60px;
                width: 460px;
                background-color: #000000;
                margin-left: -30px;
            }

            .card-signature-seccode {
                display: flex;
                flex-flow: row;
                margin-top: 30px;
            }

            .card-signature {
                height: 50px;
                width: 80%;
                background-color: #EDE8E8;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }

            .card-signature-text {
                font-weight: 500;
                font-size: 30px;
                color: #353535;
                font-family: monospace;
                display: flex;
                justify-content: start;
                align-items: center;
                height: 100%;
                width: 100%;
                padding-left: 15px;
            }

            .card-cvc-text {
                text-align: right;
                margin: 5px 0px 0px 0px;
                color: #FFFFFF;
                font-size: 10px;
            }

            .card-security-code {
                height: 50px;
                width: 20%;
                background-color: #C4C4C4;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }

            .card-security-code-text {
                font-weight: 500;
                font-size: 30px;
                color: #353535;
                font-family: monospace;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
            }
        </style>
        <h3>CREDIT CARD INPUT (By. <a class="jump-hover" href="https://lucaslisboa.pt/" target="_BLANK">Lucas Lisboa)</a></h3>
        <div class="creditcard-input-content">
            <div class="creditcard">
                <div class="front">
                    <div class="card-header">
                        <div class="card-chip"></div>
                        <img class="card-contactless-icon" src="./assets/images/contactless.png" alt="Contactless Symbol">
                    </div>

                    <div class="card-body">
                        <div id="cardNumberText" class="card-number-text">
                            0000 0000 0000 0000
                        </div>

                        <div class="card-details">
                            <div class="card-expiration-name">
                                <div class="card-label">
                                    VALID THRU
                                </div>
                                <div class="valid-text">
                                    <div class="card-expiration-name-text">
                                        <span id="expirationMonthText">00</span>
                                        /
                                        <span id="expirationYearText">00</span>
                                    </div>
                                    <div id="fullNameText" class="cardholder-name-text">
                                        FULL NAME
                                    </div>
                                </div>
                            </div>

                            <img class="card-logo" src="./assets/images/mastercard-logo.svg" alt="Mastercard logo">
                        </div>
                    </div>
                </div>

                <div class="back">
                    <div class="card-black-stripe"></div>
                    <div class="card-signature-seccode">
                        <div class="card-signature">
                            <span id="fullNameBackText" class="card-signature-text">
                                FULL NAME
                            </span>
                        </div>
                        <div class="card-security-code">
                            <span id="securityCodeText" class="card-security-code-text">
                                000
                            </span>
                        </div>
                    </div>
                    <div class="card-cvc-text">
                        SECURITY CODE
                    </div>
                    <div class="card-notes"></div>
                </div>
            </div>

            <form id="creditCardForm" name="creditCardForm" class="creditcard-form" action="" method="post">
                <div class="field-form">
                    <label for="cardNumber">Card Number</label>
                    <input id="cardNumber" name="cardNumber" placeholder="Card number" max="9999999999999999" type="number">
                </div>
                <div class="field-form">
                    <label for="name">Name</label>
                    <input id="fullName" name="fullName" placeholder="Name on card" maxlength="16" type="text">
                </div>
                <div class="field-form">
                    <label for="expirationMonth">Expiration</label>
                    <input id="expirationMonth" name="expirationMonth" placeholder="Expiration month" max="12" type="number">
                </div>
                <div class="field-form">
                    <label for="expirationYear">&nbsp;</label>
                    <input id="expirationYear" name="expirationYear" placeholder="Expiration year" max="99" type="number">
                </div>
                <div class="field-form">
                    <label for="securityCode">Security Code</label>
                    <input id="securityCode" name="securityCode" placeholder="CCV code" max="9999" type="number">
                </div>
                <div class="field-form">
                    <button class="btn-submit jump-hover" type="submit" name="submit" value="Save">Save</button>
                </div>
            </form>

            <div class="errors">
                <ul class="error-list"></ul>
            </div>
        <div>
        `;

        shadow.appendChild(creditCardInputContainer);
    }

    connectedCallback() {
        this.flipCard();
        this.inputValidations();
        this.fillFormFields();
        this.onSubmit();        
    }

    // Main Method to check the inputs
    inputValidations() {
        const cardNumberField = this.shadowRoot.querySelector('#cardNumber');
        const expirationMonthField = this.shadowRoot.querySelector('#expirationMonth');
        const expirationYearField = this.shadowRoot.querySelector('#expirationYear');
        const securityCodeField = this.shadowRoot.querySelector('#securityCode');

        this.validationNumberFields(cardNumberField, 16);
        this.validationNumberFields(expirationMonthField, 2);
        this.validationNumberFields(expirationYearField, 2);
        this.validationNumberFields(securityCodeField, 4);
    }

    // Method to check validation for the numbers fields
    validationNumberFields(field, maxlength = null) {
        const invalidChars = ["-", "+", "e"];
        field.addEventListener("keydown", function(e) {
            if (e.key === 'Backspace') {
                return
            } 

            if (maxlength) {
                if (field.value.length >= maxlength || invalidChars.includes(e.key)) {
                    e.preventDefault();
                }
                return;
            } else {
                if (invalidChars.includes(e.key)) {
                    e.preventDefault();
                }
            }
        });
    }

    // Check and fill the data card
    fillFormFields() {
        const fullNameField = this.shadowRoot.querySelector('#fullName');
        const fullNameText = this.shadowRoot.querySelector('#fullNameText');
        const fullNameBackText = this.shadowRoot.querySelector('#fullNameBackText');
        fullNameField.addEventListener("keyup", function(e) {
            // Apply default value if field is empty
            if (fullNameField.value.length === 0) {
                fullNameText.innerHTML = 'FULL NAME';
                fullNameBackText.innerHTML = 'FULL NAME';
                return;
            }

            fullNameText.innerHTML = fullNameField.value;
            fullNameBackText.innerHTML = fullNameField.value;
        });

        const cardNumberField = this.shadowRoot.querySelector('#cardNumber');
        const cardNumberText = this.shadowRoot.querySelector('#cardNumberText');
        cardNumberField.addEventListener("keyup", function(e) {

            // Apply default value if field is empty
            if (cardNumberField.value.length === 0) {
                cardNumberText.innerHTML = '0000 0000 0000 0000';
                return;
            }

            // Apply credit card number mask
            let cardNumberMasked = cardNumberField.value;
            cardNumberMasked = cardNumberMasked.replace(/\D/g,"");           
            cardNumberMasked = cardNumberMasked.replace(/(\d{4})(\d)/,"$1 $2");
            cardNumberMasked = cardNumberMasked.replace(/(\d{4})(\d)/,"$1 $2");
            cardNumberMasked = cardNumberMasked.replace(/(\d{4})(\d)/,"$1 $2");
            cardNumberMasked = cardNumberMasked.replace(/(\d{4})(\d)/,"$1 $2");

            cardNumberText.innerHTML = cardNumberMasked;
        });

        const expirationMonthField = this.shadowRoot.querySelector('#expirationMonth');
        const expirationMonthText = this.shadowRoot.querySelector('#expirationMonthText');
        expirationMonthField.addEventListener("keyup", function(e) {

            // Apply default value if field is empty
            if (expirationMonthField.value.length === 0) {
                expirationMonthText.innerHTML = '00';
                return;
            }

            expirationMonthText.innerHTML = expirationMonthField.value;
        });

        const expirationYearField = this.shadowRoot.querySelector('#expirationYear');
        const expirationYearFieldText = this.shadowRoot.querySelector('#expirationYearText');
        expirationYearField.addEventListener("keyup", function(e) {
            
            // Apply default value if field is empty
            if (expirationYearField.value.length === 0) {
                expirationYearFieldText.innerHTML = '00';
                return;
            }

            expirationYearFieldText.innerHTML = expirationYearField.value;
        });

        const securityCodeField = this.shadowRoot.querySelector('#securityCode');
        const securityCodeText = this.shadowRoot.querySelector('#securityCodeText');
        securityCodeField.addEventListener("keyup", function(e) {

            // Apply default value if field is empty
            if (securityCodeField.value.length === 0) {
                securityCodeText.innerHTML = '000';
                return;
            }

            securityCodeText.innerHTML = securityCodeField.value;
        });
    }

    // Control when the card will flip
    flipCard() {
        const creditCardContent = this.shadowRoot.querySelector('.creditcard');
        creditCardContent.addEventListener('click', () => {
            if (creditCardContent.classList.contains('flipped')) {
                creditCardContent.classList.remove('flipped');
            } else {
                creditCardContent.classList.add('flipped');
            }
        }, false);

        const cardNumberField = this.shadowRoot.querySelector('#cardNumber');
        cardNumberField.addEventListener('focus', () => {
            if (creditCardContent.classList.contains('flipped')) {
                creditCardContent.classList.remove('flipped');
            }
        }, false);
        const fullNameField = this.shadowRoot.querySelector('#fullName');
        fullNameField.addEventListener('focus', () => {
            if (creditCardContent.classList.contains('flipped')) {
                creditCardContent.classList.remove('flipped');
            }
        }, false);
        const expirationMonthField = this.shadowRoot.querySelector('#expirationMonth');
        expirationMonthField.addEventListener('focus', () => {
            if (creditCardContent.classList.contains('flipped')) {
                creditCardContent.classList.remove('flipped');
            }
        }, false);
        const expirationYearField = this.shadowRoot.querySelector('#expirationYear');
        expirationYearField.addEventListener('focus', () => {
            if (creditCardContent.classList.contains('flipped')) {
                creditCardContent.classList.remove('flipped');
            }
        }, false);
        const securityCodeField = this.shadowRoot.querySelector('#securityCode');
        securityCodeField.addEventListener('focus', () => {
            if (!creditCardContent.classList.contains('flipped')) {
                creditCardContent.classList.add('flipped');
            }
        }, false);
    }

    // Submit form
    onSubmit() {
        const creditCardForm = this.shadowRoot.querySelector('#creditCardForm');
        creditCardForm.onsubmit = async (e)  => {
            e.preventDefault();

            const data = new FormData(creditCardForm);

            // Valid form
            const formErrors = this.validForm();
            this.itemList = this.shadowRoot.querySelector('.error-list');
            this.itemList.innerHTML = '';
            if (formErrors.length > 0) {
                formErrors.forEach((error) => {
                    const li = document.createElement('li');    
                    li.textContent = error.description;    
                    this.itemList.appendChild(li);
                });
                return;
            }

            var formData =  {
                cardNumber: data.get('cardNumber'),
                fullName: data.get('fullName'),
                expirationMonth: data.get('expirationMonth'),
                expirationYear: data.get('expirationYear'),
                securityCode: data.get('securityCode')
            };
            
            // Print the data form object on console log only for check.
            // Please, remove this line before production
            console.log(formData);

            // TODO: Send form
        }
    }

    // Check the errors on form
    validForm() {
        const cardNumberField = this.shadowRoot.querySelector('#cardNumber');
        const fullNameField = this.shadowRoot.querySelector('#fullName');
        const expirationMonthField = this.shadowRoot.querySelector('#expirationMonth');
        const expirationYearField = this.shadowRoot.querySelector('#expirationYear');
        const securityCodeField = this.shadowRoot.querySelector('#securityCode'); 

        let errors = [];

        if (cardNumberField.value.length !== 16) {
            errors.push({
                code: 'cardNumber',
                description: 'Card number is invalid'
            });
        }

        if (fullNameField.value.length > 2 && !/\s/g.test(fullNameField.value)) {
            errors.push({
                code: 'fullName',
                description: 'Name is invalid'
            });
        }

        if (expirationMonthField.value < 1 || expirationMonthField.value > 12) {
            errors.push({
                code: 'expirationMonth',
                description: 'Expiration Month field is invalid'
            });
        }

        if (expirationYearField.value < (new Date().getFullYear().toString().slice(-2))) {
            errors.push({
                code: 'expirationYear',
                description: 'Expiration Year field is invalid'
            });
        }

        if (securityCodeField.value.length < 3) {
            errors.push({
                code: 'securityCode',
                description: 'Security Code field is invalid'
            });
        }

        return errors;
    }
}

customElements.define('creditcard-input', creditCardInput);
