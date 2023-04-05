const dataPhone = [
    {    
    name: "iPhone 13",    
    description: "Флагманский смартфон Apple с OLED-дисплеем, новым процессором A15 Bionic и тройной камерой.",    
    cost: 999,    
    brand: "Apple"  
    },  
    {    
    name: "Samsung Galaxy Z Flip 3",    
    description: "Смартфон-раскладушка с дисплеем из стекла, процессором Snapdragon 888 и двойной камерой.",    
    cost: 999,    
    brand: "Samsung"  },  
    {    
    name: "OnePlus 10 Pro",    
    description: "Флагманский смартфон OnePlus с 6,7-дюймовым дисплеем, процессором Snapdragon 8 Gen 1 и четверной камерой.",    
    cost: 899,    
    brand: "OnePlus"  
    },  
    {    
    name: "Google Pixel 6",    
    description: "Смартфон с дисплеем из супертонкого стекла, новым процессором Tensor и двойной камерой.",    
    cost: 749,    "brand": "Google"  },  
    {    
    name: "Xiaomi Mi 12",    
    description: "Флагманский смартфон Xiaomi с 6,8-дюймовым дисплеем, процессором Snapdragon 8 Gen 1 и пятикратной камерой.",    
    cost: 999,    
    brand: "Xiaomi"  
}
];

const dataLaptop = [
    {
      name: "MacBook Pro",
      description: "Powerful laptop for professional use",
      cost: 1999,
      brand: "Apple"
    },
    {
      name: "ThinkPad X1 Carbon",
      description: "Ultra-light and durable business laptop",
      cost: 1599,
      brand: "Lenovo"
    },
    {
      name: "Surface Laptop 4",
      description: "Sleek and stylish laptop for everyday use",
      cost: 1299,
      brand: "Microsoft"
    },
    {
      name: "ZenBook UX425",
      description: "Thin and light laptop with long battery life",
      cost: 899,
      brand: "Asus"
    },
    {
      name: "Chromebook Spin 713",
      description: "Affordable and versatile laptop for students",
      cost: 599,
      brand: "Acer"
    }
  ];

  const dataTablet = [
    {
      name: "iPad Pro",
      description: "11-inch Liquid Retina display, A14 Bionic chip, and support for Apple Pencil and Magic Keyboard.",
      cost: 799,
      brand: "Apple"
    },
    {
      name: "Galaxy Tab S7+",
      description: "12.4-inch Super AMOLED display, Qualcomm Snapdragon 865 Plus processor, and support for the S Pen.",
      cost: 849,
      brand: "Samsung"
    },
    {
      name: "Surface Pro 7+",
      description: "12.3-inch PixelSense display, 11th Gen Intel Core processors, and optional LTE Advanced.",
      cost: 899,
      brand: "Microsoft"
    },
    {
      name: "Lenovo Tab P11 Pro",
      description: "11.5-inch OLED display, Qualcomm Snapdragon 730G processor, and quad speakers tuned by JBL.",
      cost: 499,
      brand: "Lenovo"
    },
    {
      name: "Fire HD 10",
      description: "10.1-inch 1080p full HD display, octa-core processor, and up to 12 hours of battery life.",
      cost: 149,
      brand: "Amazon"
    }
  ];
  

const phone = document.getElementById("phone");
const tablet = document.getElementById("tablet");
const laptop = document.getElementById("laptop");


phone.addEventListener("click", createTablePhon);
tablet.addEventListener("click", createTableLaptop);
laptop.addEventListener("click", createTableTablet);



function createTablePhon() {
  // получаем ссылку на элемент, куда будем вставлять таблицу
  const tableContainer = document.getElementById("table-container");

  // создаем таблицу
  const table = document.createElement("table");
  
  // создаем заголовок таблицы
  const headerRow = document.createElement("tr");
  const headerNames = ["Name", "Description", "Cost", "Brand"];

  headerNames.forEach((name) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = name;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  // добавляем данные в таблицу
  dataPhone.forEach((phone) => {
    const row = document.createElement("tr");
    const cells = [phone.name, phone.description, phone.cost, phone.brand];
    cells.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  // добавляем таблицу на страницу
   return tableContainer.appendChild(table);
}

function createTableLaptop() {
  const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  const headerNames = ["Name", "Description", "Cost", "Brand"];

  headerNames.forEach((name) => {
    const headerCell = document.createElement("th");
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  dataLaptop.forEach((Laptop) => {
    const row = document.createElement("tr");
    const cells = [Laptop.name, Laptop.description, Laptop.cost, Laptop.brand];
    cells.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  return tableContainer.appendChild(table);
}

function createTableTablet() {
  const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  const headerNames = ["Name", "Description", "Cost", "Brand"];

  headerNames.forEach((name) => {
    const headerCell = document.createElement("th");
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  dataTablet.forEach((Tablet) => {
    const row = document.createElement("tr");
    const cells = [Tablet.name, Tablet.description, Tablet.cost, Tablet.brand];
    cells.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  return tableContainer.appendChild(table);
}



  // Получаем ссылки на кнопки и соответствующие им div-элементы
  var phoneBtn = document.getElementById('phone');
  var tabletBtn = document.getElementById('tablet');
  var laptopBtn = document.getElementById('laptop');

  // Добавляем обработчик событий клика на каждую кнопку
  phoneBtn.addEventListener('click', function() {
    // Скрываем остальные div-элементы и показываем нужный
    tabletTab.classList.remove('active');
    laptopTab.classList.remove('active');
    phoneTab.classList.add('active');
  });

  tabletBtn.addEventListener('click', function() {
    // Скрываем остальные div-элементы и показываем нужный
    phoneTab.classList.remove('active');
    laptopTab.classList.remove('active');
    tabletTab.classList.add('active');
  });

  laptopBtn.addEventListener('click', function() {
    // Скрываем остальные div-элементы и показываем нужный
    phoneTab.classList.remove('active');
    tabletTab.classList.remove('active');
    laptopTab.classList.add('active');
  });




























// function renderDetails() {
//   const product = productsById[selectedProduct];

//   containerDetails.innerHTML = 
//   `<div class="card">
//       <img src="${product.thumbnail}" class="card-img-top p-3" alt="${product.title}">
//       <div class="card-body">
//         <h5 class="card-title">${product.title}</h5>
//         <p class="card-text">${product.description}</p>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item"><strong>Price:</strong> ${product.price}EUR</li>
//         <li class="list-group-item"><strong>Discount:</strong> ${product.discountPercentage}%</li>
//         <li class="list-group-item"><strong>Rating:</strong> ${product.rating}⭐</li>
//         <li class="list-group-item"><strong>Brand:</strong> ${product.brand}🏢</li>
//       </ul>
//       <div class="card-body">
//         <button data-purchase="${product.id}" class="btn btn-primary">Purchase</button>
//       </div>
//     </div>`;
// }