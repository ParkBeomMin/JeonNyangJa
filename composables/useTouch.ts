export const useTouch = () => {
    let longTouchToggle = ref(false);
    let isLongClick = ref(false);
    let clickCnt = ref(0);
    let timer: NodeJS.Timeout;

    const touchStart = ({ onLongClick }: { onLongClick?: Function }) => {
        longTouchToggle.value = true;
        clickCnt.value++;
        setTimeout(() => {
            isLongClick.value = true;
            if (longTouchToggle.value) {
                onLongClick?.();
            }
        }, 1000);
    };
    const touchEnd = ({ onClick, onDoubleClick }: { onClick?: Function; onDoubleClick?: Function }) => {
        longTouchToggle.value = false;
        if (!isLongClick.value) {
            timer = setTimeout(onClick?.(), 200);
            //     onClick?.();
        }
        if (clickCnt.value == 2) {
            onDoubleClick?.();
            clearTimeout(timer);
            clickCnt.value = 0;
        }
        isLongClick.value = false;
    };

    return { touchStart, touchEnd };
};
