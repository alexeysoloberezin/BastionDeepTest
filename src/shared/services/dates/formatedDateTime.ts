function formatDateTime(dateStr: string): string {
    const date = new Date(dateStr);

    // Получаем время в формате "Час:Минута"
    const time = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

    // Получаем дату в формате "День Месяц Год"
    const dateFormatted = date.toLocaleDateString('ru-RU');

    // Возвращаем строку в формате "Время / Дата"
    return `${time} / ${dateFormatted}`;
}

export default formatDateTime;
