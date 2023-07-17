export interface Cat {
    name: string;
    oneSentence: string;
    img: string;
}
export const useCat = () => {
    const useCatData = useState<{ catList: Array<Cat> }>('cat', () => ({
        catList: [
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
            { name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
        ],
    }));

    return { useCatData };
};
