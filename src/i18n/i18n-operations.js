import LanguageEnglish from './en.json';
import LanguageHungarian from './hu.json';

export function getDictionary(languageCode) {
    if (languageCode === 'en')
        return LanguageEnglish;

    if (languageCode === 'hu')
        return LanguageHungarian;

    return null;
}

export function getAvailableLanguages() {
    const langs = [
        {
            code: "en",
            name: "English",
            dictionary: getDictionary('en'),
            flag: "/images/uk.png"
        },
        {
            code: "hu",
            name: "Magyar",
            dictionary: getDictionary('hu'),
            flag: "/images/hu.png"
        }
    ];

    return langs;
}
