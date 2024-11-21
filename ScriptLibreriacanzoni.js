class song {

    constructor(titolo, autore, anno, url) {
        this.titolo = titolo;
        this.autore = autore;
        this.anno = anno;
        this.url = url;
    }

}

window.onload = gestoreLoad

function gestoreLoad() {

    songs = []
    let b1 = new song("Fake Love", "BTS", 2018, '<iframe class="youtube-video" src="https://www.youtube.com/embed/7C2z4GqqS5E?si=V-Qea-STus692KsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    let b2 = new song("Maniac", "Viviz", 2023, '<iframe src="https://www.youtube-nocookie.com/embed/nFHG0TeBIIs?si=iQY4AUEYMjkywoKj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    let b3 = new song("APT.", "Rosé & Bruno Mars", 2024, '<iframe src="https://www.youtube-nocookie.com/embed/ekr2nIex040?si=LGS1yFdtEOYvuLQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    let b4 = new song("Tinnitus", "TXT", 2023, '<iframe src="https://www.youtube-nocookie.com/embed/FqjJxPo9VkI?si=6jt0jaq4JUdVVYKt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    songs.push(b1)
    songs.push(b2)
    songs.push(b3)
    songs.push(b4)
    let nodoTab = document.getElementById("tab")
    function popolaTabella() {
        rimuoviFigli(nodoTab)
        for (let i = 0; i < songs.length; i++) {

            let nodoTr = document.createElement("tr")
            let nodoPos = document.createElement("td")
            nodoPos.textContent = i + 1
            let nodoTitolo = document.createElement("td")
            nodoTitolo.textContent = songs[i].titolo
            let nodoAutore = document.createElement("td")
            nodoAutore.textContent = songs[i].autore
            let nodoAnno = document.createElement("td")
            nodoAnno.textContent = songs[i].anno
            let nodoImg = document.createElement("td")
            //let img = document.createElement("img")
            nodoImg.innerHTML = songs[i].url
            //nodoImg.appendChild(img)
            nodoTr.appendChild(nodoPos)
            nodoTr.appendChild(nodoTitolo)
            nodoTr.appendChild(nodoAutore)
            nodoTr.appendChild(nodoAnno)
            nodoTr.appendChild(nodoImg)
            nodoTab.appendChild(nodoTr)


        }
    }
    popolaTabella()

    let nodoS1 = document.getElementById("select1")
    let nodoS2 = document.getElementById("select2")

    function popolaSelect() {
        rimuoviFigli(nodoS1)
        rimuoviFigli(nodoS2)

        for (let i = 0; i < songs.length; i++) {

            let nodoOpt = document.createElement("option")
            nodoOpt.value = i
            nodoOpt.textContent = "Pos: " + (i + 1) + " " + songs[i].titolo
            let nodoOpt1 = document.createElement("option")
            nodoOpt1.value = i
            nodoOpt1.textContent = "Pos: " + (i + 1) + " " + songs[i].titolo
            nodoS1.appendChild(nodoOpt)
            nodoS2.appendChild(nodoOpt1)
        }

        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);


    }

    popolaSelect()

    let btn = document.getElementById("btn")

    btn.onclick = cambia

    function cambia() {

        let l1 = parseInt(document.getElementById("select1").value)
        let l2 = parseInt(document.getElementById("select2").value)
        // assegniamo a song la canzone presente nella lista in posizione l2
        // assegniamo all'elemento della lista in posizione l2 l'emento della lista in posizione l1
        // assegniamo all'elemento della lista in posizione l1 la variabile song
        let song = songs[l2]
        songs[l2] = songs[l1]
        songs[l1] = song
        popolaTabella()
        popolaSelect()
    }

    function rimuoviFigli(nodo) {
        while (nodo.childNodes.length > 0) {

            nodo.removeChild(nodo.firstChild);
        }
    }

    document.getElementById("btnAdd").onclick = inserisci;
    document.getElementById("btnClear").onclick = rimuoviTutto;

    function inserisci() {
        const titoloV = document.getElementById("canzoneV").value;
        const autoreV = document.getElementById("autoreV").value;
        const annoV = document.getElementById("annoV").value;
        const urlV = document.getElementById("urlV").value;

        if (titoloV && autoreV && annoV && urlV) {
            const nuovaCanzone = new song(titoloV, autoreV, parseInt(annoV), urlV);
            songs.push(nuovaCanzone);

            popolaTabella();
            popolaSelect();

            document.getElementById("canzoneV").value = "";
            document.getElementById("autoreV").value = "";
            document.getElementById("annoV").value = "";
            document.getElementById("urlV").value = "";
        } else {
            alert("Tutti i campi sono obbligatori!");
        }
    }
    function rimuoviTutto() {
        songs.length = 0;
        popolaTabella();
        popolaSelect();
    }
    document.getElementById('back-to-top').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    popolaTabella();
    popolaSelect();

}