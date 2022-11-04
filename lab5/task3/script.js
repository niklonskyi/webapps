const ORIGINAL_TEXT = document.getElementById('original-text');
const TRANS_TEXT = document.getElementById('trans-text');

const TRANSLITARATION_MAP = new Map([
    ['а', 'a'],
    ['б', 'b'],
    ['в', 'v'],
    ['г', 'h'],
    ['ґ', 'g'],
    ['д', 'd'],
    ['е', 'e'],
    ['є', 'ye'],
    ['ж', 'zh'],
    ['з', 'z'],
    ['и', 'y'],
    ['і', 'i'],
    ['ї', 'yi'],
    ['й', 'y'],
    ['к', 'k'],
    ['л', 'l'],
    ['м', 'm'],
    ['н', 'n'],
    ['о', 'o'],
    ['п', 'p'],
    ['р', 'r'],
    ['с', 's'],
    ['т', 't'],
    ['у', 'u'],
    ['ф', 'f'],
    ['х', 'kh'],
    ['ц', 'ts'],
    ['ч', 'ch'],
    ['ш', 'sh'],
    ['щ', 'shch'],
    ['ь', '`'],
    ['ю', 'yu'],
    ['я', 'ya']])

ORIGINAL_TEXT.addEventListener('change', (evt) => {
    let text = '';
    TRANS_TEXT.value = text;
    for (const textElement of ORIGINAL_TEXT.value) {
        if (textElement === " " || textElement === "," || textElement === "."){
            text += textElement;
        }
        else {
            text += TRANSLITARATION_MAP.get(textElement);
        }
        TRANS_TEXT.value = (text);
    }
})