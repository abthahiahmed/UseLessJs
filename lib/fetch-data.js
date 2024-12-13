export default class FetchData extends HTMLElement{
    constructor(){
        super()
        this.data = null
        this.fetch() 
    }
    setData(data){
        this.data = data;
    }
    fetch(){
        this.template = this.innerHTML.toString();
        console.log(this.template)
        let url = this.getAttribute('src') || undefined;
        let params = new URLSearchParams(this.dataset || '').toString()

        let xhr = new XMLHttpRequest();

        xhr.open('GET', `${url}?${params}`, true);

        xhr.onreadystatechange = () =>{
            if (xhr.status == 200 && xhr.readyState == 4){
                this.setData(JSON.parse(xhr.response))
                this.connectedCallback()
            }
        }
        xhr.send();
    }
    parseData(template, data){
        for (const x in data){
            template = template.replace(new RegExp(`{${x}}`, 'g'), data[x]);
        }
        return template;
    }
    render(){
        let content = ``;
        
        if (Array.isArray(this.data)){
            this.data.forEach(item=>{
                content += this.parseData(this.template, item);
            });
        }
        else if (this.data == Object(this.data)){
            content += this.parseData(this.template, this.data);
            console.log(this.data)
        }

        this.innerHTML = content;
    }

    connectedCallback(){
        this.data != null && this.render()
    }
}
