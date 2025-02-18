import axios from 'axios';
import { useRef, useState } from 'react';

const FileUploadBtn = ({ onUpload = () => {}, className = '' }) => {
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 2 * 1024 * 1024) {
            alert('File melebihi batas ukuran 2MB.');
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
            className={`w-fit cursor-pointer rounded-2xl border-[3px] border-dashed border-neutral-400 p-8 ${className}`}
        >
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
