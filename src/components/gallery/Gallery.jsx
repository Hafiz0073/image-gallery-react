import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import SingleImage from '../singleImage/SingleImage';
import './Gallery.css'

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
        // Fetch image data from data.json
        fetch('data.json')
            .then(response => response.json())
            .then(data => setImages(data));
    }, []);
    const deleteSelectedImages = () => {
        const updatedImages = images.filter(image => !selectedImages.includes(image.id));
        setImages(updatedImages);
        setSelectedImages([]); // Clear the selected images array
        toast.success("Successfully Deleted", { position: "top-center" });
    };

    return (
        <div>
            <div className="gallery-container">

                <div>
                    {selectedImages.length == 1 ? <h4>{selectedImages.length} File Selected</h4> : selectedImages.length ? <h4>{selectedImages.length} Files Selected</h4> : <h4>Gallery</h4>}
                </div>
                <div>
                    <button onClick={deleteSelectedImages}>Delete Files</button>
                </div>
            </div>

            <div className="image-container">
                {images.map(image => <SingleImage
                    key={image.id}
                    images={images}
                    setImages={setImages}
                    selectedImages={selectedImages}
                    setSelectedImages={setSelectedImages}
                    image={image}
                ></SingleImage>)}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Gallery;