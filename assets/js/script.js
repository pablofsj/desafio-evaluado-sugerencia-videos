const iifeDOM = (() => {

    function funcionPrivada(url, id) {
        document.querySelector(`#${id}`).setAttribute("src", url)

    }

    return {

        funcionPubica(url, id) {
            funcionPrivada(url, id)
        }
    }

})()


class Multimedia {

    #url;

    constructor(url) {
        this.#url = url
    }


    get url() {
        return this.#url
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video."

    }

}

class Reproductor extends Multimedia {

    _id;

    constructor(url, id) {
        super(url)
        this._id = id
    }

    playMultimedia() {
        iifeDOM.funcionPubica(this.url, this._id)
    }

    setInicio(segundos) {
        const urlSeteadaTiempo = `${this.url}&amp;start=${segundos}`;
        iifeDOM.funcionPubica(urlSeteadaTiempo, this._id);
    }

}

const musica = new Reproductor("https://www.youtube.com/embed/zn6XDqKWXb0?si=-ieINj1Nn8oMi17Q", "musica")
const pelicula = new Reproductor("https://www.youtube.com/embed/-YRw-3dgsjo?si=1kTZ0GGbcuea-AVK", "pelicula")
const serie = new Reproductor("https://www.youtube.com/embed/gZbybAkuPJg?si=JcKGQhPusUiKpmv9", "serie")


musica.playMultimedia()
musica.setInicio(12)
pelicula.playMultimedia()
pelicula.setInicio(20)
serie.playMultimedia()
