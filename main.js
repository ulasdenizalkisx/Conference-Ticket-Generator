function adyazdir() {
    let x = document.getElementById("text").value;
    window.alert(x);
}



function checkFileSize() {
    const input = document.getElementById('file_upload');
    if (input.files.length > 0) {
        const file = input.files[0];
        const size = file.size / 1024;
        if (size > 500) {
            document.getElementById("file_alligner").innerHTML = "<img class='file_info_img' src='assets/images/info_icon_error.png'><span class='file_info_text_error'>Upload your photo (JPG or PNG, max size: 500KB).</span>";
        }
    }
}

document.getElementById('file_upload').addEventListener('change', function () {
    const file = this.files[0];
    const Size = 500 * 1024;
    if (file) {
        if (file.size > Size) {
            document.getElementById('span').innerHTML = '<span class="file_info_text_error">File too large. Please upload a photo under 500KB.</span>';
            const img = document.getElementById('info_img');
            img.src = 'assets/images/info_icon_error.png';
            this.value = ''; 
        } 
        else {
            var photo = document.getElementById('500kb_photo');         
            const tempURL = URL.createObjectURL(file);
            photo.style.padding = '0';
            photo.src = tempURL;
            document.getElementById('fileUploadText').innerHTML = '<div id="alignerdiv" class="alignerDiv"><button class="rem_chg_buttons1">Remove image</button><button id="img_change_button" class="rem_chg_buttons">Change image</button></div>';
        }
    }
});

function removeImage(event) {
    event.preventDefault();
    event.stopPropagation();
    const photo = document.getElementById('500kb_photo');
    photo.src = 'assets/images/icon-upload.svg';
    photo.style.padding = '10px';
    document.getElementById('fileUploadText').innerHTML ='Drag and drop or click to upload';
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.id === 'img_change_button') {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('file_upload').click();
  }
});











