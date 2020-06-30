export default class AppService {
    constructor(text){
        this.text = text
    }
    log(){
        console.log('text:', this.text)
    }
}