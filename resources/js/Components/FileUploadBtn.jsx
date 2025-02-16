import axios from 'axios';
import { useRef, useState } from 'react';

const FileUploadBtn = ({ onUpload }) => {
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert('File size exceeds 5MB limit.');
            return;
        }

        const formData = new FormData();
        formData.append('cv', file);

        try {
            setUploading(true);
            const response = await axios.post(route('cv.store'), formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.cv) {
                onUpload(response.data.cv);
            } else {
                alert('Upload failed.');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('File upload failed.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div
            onClick={() => fileInputRef.current.click()}
            className="cursor-pointer rounded-2xl border-[3px] border-dashed border-neutral-400 p-8"
        >
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                    type="file"
                    name="cv"
                    accept=".pdf"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </form>
            <div className="w-48 text-center">
                <h1 className="w-full text-lg font-semibold uppercase">
                    {uploading ? 'Mengunggah...' : 'Unggah file disini'}
                </h1>
                <span className="w-full text-center text-sm">
                    ukuran file maksimal 2MB
                </span>
            </div>
        </div>
    );
};

export default FileUploadBtn;
