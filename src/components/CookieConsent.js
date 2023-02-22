import { useEffect } from "react";
import pluginConfig from '../components/CookieConsentConfig'
import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieConsent() {
    useEffect(() => {

        if (!document.getElementById('cc--main')) {
            window.CookieConsentApi = window.initCookieConsent();
            window.CookieConsentApi.run(pluginConfig);
        }

    }, []);

    return null;
}