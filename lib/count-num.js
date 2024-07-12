export default class CountNum extends HTMLElement{
    constructor(){
        super();
        this.template = this.innerHTML.toString();
        this.count = parseInt(this.getAttribute('initial')); 
        this.buttons = this.querySelectorAll('button');
    }
    action(e){
        const action = e.target.dataset.action || '+';
        const by = e.target.dataset.by || 0;
        
        if (action == '+'){
            this.count += parseInt(by);
        }
        else if (action == '-'){
            this.count -= parseInt(by);
        }
    }
    connectedCallback(){
        this.render();
        this.querySelectorAll('button').forEach(button=>button.addEventListener('click', (e)=>{
            this.action(e);
            this.connectedCallback();
        }));
    }

    render(){
        this.innerHTML = this.template.replace(new RegExp('{value}', 'g'), this.count);
    }

}