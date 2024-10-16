const images = {
    ...import.meta.glob('../assets/images/venues/*.jpg', {eager: true}),
    ...import.meta.glob('../assets/images/addons/*.jpg', { eager: true}),
    ...import.meta.glob('../assets/images/meals/*.jpg', { eager: true}),
};

const organizeImages = (images) => {
    const categorizedImages = {};

    Object.keys(images).forEach((path) => {
        const parts = path.split('/');
        const category = parts[parts.length - 2];
        const fileName = parts[parts.length - 1];

        if (!categorizedImages[category]) {
            categorizedImages[category] = {};
        }

        categorizedImages[category][fileName] = images[path].default;
    });

    return categorizedImages;
};

export const getCategorizedImages = () => organizeImages(images);