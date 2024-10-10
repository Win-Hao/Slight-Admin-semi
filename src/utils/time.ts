import dayjs from "dayjs";

export const formatTimeStamp = (timeStamp: number): string => {
    const date = dayjs.unix(timeStamp);
    return date.format('YYYY-MM-DD')
}