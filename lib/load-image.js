export default class Image extends HTMLElement{
    constructor(){
        super();
        this.image = document.createElement('img');
        this.loading = document.createElement('div');
    }
    connectedCallback(){
        const src = this.getAttribute('src');
        const width = this.getAttribute('width') ?? "640";
        const height = this.getAttribute('height') ?? "480";
        const alt = this.getAttribute('alt');
        const style = this.getAttribute('style');
        const loadingClass = this.getAttribute('loadingClass') ?? "";
        const imageClass = this.getAttribute('imageClass') ?? "";
        
        const filename = src.split('/');

        this.image.src = src;
        this.image.alt = alt ?? filename[filename.length - 1];
        this.image.width = width;
        this.image.height = height;
        this.image.style = style;
        this.image.className = imageClass;
        
        
        this.loading.style.display = `inline-block`;
        this.loading.style.width = `${width}px`;
        this.loading.style.height = `${height}px`;
        this.loading.style.backgroundColor = "#cfcfcf";
        this.loading.style.animation = "__sekeleton_loading 1s infinite alternate";
        this.loading.className = loadingClass;

        this.appendChild(this.loading);

        this.image.onload = () =>{
            this.innerHTML = '';
            this.appendChild(this.image);
        }
    }

}