// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('#input_submit').click(function () {
    $('#pixel_canvas').append(function makeGrid() {
        const inputHeight = $('#input_height').val();
        const inputWidth = $('#input_width').val();
        let table = "";
        for (i = 0; i < inputHeight; i++) {
            table += "<tr>";
            for (j = 0; j < inputWidth; j++) {
                table += "<td></td>";
            }
            table += "</tr>";
        }
        return table;
    });
});

$('#pixel_canvas').on('click', 'td', function () {
    $(this).toggleClass('colored');
});
