import React from 'react';

const ImageGrid = ({ imageSrcs }: { imageSrcs: string[] }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {imageSrcs.map((imageSrc, index) => (
                <Image key={index} filename={imageSrc} />
            ))}
        </div>
    );
};

const Image = ({ filename }: { filename: string }) => {
    const getImageSrc = (filename: string) => {
        return `/assets/img/landing/baby/${filename.includes('.') ? filename : filename + '.png'}`;
    };

    return (
        <div className="bg-gray-400" style={{ opacity: 1, transform: 'none' }}>
            <img src={getImageSrc(filename)} alt={filename} className="w-full h-auto" />
        </div>
    );
};



export default ImageGrid;