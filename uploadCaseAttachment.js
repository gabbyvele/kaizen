$(document).ready(function () {


    $("#upload").click(function () {
        // Validation

        alert("HELLO");
        f = document.getElementById('_file').value;

        _file = document.getElementById('_file');// This is the actual file from the form, we fetch it via its id
        var user_id = localStorage.id;// user id from a session
        //looping through  the file just to ensure that it is not empty
        if (_file.files.length === 0) {
            return;
        }
        var fd = new FormData();//Creating a new form object
        fd.append('SelectedFile', _file.files[0]);// Storing the form elements into the newly created object
        fd.append('user_id', user_id);//Storing the user id into the object
        var file_data = $('input[type="file"]')[0].files; // for multiple files
        for (var i = 0; i < file_data.length; i++) {
            fd.append("file_" + i, file_data[i]);
        }
        var other_data = $('form').serializeArray();// converting the form data (text,string) into an array
        $.each(other_data, function (key, input) {
            fd.append(input.name, input.value);//finally storing the form data (text, string)
        });
        var clientName = "vuks";
        fd.append('clientName', clientName);

        $.ajax({
            url: 'uploadCaseAttachment.php',// Url to the php file upload webservice
            //url: 'http://www.myitzar.co.za/php/kaizen/uploadCaseAttachment.php',// Url to the php file upload webservice
            data: fd,
            // data: {fd:fd, clientName:"clientName"},
            contentType: false,// contentType and proccessData must always set to false when dealing with form data
            processData: false,
            type: 'POST',
            success: function (data) {
                //location.reload();
                console.log(data);// This is for testing purposes
                alert(data);//Receiving server response from the php webservice
            }
        });


    });
});
