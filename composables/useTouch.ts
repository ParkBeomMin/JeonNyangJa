export const useTouch = () => {
    let longTouchToggle = ref(false);
    let isLongClick = ref(false);

    const touchStart = ({ onLongClick }: { onLongClick: Function }) => {
        longTouchToggle.value = true;
        setTimeout(() => {
            isLongClick.value = true;
            if (longTouchToggle.value) {
                onLongClick();
            }
        }, 1000);
    };
    const touchEnd = ({ onClick }: { onClick: Function }) => {
        longTouchToggle.value = false;
        if (!isLongClick.value) {
            onClick();
        }
        isLongClick.value = false;
    };

    return { touchStart, touchEnd };
};
