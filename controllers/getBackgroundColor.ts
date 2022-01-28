export const getBackgroundColorByRating = (rating: number) => {
    switch (true) {
        case rating >= 70: {
            return { backgroundColor: '#007500', color: '#FFF' };
        }
        case rating >= 50: {
            return { backgroundColor: '#ECF87F', color: '#000' };
        }
        case rating <= 49: {
            return { backgroundColor: '#FF0000', color: '#FFF' };
        }
    }
};
