const littleBox = [     // Costanti icons
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

  const colors = [  // Costanti colori
      'blue',
      'orange',
      'purple'
  ];

/* Sezione dedicata alla arrow fuction ---------------------------------------*/  

/* Milestone 1*/
const print = (array, container) => {
    container.innerHTML = '';

    array.forEach((element) => {
        //console.log(element);
        const {name, family, prefix, color} = element;
        container.innerHTML += `
        <div>
            <i class="${family} ${prefix + name}" style="color: ${color}"></i>
            <div class="title">${name.toUpperCase()}</div>
        </div>
        `;
    });
};
/* Fine Sezione dedicata alla arrow fuction ---------------------------------------*/  


//  prendo l'elemento con l'id  
const iconsContainer = document.getElementById('littleBox'); 

//console.log(iconsContainer);

const coloredArray = colorIcons(littleBox, colors);
//console.log(coloredArray);
print(coloredArray, iconsContainer); // Evoco la funzione

const types = getTypes(coloredArray);
const select = document.getElementById('type');
//console.log(select);
printOptions(types, select)

//  AL CHANGE MOSTRARE SOLO LE ICONE FILTRATE

select.onchange = function(element) {
    const filtered = filterValues(littleBox, element.target.value); // filter
    console.log(filtered);

    print(filtered, iconsContainer);
};

/* Funzioni ----------------------------------------------------------------------*/

/* Milestone 2 */
function colorIcons(array, colors) {
    const types = getTypes(array);
    //console.log(types);

    const coloredArray = array.map((element) => {
        const indexType = types.indexOf(element.type);  // indexOf
        console.log(indexType);

        element.color = colors[indexType];
        return element;
    })

    return(coloredArray);
}

function getTypes(array) {
    const types = [];

    array.forEach((element) => {
        console.log(element.type);
        if (!types.includes(element.type)) {
            types.push(element.type);
        }
    });

    return types;
}

/* Milestone 3 */

function printOptions(array, select) {
    array.forEach((element) => {                       // forEach
        //console.log(element);
        select.innerHTML += `<option value="${element}">${element}</option>`;
    });
}

function filterValues(array, type) {
    const filteredIcons = array.filter((element) => {   // filter
        if (element.type === type) {
            return true
        }

        return false;
    });

    if(type === "") {
        return array;
    }

    return filteredIcons;
}
/* Fine Funzioni -----------------------------------------------------------------*/