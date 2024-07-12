export default class LoadScript extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const after = this.getAttribute('after');
        const src = this.getAttribute('src');
        const script = document.createElement('script');
        script.src = src;
        
        window.addEventListener('load', function(){

            setTimeout(function(){
                document.body.appendChild(script);
            }, after);

        });
    }
}