import data from '../menu.json';

const renderData = async (choice) => {
  try {
    const menuContainer = document.querySelector('.menu-container');
    const dataToRender = data[choice];
    let row = null;

    // Only include one set of data per click inside menuContainer
    menuContainer.innerHTML = '';

    for (let i = 0; i < dataToRender.length; i += 1) {
      if (i % 2 === 0) {
        row = document.createElement('div');
        row.className = 'row';
      }

      const col = document.createElement('div');
      col.className = 'col-sm-6';

      const subRow = document.createElement('div');
      subRow.className = 'row';

      const subCol = document.createElement('div');
      subCol.className = 'col-8';

      const subColSmall = document.createElement('div');
      subColSmall.className = 'col-4';

      const foodName = document.createElement('h4');
      foodName.textContent = dataToRender[i].name;
      if (dataToRender[i].bestSeller) {
        foodName.style.fontWeight = 'bold';
      }

      const foodDescription = document.createElement('p');
      foodDescription.textContent = dataToRender[i].description;

      const foodPrice = document.createElement('h5');
      foodPrice.textContent = `${dataToRender[i].price}`;

      subColSmall.appendChild(foodPrice);
      subCol.append(foodName, foodDescription);
      subRow.append(subCol, subColSmall);
      col.appendChild(subRow);
      row.appendChild(col);
      menuContainer.appendChild(row);
    }
  } catch (err) {
    console.log('Error rendering data.');
  }
};

// const checkTextContent = () => {
//   const radioButton = document.querySelector('input[type="radio"]:checked');
//   if (radioButton) {
//     const textContent = radioButton.nextSibling.textContent;
//     console.log(textContent);
//     return textContent
//   }
// }

const chooseMenu = () => {
  const menuNav = document.querySelector('.menu-nav');

  menuNav.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) {
      renderData(event.target.textContent);
    }
    event.stopPropagation();
  });
};

//Display Hot beverage after loading Menu
renderData('Hot');
chooseMenu();
