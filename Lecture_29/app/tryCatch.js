function MyErrorException(message) {
    this.message = message;
}

try {
    // выполняется код
    throw new MyErrorException('Error message!');
} catch (er) {
    // Логирование о ошибке
    console.error(er.message);
} finally {
    // выполнится в любом случае
    console.log('Ура!');
}
