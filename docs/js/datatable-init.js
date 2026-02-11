$(document).ready(function () {

    const configComun = {
        pageLength: 10,
        lengthChange: false,
        responsive: true,
        dom: "<'dt-toolbar'f>rt<'dt-footer'ip>",
        language: {
            search: "",
            searchPlaceholder: "Buscar...",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            paginate: {
                previous: "‹",
                next: "›"
            }
        }
    };

    $('#tabla-publicaciones').DataTable(configComun);
    $('#tabla-asociaciones').DataTable(configComun);

});

