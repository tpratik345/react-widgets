import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import axios from "axios";

const options = [
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
];

const URL = "https://translation.googleapis.com/language/translate/v2/languages";
const APIKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");
    const [supportedLanguages, setSupportedLanguages] = useState([]);
    
    const renameKeys = (data)  => {
        const list = [];
        data.map( ({language, name}) => {
            const obj = {}
            if(!obj[name]) {
                obj['label'] = name;
                obj['value'] = language;
                list.push(obj);
            }
        });
        return list;
    }

    useEffect(() => {
        const languageList = async () => {
            const { data } = await axios.get(URL, {
                params: {
                    target: 'en',
                    key: APIKey,
                },
            });
            // console.log(data.data.languages);
            setSupportedLanguages(renameKeys(data.data.languages));
            // setSupportedLanguages(data);
        };
        languageList();
    }, []);

    return (
        <div className="ui">
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a language"
                selected={language}
                onSelectedChange={setLanguage}
                options={supportedLanguages}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
