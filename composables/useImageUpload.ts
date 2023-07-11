export const useImageUpload = () => {
    const useImageUploadData: { imageUrl: string; cropImageUrl: string; name: string; oneSentence: string } = reactive({ imageUrl: '', cropImageUrl: '', name: '', oneSentence: '' });

    const handleImageUpload = (event: Event) => {
        const file = (event.target as HTMLInputElement).files?.[0];

        if (file) {
            // 선택된 이미지를 서버로 업로드하는 예시
            const formData = new FormData();
            formData.append('image', file);

            // 서버로 이미지 업로드 요청을 보내는 코드를 작성하세요

            // 미리보기 제공을 위해 이미지 URL을 생성하는 예시
            const reader = new FileReader();
            reader.onload = (event) => {
                useImageUploadData.imageUrl = event.target?.result as string;
                // 생성된 이미지 URL을 사용하여 미리보기를 구현하세요
            };
            reader.readAsDataURL(file);
        }
    };

    const onCropChange = ({ coordinates, canvas }: { coordinates: any; canvas: any }) => {
        console.log(coordinates);

        useImageUploadData.cropImageUrl = canvas.toDataURL();
    };

    return { useImageUploadData, handleImageUpload, onCropChange };
};
