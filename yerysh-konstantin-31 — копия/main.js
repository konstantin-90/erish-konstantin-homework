fetch("./products.json")
  .then(res => res.json())
  .then(data => {
    const element = document.querySelector("[data-table=\'products\']");
    const table = renderTable(data.products);

    element.append(table);

    function renderTable(data) {
      const tableHead = rendeerHead();
      const tableBody = renderBody(data);

      const table = document.createElement("table");
      table.setAttribute("class", "table")
      table.append(tableHead);
      table.append(tableBody);
      return table;
    }

    function rendeerHead() {
      const thead = document.createElement("thead");

      return thead;
    }


    function renderBody() {
      const tbody = document.createElement("tbody");

      return tbody;
    }


  });

  