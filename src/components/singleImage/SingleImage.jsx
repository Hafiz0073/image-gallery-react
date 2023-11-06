import './SingleImage.css'

const SingleImage = ({ image, images, setImages, selectedImages, setSelectedImages }) => //props
{
    //image selection
    const toggleImageSelection = (imageId) => {
        if (selectedImages.includes(imageId)) {
            setSelectedImages(selectedImages.filter(id => id !== imageId));
        } else {
            setSelectedImages([...selectedImages, imageId]);
        }
    };

    //single image
    return (
        <div className="image-card">
            <img
                src={image.img}
                alt="Gallery"
                style={{
                    border: selectedImages.includes(image.id) ? '2px solid red' : '2px solid transparent',
                }}
                onClick={() => toggleImageSelection(image.id)}
            />
            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={selectedImages.includes(image.id)}
                    onChange={() => toggleImageSelection(image.id)}
                />
                <label></label>
            </div>
        </div>
    );
};

export default SingleImage;