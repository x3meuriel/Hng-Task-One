const ModalWindow ={
    init()
    {
            document.body.addEventListener("click", (e)=>{
                if(e.target.classList.contains("modal__close")){
                    this.closeModal(e.target);
                }
            })
    },


    getHtmlTemplate(modalOptions){
       return `
            <div class="modal__overlay">
            <div class="modal__window">
                <div class="modal__titlebar">
                <span class="modal__title">${modalOptions.title}</span>
                <button class="modal__close"> X </button>
                </div>
                <div class="modal__content">
                ${modalOptions.content}
                </div>
            </div>
            </div>`
    },

    openModal(modalOptions = {}){
        modalOptions = Object.assign({
            title: "Modal Title",
            content: "Modal Content"
        }, modalOptions);


        const modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
        const a = document.getElementsByClassName("modal__overlay")[0];
        
        a.classList.add("expand");

    },


    closeModal(closeButton){
        const modalOverlay = document.querySelector(".modal__overlay");

        modalOverlay.classList.add("contract");

        setInterval(()=>{document.body.removeChild(modalOverlay)}, 100)
    }

   


}



document.addEventListener("DOMContentLoaded", ()=>ModalWindow.init());