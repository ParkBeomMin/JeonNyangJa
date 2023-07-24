export interface Cat {
    id: string;
    name: string;
    oneSentence: string;
    img: string;
}
export const useCat = () => {
    const useCatData = useState<{ catList: Array<Cat> }>('cat', () => ({
        catList: [
            { id: '1', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '2', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '3', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '4', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '5', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '6', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '7', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '8', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '9', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '10', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '11', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '12', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '13', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '14', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '15', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '16', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '17', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '19', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { id: '20', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
        ],
    }));

    const getCatData = ({ id }: { id: string }) => {
        return useCatData.value.catList.filter((cat) => cat.id == id)[0];
    };

    return { useCatData, getCatData };
};
