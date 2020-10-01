function getDateDetails(date: Date, date2?: Date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        monthLong: date.getDate() /* won't be correct for today */,
        monthName: date.toLocaleString('default', { month: 'long' }),
        monthNameShort: date.toLocaleString('default', { month: 'short' }),
        startDayIndex: date2?.getDay(),
    };
}

type isTodayDate = ReturnType<typeof getDateDetails>;
export function isToday(d1: isTodayDate, d2: isTodayDate): boolean {
    // prettier-ignore
    return (
        d1.year === d2.year &&
        d1.month === d2.month &&
        d1.day === d2.day
    );
}

export function getTodayProductivity(d1: Date, d2: isTodayDate): boolean {
    const nd1 = getDateDetails(d1);
    return isToday(nd1, d2);
}

export default getDateDetails;
