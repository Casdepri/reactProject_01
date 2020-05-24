export const required = value => {
    if (value) return undefined;
    return "Заполните обязательные поля";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максимальная длина ${maxLength}`;
    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Минимальная длина ${minLength}`;
    return undefined;
}

export const wrongDataCreator = value => {
    if (value) return undefined;
    return "Введённые данные не верны";
}

