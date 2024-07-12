export default class InputValidate extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){

        const regex = this.getAttribute('regex') || '';
        const min = this.getAttribute('min') || 0;
        const max = this.getAttribute('max') || Infinity;
        const valid = this.getAttribute('valid') || '';
        const invalid = this.getAttribute('invalid') || '';

        const input = this.querySelector('input');

        if (input.value.length < min){
            input.classList.remove(valid);
            input.classList.add(invalid);
        }
        input.addEventListener('keyup', function(){
            if (this.value.length >= min && this.value.length <= max){
                this.classList.add(valid);
                this.classList.remove(invalid);
                if (regex != ''){
                    if (!input.value.match(new RegExp(regex, 'g'))){
                        this.classList.remove(valid);
                        this.classList.add(invalid);
                    }
                }
            }else{
                this.classList.remove(valid);
                this.classList.add(invalid);
            }

        });

    }

}