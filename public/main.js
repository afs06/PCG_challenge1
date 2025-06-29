function UploadImage(){
    try {
        const uploadInput = document.getElementById("uploadButton");
        const imageContainer = document.getElementById("image-container");

        // Upload Image button
        uploadInput.addEventListener("change", function(event) {
            const files = event.target.files;

            for (let i = 0; i < files.length; i++) {
                const imageURL = URL.createObjectURL(files[i]);

                const wrapper = document.createElement("div");
                wrapper.className = "col-6 d-flex flex-column align-items-center";

                //Creating images and styling them
                const img = document.createElement("img");
                img.src = imageURL;
                img.style.maxWidth = "500px";
                img.style.height = "350px";
                img.style.objectFit = "cover";
                img.className = "img-thumbnail";

                //Adding a delete button
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "DELETE";
                deleteBtn.className = "btn btn-danger btn-sm mt-2";
                deleteBtn.addEventListener("click", function () {
                    DeleteImage(wrapper);
                });

                wrapper.appendChild(img);
                wrapper.appendChild(deleteBtn);
                imageContainer.appendChild(wrapper);
            }

            // Reset file input so same file can be re-selected
            uploadInput.value = "";
        });
    } catch (error) {
        console.log("Failed to upload image")
    }
}

function DeleteImage(wrapperElement){
    try {
        wrapperElement.remove()
    } catch (error) {
        window.alert("Failed to delete")
    }
}


//Calling functions
document.addEventListener("DOMContentLoaded", function(){
    UploadImage();
    DeleteImage();
})

