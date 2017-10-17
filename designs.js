// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('.inputSubmit').click(function () {
    $('.pixelCanvas').append(function makeGrid() {
        const INPUT_HEIGHT = $('.inputHeight').val();
        const INPUT_WIDTH = $('.inputWidth').val();
        let table = "";
        for (i = 0; i < INPUT_HEIGHT; i++) {
            table += "<tr>";
            for (j = 0; j < INPUT_WIDTH; j++) {
                table += "<td></td>";
            }
            table += "</tr>";
        }
        return table;
    });
    $('.inputSubmit').remove();
    $('.sizePicker').append('<input type="button" class="startOver" value="Start Over!" onclick="window.location.reload()">');
});

$('.pixelCanvas').on('click', 'td', function () {
    $(this).css('background-color', $('.colorPicker').val());
});
