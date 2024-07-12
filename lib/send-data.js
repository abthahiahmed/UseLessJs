export default class SendData extends HTMLElement{

    constructor(){
        super();
        this.method = this.getAttribute('method');
        this.url = this.getAttribute('url');
        this.data = this.dataset;
    }

    sendData(){
        let xhr = new XMLHttpRequest();
        const url = this.url + (this.method.toLowerCase() == 'get' ? `?${new URLSearchParams(this.data)}` : '');
        xhr.open(this.method, url, true);
        if (this.method.toLowerCase() == 'get') xhr.send();
        else {
            xhr.send(new URLSearchParams(this.data));
        }
        const response = this.getAttribute('response');
        xhr.addEventListener('readystatechange', function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                window[response](xhr.response);
            }
        });
    }

    connectedCallback(){
        const button = this.querySelector('button');
        button.addEventListener('click', this.sendData.bind(this));
    }

}

