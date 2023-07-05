/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :) Rusher Kun')

const baseUrl= "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app');

appNode.addEventListener('click', (evento) => {
    if (event.target.nodeName === 'H2')
    window.alert('Hola')});


//intl

// 1 - format fechas

// 2 - format monedas
const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('es', 
    {style:'currency',
     currency:'ARS'}).format(price)

    return newPrice;
}


//web api
// conectarnos al servidor
window.fetch(`${baseUrl}/api/avo`)
// procesar la repuesta y convertirla en json
.then(respuesta => respuesta.json())
// json -> data -> renderizar info en el browser
.then( responseJson=> {
    responseJson.data.forEach(item => {

        const todosLosItems = [];

        // crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;
        // crear titulo
        const title = document.createElement('h2');
        title.textContent= item.name;
        title.className='text-xl text-red-600 text-center';
      
        //crear precio
        const price = document.createElement('div');
        price.textContent= formatPrice(item.price);
        price.className='text-center';

        const container = document.createElement('div');
        container.append(imagen, title, price);
        container.className='shadow-xl';

        todosLosItems.push(container);

        appNode.append(...todosLosItems);
    });
})