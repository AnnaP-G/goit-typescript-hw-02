export interface ParamsRequest {
    query: string;
    page: number;
}

export interface Image {
    id: string;
    alt_description: string;
    urls: { small: string; regular: string };
}

export interface ImagesData {
    results: Image[];
}

export interface ErrorMessageProps {
    message?: string;
}

export interface ImageCardProps {
    image: Image;
    onModalOpen: (image: Image) => void;
}

export interface ImageGalleryProps {
    images: Image[];
    onModalOpen: (image: Image) => void;
}

export interface ImageModalProps {
    images: Image;
}

export interface LoadMoreBtnProps {
    onClick: () => void;
}

export interface SearchBarProps {
    onSubmit: (searchValue: string) => void;
}