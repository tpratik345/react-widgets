import React, { useState, useEffect} from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    const URL = 'https://translation.googleapis.com/language/translate/v2';
    const APIKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

    useEffect( () => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect( () => {
        const doTranslation = async () => {
            const { data } = await axios.post(URL, {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: APIKey
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        }
        doTranslation();
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;
