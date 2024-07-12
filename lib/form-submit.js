export default class FormSubmit extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.form = this.children[0];
        this.url = this.getAttribute('url') || undefined;
        this.method = this.getAttribute('method') || undefined;
        let callback = this.getAttribute('response');
        console.log(this.form)
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault();
            
            let data = new FormData(e.currentTarget);
            
            let xhr = new XMLHttpRequest();

            const url = this.url + (this.method.toLowerCase() === 'get' ? `?${new URLSearchParams(data)}` : '');
            
            xhr.open(this.method, url, true);
            xhr.send((this.method.toLowerCase() === 'get') ? null : data);

            xhr.addEventListener('readystatechange', function(){
                if (xhr.status == 200 && xhr.readyState == 4){
                    window[callback](xhr.response);
                }
            });

        })
    }

}   

