import React from 'react';

const ImageGrid = ({ path, filenames, className }: { path: string, filenames: string[], className?: string }) => {
    return (
        <div className={`grid grid-cols-3 sm:grid-cols-4 gap-3 ${className} max-w-full`}>
            {filenames.map((filename, index) => (
                <Image key={index} filename={filename} path={path} />
            ))}
        </div>
    );
};

const Image = ({ path, filename }: { path: string, filename: string }) => {
    const getImageSrc = (filename: string) => {
        return `${path}/${filename.includes('.') ? filename : filename + '.jpg'}`;
    };

    return (
        <div
            className="bg-neutral-600 w-full relative"
            style={{
                paddingBottom: '100%',
                backgroundImage: `url(${getImageSrc(filename)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
        </div>
    );
};



export default ImageGrid;