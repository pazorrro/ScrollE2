class Scroll2 {


    // dict est un dicitonnaire clé valeur -> élément : animation    ! obligatoire !

    // dist est la distance par rapport au bas de la page pour savoir quand faire apparaître ou pas

    // duree est la duree de l'animation

    // disp est un bool qui détermine si on fait disparaitre les éléments après avoir rescrollé


    constructor(dict) {
      this.dict = dict;
      this.disp = false;
      this.dist = 100;
      this.duree =  null;
      this.animatedElements = new Set();
      this.compteur = {}
      return this;
    }

    setDistance(dist){
      this.dist = dist;
      return this;
    }

    setTime(duree){
      this.duree = duree;
      return this;
    }

    setDisplayAfterScroll(disp){
      this.disp = disp;
      return this;
    }



    // Start
    init() {
      // Créer un élément de style pour les classes "hide" et "show"
      const hideShowStyleElement = document.createElement('style');
      hideShowStyleElement.innerHTML = '.hide { opacity: 0; } .show { opacity: 1; }';
      document.head.appendChild(hideShowStyleElement);

      // Générer des identifiants uniques pour les éléments sans id
      const elementIdMap = {};
      const elements = document.querySelectorAll(Object.keys(this.dict).join(","));
      elements.forEach((element) => {
        let elementId = element.getAttribute("id");
        if (!elementId) {
          elementId = this.generateUniqueId(); // Fonction pour générer un identifiant unique
          element.setAttribute("id", elementId);
        }
        elementIdMap[elementId] = element;
      });
  
      // Modifier la durée de l'animation si changée
      if (this.duree !== null) {
        const animationDurationStyleElement = document.createElement('style');
        animationDurationStyleElement.innerHTML = '.animate__animated { --animate-duration: ' + this.duree + 's; }';
        document.head.appendChild(animationDurationStyleElement);
      }

      // on initialise les compteur pour chacun des éléments
      for (var key in this.dict) {
        this.compteur[key] = 0;
      }
  
      // on applique la fonction au démarrage pour afficher ou non les éléments
      for (var key in this.dict) {
        var value = this.dict[key];
        window.addEventListener("load", this.createLoadEventListener(key, value).bind(this));
        window.addEventListener("scroll", this.createScrollEventListener(key, value).bind(this));
      }
    }

    generateUniqueId() {
      return "element-" + Math.random().toString(36).substring(2, 9);
    }
  
    createLoadEventListener(selector, animation) {
      return () => {
        this.myScrollFunc(selector, animation);
      };
    }
  
    createScrollEventListener(selector, animation) {
      return () => {
        this.myScrollFunc(selector, animation);
      };
    }
  
  myScrollFunc(selector, animation){
    
    var effect;
    if (typeof animation === "string") {
        effect = [animation]; 
    } else {
        effect = animation;
    }
    var elements = document.querySelectorAll(selector);
    var bottomThreshold = this.dist; 

    elements.forEach((element) => {
      var rect = element.getBoundingClientRect();
      var y = rect.top;
      if (y < window.innerHeight - bottomThreshold) {
          if(this.disp || !this.animatedElements.has(element.id)){
            element.classList.add("animate__animated", effect[this.compteur[selector] % effect.length], "show");
            element.classList.remove("hide");
            this.animatedElements.add(element.id);
            this.compteur[selector]++;
          }
      } else {
        if (this.disp || !this.animatedElements.has(element.id)) {
          element.classList.remove("animate__animated", effect[(this.compteur[selector]-1) % effect.length], "show");
          element.classList.add("hide");
        }
      }
    });
  }

}
