class Navbar{
    constructor(main, navlist, navlinks){ /*  metodo constructor, dentro deste metodo referenciamos, as propriedades da nossa classe*/
        this.main = document.querySelector(main); /* atraves do metodo querySelector o usuario desta classe vai poder passar qual é o main*/
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

    }

    animateLinks() {  /* novo metodo que anima os links toda vez que algeum clicar*/
        this.navlinks.forEach((link, index) => { /* forEach fala com cada link separadamente*/
            link.style.animation /* Verificaçao da animação no DOM*/ 
            ? (link.style.animation = "") /* operador ternario que retorna um de dois valores baseando -se em um terceiro valor  */
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`);
        });
    }

    handleClick() { /* adicionar e remover, a classes, toda vez que clicar no botao */
        this.navlist.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() { /*adiciona um evento escutar de click para o menu */
        this.main.addEventListener("click", this.handleClick);
    }

    init() { /* metodo que se a função de click existir no documento*/
        if (this.main) {
            this.addClickEvent();
        }
        return this;
    }
}

const navbar = new Navbar( /* criando a navbar*/
    ".menu2",
    ".nav-list",
    ".nav-list li",
);

navbar.init(); /*inicia */

