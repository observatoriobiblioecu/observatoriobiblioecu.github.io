document.addEventListener('DOMContentLoaded', function () {
  if (typeof $ !== 'undefined') {
    $('table.datatable').DataTable({
      pageLength: 10,
      lengthChange: false,
      responsive: true,
      language: {
        search: "Buscar:",
        paginate: {
          previous: "Anterior",
          next: "Siguiente"
        }
      }
    });
  }
});

