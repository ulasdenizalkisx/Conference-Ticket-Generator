document.getElementById('file_upload').addEventListener('change', function () {
    const file = this.files[0];
    const Size = 500 * 1024;
    const span = document.getElementById('span');
    const img = document.getElementById('info_img');
    if (file) {
        if (file.size > Size) {
            span.className = 'file_info_text_error';
            span.innerText = 'File too large. Please upload a photo under 500KB.';
            img.src = 'assets/images/info_icon_error.png';
            this.value = '';
        } 
        else {
            span.className = 'file_info_text';
            span.innerText = 'Upload your photo (JPG or PNG, max size: 500KB).';
            img.src = 'assets/images/icon-info.svg';
            const photo = document.getElementById('500kb_photo');
            const tempURL = URL.createObjectURL(file);
            photo.style.padding = '0';
            photo.src = tempURL;

            // Remove & Change buttons (with working remove)
            document.getElementById('fileUploadText').innerHTML = '<div id="alignerdiv" class="alignerDiv"><button class="rem_chg_buttons1">Remove image</button><button id="img_change_button" class="rem_chg_buttons">Change image</button></div>';
        }
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
    const fname = document.getElementById('full_name').value;
    const text = `<span> Congrats, <span class="gradient">${fname}</span><br>Your ticket is ready.</span>`;
    document.getElementById('header_h1').innerHTML = text;

    const email = document.getElementById('email_address').value;
    const text2 = `<span>We've emailed your ticket to <br><span class="orange_email">${email}</span> and will send updates in <br>the run up to the event.</span>`;
    document.getElementById('header_h2').innerHTML = text2;

    document.getElementById('container').style.display = "none";

}
