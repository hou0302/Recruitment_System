
function appointment() {
    var appointment_one = document.getElementById("time_1_1").value + document.getElementById("time_2_1").value;
    var appointment_two = document.getElementById("time_1_2").value + document.getElementById("time_2_2").value;
    var appointment_three = document.getElementById("time_1_3").value + document.getElementById("time_2_3").value;
    var csrf_token = getCookie('csrftoken');
    $.ajax({
        url: "/sign_up/",
        type: "POST",
        data: {'appointment_one': appointment_one,
                'appointment_two': appointment_two,
                'appointment_three': appointment_three,
                'csrfmiddlewaretoken': csrf_token},
        success: function (result) {
            console.log(result);
        }
    })
}