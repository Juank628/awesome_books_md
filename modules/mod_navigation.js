export class Navigation {
    constructor(pages){
        this.pages = pages
    }

    show(pageIdToShow, display) {
        this.pages.forEach(page => {
            if(pageIdToShow === page.id) {
                page.style.display = display
            } else {
                page.style.display = 'none'
            }
        });
    }
}
