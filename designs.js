// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('.inputSubmit').click(function () {
    $('.pixelCanvas').append(function makeGrid() {
        const inputHeight = $('.inputHeight').val();
        const inputWidth = $('.inputWidth').val();
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
    $('.inputSubmit').remove();
    $('.sizePicker').append('<input type="button" class="startOver" value="Start Over!" onclick="window.location.reload()">');
});

$('.pixelCanvas').on('click', 'td', function () {
    $(this).css('background-color', $('.colorPicker').val());
});
