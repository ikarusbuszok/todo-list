class torles {
    constructor(Sorszam,ido,tevekenyseg){
        this.Sorszam=Sorszam;
        this.ido=ido;
        this.tevekenyseg=tevekenyseg;
    }
    
}
function tevekenysegTorlese(index) {
        if (index >= 0 && index < tevekenysegek.length) {
          tevekenysegek.splice(index, 1);
          console.log("Tevékenység törölve.");
        } else {
          console.log("Hibás index.");
        }
      }