document.addEventListener('DOMContentLoaded', () => {
    const attendanceForm = document.getElementById('attendanceForm');
    const photoUpload = document.getElementById('photoUpload');
    const uploadBtn = document.getElementById('uploadBtn');
    const photoPreview = document.getElementById('photoPreview');
    const message = document.getElementById('message');
    const recordList = document.getElementById('recordList');
    const verifyBtn = document.getElementById('verifyBtn');
    const verificationMessage = document.getElementById('verificationMessage');
    
    let photoDataUrl = '';

    uploadBtn.addEventListener('click', () => {
        if (photoUpload.files.length === 0) {
            message.textContent = 'Please upload a photo!';
            message.classList.add('text-red-500');
            return;
        }

        const file = photoUpload.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            photoPreview.src = e.target.result;
            photoPreview.classList.remove('hidden');
            photoDataUrl = e.target.result;
            message.textContent = 'Photo uploaded successfully!';
            message.classList.remove('text-red-500');
            message.classList.add('text-green-500');
        };

        reader.readAsDataURL(file);
    });

    attendanceForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const id = document.getElementById('id').value;
        const timing = document.getElementById('timing').value;

        if (!photoDataUrl) {
            message.textContent = 'Please upload a photo!';
            message.classList.add('text-red-500');
            return;
        }

        const recordHTML = `
            <div class="bg-gray-100 p-4 mb-4 border rounded">
                <h2 class="text-xl font-semibold">${name}</h2>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>ID:</strong> ${id}</p>
                <p><strong>Timing:</strong> ${timing}</p>
                <img src="${photoDataUrl}" alt="Photo" class="max-w-xs mt-2"/>
            </div>
        `;

        recordList.insertAdjacentHTML('beforeend', recordHTML);

        // Clear form fields
        attendanceForm.reset();
        photoPreview.classList.add('hidden');
        photoDataUrl = '';
        message.textContent = 'Record added successfully!';
        message.classList.remove('text-red-500');
        message.classList.add('text-green-500');
    });

    verifyBtn.addEventListener('click', () => {
        // Placeholder for image verification
        const isVerified = verifyPresence();
        
        if (isVerified) {
            verificationMessage.textContent = 'Verification successful!';
            verificationMessage.classList.remove('text-red-500');
            verificationMessage.classList.add('text-green-500');
        } else {
            verificationMessage.textContent = 'Verification failed. Please try again!';
            verificationMessage.classList.remove('text-green-500');
            verificationMessage.classList.add('text-red-500');
        }
    });

    function verifyPresence() {
        // Simulated verification logic; replace with real image recognition
        // For now, it always returns true for demonstration purposes
        return true;
    }
});
