interface rankingTitle {
    week: string;
    month: string;
    [key: string]: string;
}
export const useRanking = () => {
    const title: rankingTitle = { week: '주냥이', month: '월냥이' };
    const getTitle = ({ type }: { type: string }) => {
        return title[type];
    };
    return { getTitle };
};
