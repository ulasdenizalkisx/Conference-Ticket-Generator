var file_empty = true;
var name_empty = true;
var github_empty = true;

var github_username;
var full_name;
var email;

var file;
document.getElementById('file_upload').addEventListener('change', function () {
    file = this.files[0];
    const Size = 500 * 1024;
    const span = document.getElementById('span');
    const img = document.getElementById('info_img');
    if (file) {
        if (file.size > Size) {
            span.className = 'file_info_text_error';
            span.innerText = 'File too large. Please upload a photo under 500KB.';
            img.src = 'assets/images/info_icon_error.png';
            file_empty = true;
            this.value = '';
        } 
        else {
            file_empty = false;
            span.className = 'file_info_text';
            span.innerText = 'Upload your photo (JPG or PNG, max size: 500KB).';
            img.src = 'assets/images/icon-info.svg';
            const photo = document.getElementById('500kb_photo');
            var tempURL = URL.createObjectURL(file);
            photo.style.padding = '0';
            photo.src = tempURL;

            document.getElementById('fileUploadText').innerHTML = '<div id="alignerdiv" class="alignerDiv"><button class="rem_chg_buttons1">Remove image</button><button id="img_change_button" class="rem_chg_buttons">Change image</button></div>';
        }
    }
});

document.getElementById('full_name').addEventListener('change',function () {
    full_name = document.getElementById('full_name').value;
    if (full_name == '') {
        name_empty = true;
    }
    else {
        name_empty = false;
    }
});

document.getElementById('github_input').addEventListener('change',function () {
    github_username = document.getElementById('github_input').value;
    if (github_username == '') {
        github_empty = true;
    }
    else {
        github_empty = false;
    }
});


document.addEventListener('click', function(event) {
  if (event.target && event.target.id === 'img_change_button') {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('file_upload').click();
  }
});

function ticketGenerator() {
        if (file_empty == false) {
        if (name_empty) {
            const icon = document.getElementById('name_error_icon');
            icon.src = 'assets/images/info_icon_error.png';
            document.getElementById('name_error_text').innerText = 'Please enter your name.';
            return false;
        }
        else {
            const icon = document.getElementById('name_error_icon');
            icon.src = '';
            document.getElementById('name_error_text').innerText = '';
        }
        email = document.getElementById('email_address').value;
        if (email != '' && email.includes('@') && email.includes('.com')) {
            const icon = document.getElementById('email_error_icon');
            icon.src = '';
            document.getElementById('email_error_text').innerText = '';
            document.getElementById('error_email').style.display = 'none';
            const text2 = `<span>We've emailed your ticket to <br><span class="orange_email">${email}</span> and will send updates in <br>the run up to the event.</span>`;
            document.getElementById('header_h2').innerHTML = text2;
        }
        else {
            const icon = document.getElementById('email_error_icon');
            icon.src = 'assets/images/info_icon_error.png';
            document.getElementById('email_error_text').innerText = 'Please enter a valid email address.';
            return false;
        }
        if (github_empty) {
            const icon = document.getElementById('github_error_icon');
            icon.src = 'assets/images/info_icon_error.png';
            document.getElementById('github_error_text').innerText = 'Please enter your github username.';
            return false;
        }
        else {
            const icon = document.getElementById('github_error_icon');
            icon.src = '';
            document.getElementById('github_error_text').innerText = '';
        }
        const fname = document.getElementById('full_name').value;
        const text = `<span> Congrats, <span class="gradient">${fname}</span><br>Your ticket is ready.</span>`;
        document.getElementById('header_h1').innerHTML = text;

        const ticket_img = document.getElementById('ticket_photo');
        var tempURL1 = URL.createObjectURL(file);
        ticket_img.src = tempURL1;
        document.getElementById('ticket_name_text').innerText = full_name;
        document.getElementById('github_username_text').innerText = github_username;
        const form_display = document.getElementById('form_main');
        form_display.style.display = 'none';
        const ticket_display = document.getElementById('ticket_main');
        ticket_display.style.display = 'block';
        const ticket_num = [6];
        ticket_num[0] = '#';
        for (let i = 1; i < 6; i++) {
            let x = Math.random() * 10;
            ticket_num[i] = Math.round(x);
        }
        for (let x of ticket_num) {
            document.getElementById('ticket_number').innerText += x;
        }
    }
}
