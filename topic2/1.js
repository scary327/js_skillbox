let a = '_-a';

if (a.length >= 4 && (a.indexOf('-') || a.indexOf('_'))) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль недостаточно надёжный');
}