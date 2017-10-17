// When size is submitted by user, this will append the specified rows and cols to table element:
$('.inputSubmit').click(function () {
    $('.pixelCanvas').append(function makeGrid() {
        // Gets the user specified values for grid height and width:
        const INPUT_HEIGHT = $('.inputHeight').val();
        const INPUT_WIDTH = $('.inputWidth').val();
        // Generates html code for table:
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
    // Removes Submit button after click and replaces it with a Start Over! button:
    $('.inputSubmit').remove();
    $('.sizePicker').append('<input type="button" class="startOver" value="Start Over!" onclick="window.location.reload()">');
});

// Replaces table cell background color with selected color on click
$('.pixelCanvas').on('click', 'td', function () {
    $(this).css('background-color', $('.colorPicker').val());
});
