const addNullToDate = (date: number) => {
    return String(date).length >= 2 ? date : `${'0' + date}`;
};
export const getFormattedDate = (date: {
    year: number;
    month: number;
    day: number;
}) => {
    return `${date.year} ${addNullToDate(date.month)} ${addNullToDate(
        date.day
    )}`;
};
