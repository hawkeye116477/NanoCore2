/******************************************************************************

    Nano Core 2 - An adblocker
    Copyright (C) 2018  Nano Core 2 contributors

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*******************************************************************************

    Locale file.

******************************************************************************/

"use strict";

/*****************************************************************************/

(() => {

    /*************************************************************************/

    const mk_link = (url, name) => {
        return "<a href='" + url + "'>" + name + "</a>";
    };

    /*************************************************************************/

    const ubo_res_doc =
        "https://github.com/gorhill/uBlock/wiki/Resources-Library";
    const nano_res_doc =
        "https://github.com/NanoAdblocker/NanoFilters/blob/master/NanoFiltersSource/NanoResources.txt";

    /*************************************************************************/

    return {

        /*********************************************************************/

        // Dashboard

        "nano_d_ui_group": {
            "message": "Interfejs użytkownika",
            "description": "Group 'User interface' of settings tab",
        },

        "nano_d_line_wrap_e": {
            "message": "Zawijaj długie linie w edytorze filtrów",
            "description": "English: Soft wrap long lines in filter editor",
        },

        "nano_d_line_wrap_v": {
            "message": "Zawijaj długie linie w przeglądarce filtrów",
            "description": "English: Soft wrap long lines in filter viewer",
        },

        "nano_d_recompile_filters": {
            "message": "Wymuś rekompilację filtrów",
            "description": "Button in advanced settings to recompile filters",
        },

        "nano_d_resources_links": {
            "message": "Nano ma dwa zestawy zasobów, " +
            mk_link(ubo_res_doc, "Zasoby uBlocka Origin") + " i " +
            mk_link(nano_res_doc, "dodatkowe zasoby Nano") + ".",

            "description": "Resources reference links",
        },

        "nano_d_ace_help": {
            "message": "Edytor filtrów Nano jest obsługiwany przez Ace i większość skrótów klawiszowych działa tak samo.",

            "description": "Explain the similarity between Nano Filter " +
            "Editor and Ace in terms of shortcut keys",
        },

        "nano_d_unsaved_warning": {
            "message": "Chcesz opuścić kartę?\nZmiany, których dokonałeś, nie zostaną zapisane.",
            "description": "Unsaved change warning",
        },

        "nano_d_about_based_on": {
            "message": "Bazuje na {{@data}}",
            "description": "English: Based on {{@data}}",
        },

        /*********************************************************************/

        // Filter viewer

        "nano_v_title": {
            "message": "Nano — Przeglądarka filtrów",
            "description": "Title of the filter viewer",
        },

        "nano_v_read_error": {
            "message": "Nie można załadować zawartości, proszę odświeżyć.",
            "description": "Error when filter content could not be loaded",
        },

        /*********************************************************************/

        // Popup panel

        "nano_p_cache_control": {
            "message": "sterowanie cache",
            "description": "The cache control strip name",
        },

        "nano_p_open_firewall_pane": {
            "message": "Przełącz panel zapory sieciowej",
            "description": "Tooltip for toggle firewall pane button",
        },

        "nano_p_refresh_button": {
            "message": "Kliknij, by odświeżyć tę stronę.\n\nCCtrl+klik, by odświeżyć tę stronę, pomijając pamięć podręczną.",

            "description": "English: Click to refresh this " +
            "page.\n\nCtrl+click to refresh this page while bypassing cache.",
        },

        // Beta buttons

        "nano_p_force_scroll": {
            "message": "(beta) Włącz tryb wymuszonego paska przewijania (to może zepsuć układ strony)",
            "description": "Tooltip for force scroll button"
        },

        "nano_p_bug_reporter": {
            "message": "(beta) Otwórz zgłaszacza błędów",
            "description": "Tooltip for bug reporter button"
        },

        /*********************************************************************/

        // Whitelist linter warnings

        "nano_l_whitelist_aborted_w": {
            "message": "Nano nie skanował pozostałych linii w poszukiwaniu ostrzeżeń, ponieważ jest zbyt wiele ostrzeżeń.",

            "description": "Warning when too many warnings",
        },

        "nano_l_whitelist_suspecious_re": {
            "message": "Ta linia jest traktowana jako wyrażenie regularne, czy to było zamierzone?",

            "description": "Warning when parsed as regular expression but " +
            "is unlikely the intention of user",
        },

        /*********************************************************************/

        // Whitelist linter errors

        "nano_l_whitelist_aborted_e": {
            "message": "Nano nie skanował pozostałych linii w poszukiwaniu błedów, ponieważ jest zbyt wiele błędów.",

            "description": "Error when too many errors",
        },

        "nano_l_whitelist_invalid_hostname": {
            "message": "Ta nazwa hosta jest nieprawdłowa.",
            "description": "Error when hostname not valid",
        },

        "nano_l_whitelist_invalid_re": {
            "message": "To wyrażenie regularne zawiera błędy w składni.",
            "description": "Error when regular expression has syntax errors",
        },

        "nano_l_whitelist_invalid_url": {
            "message": "Ten adres URL jest nieprawidłowy.",
            "description": "Error when a URL not valid",
        },

        /*********************************************************************/

        // Filter linter warnings

        "nano_l_filter_aborted_w": {
            "message": "Nano nie skanował pozostałych linii w poszukiwaniu ostrzeżeń, ponieważ jest zbyt wiele ostrzeżeń.",

            "description": "Warning when too many warnings",
        },

        "nano_l_filter_script_snippet_double_exception": {
            "message": "Nano odrzucił zanegowaną domenę, ponieważ nie może ona zostać użyta w regule wyjątku dot. fragmentu skryptu.",

            "description": "Warning when negated domain used with script " +
            "snippet exception",
        },

        "nano_l_filter_converted_to_exception": {
            "message": "Nano zamienił tą regułę na regułę wyjątku, ponieważ zawiera ona tylko zanegowane domeny.",

            "description": "Warning when a rule is convered to exception " +
            "because all negated domains",
        },

        "nano_l_filter_negated_html_filtering": {
            "message": "Zanegowane domeny nie są jeszcze obsługiwane w przypadku filtrowania HTML.",

            "description": "Warning when negated domain used with HTML " +
            "filtering",
        },

        "nano_l_filter_discarded_non_negatable_type": {
            "message": "Nano odrzucił opcję typu '{{type}}', ponieważ nie można jej zanegować.",

            "description": "English: Nano discarded the type option " +
            "'{{type}}' because it cannot be negated.",
        },

        "nano_l_filter_expanded_mp4_option": {
            "message": "Nano zamienił opcję 'mp4' na 'media,redirect=noopmp4-1s'.",

            "description": "Warning when 'mp4' is replaced",
        },

        "nano_l_filter_unsupported_type_ignored": {
            "message": "Nano odrzucił typy opcji, które nie są jeszcze obsługiwane.",

            "description": "Warning when unsupported type options " +
            "discarded but not entire rule",
        },

        /*********************************************************************/

        // Filter linter deprecations

        "nano_l_filter_comment_bracket": {
            "message": "Używanie '[' do oznaczenia komentarza jest przestarzałe, skorzystaj z '!' zamiast tego.",

            "description": "Deprecation when '[' used for comments",
        },

        "nano_l_filter_inline_comment": {
            "message": "Komentarze inline są przestarzałe.",
            "description": "Deprecation when inline comments",
        },

        "nano_l_filter_script_contains": {
            "message": "Reguła '##script:contains(...)' jest przestarzała, skorzystaj z '##^script:has-text(...)' zamiast niej.",

            "description": "Deprecation when 'script:contains' is used",
        },

        "nano_l_filter_mp4_option": {
            "message": "Korzystanie z opcji 'mp4' jest przestarzałe, zamiast tego wpisz pełne opcje.",

            "description": "Deprecation when 'mp4'",
        },

        /*********************************************************************/

        // Filter linter errors

        "nano_l_filter_aborted_e": {
            "message": "Nano nie skanował pozostałych linii w poszukiwaniu błedów, ponieważ jest zbyt wiele błędów.",

            "description": "Error when too many errors",
        },

        "nano_l_filter_ag_js_injection": {
            "message": "Wstrzykiwanie surowego JavaSriptu nie jest akceptowane ze względów bezpieczeństwa.",

            "description": "Error when raw JavaScript injection",
        },

        "nano_l_filter_bad_selector": {
            "message": "Selektor tej reguły zawiera błędy w składni.",
            "description": "Error when selector has syntax errors",
        },

        "nano_l_filter_too_expensive": {
            "message": "Ta reguła nie może być ogólna.",
            "description": "Error when expensive cosmetic is generic",
        },

        "nano_l_filter_style_injection_syntax_error": {
            "message": "Ta reguła wstrzykiwania CSS zawiera błędy w składni.",
            "description": "Error when CSS injection has syntax errors",
        },

        "nano_l_filter_assets_access_violation": {
            "message": "Filtry nieuprzywilejowane nie mogą odwoływać się do uprzywilejowanych " +
            "zasobów.",

            "description": "Error when unprivileged filter references a " +
            "privileged resources",
        },

        "nano_l_filter_localhost_entry": {
            "message": "Ten wpis pliku hosta jest odrzucany, ponieważ jest to deklaracja localhost.",

            "description": "Error when localhost declaration",
        },

        "nano_l_filter_ag_element_remove": {
            "message": "Reguły usuwania elementów ze składnią AdGuarda nie są jeszcze obsługiwane.",

            "description": "Error when Adguard style element remove rule",
        },

        "nano_l_filter_negated_generichide": {
            "message": "Opcje 'generichide', 'ghide', i 'elemhide' nie mogą być zanegowane.",

            "description": "Error when 'generichide' is negated",
        },

        "nano_l_filter_bad_domain_option_arguments": {
            "message": "Opcja 'domain=...' zawiera nieprawidłowe argumenty.",
            "description": "Error when 'domain=' has invalid arguments",
        },

        "nano_l_filter_bad_csp_option_arguments": {
            "message": "Opcja 'csp=...' zawiera nieprawidłowe argumenty.",
            "description": "Error when 'csp=' has invalid arguments",
        },

        "nano_l_filter_unknown_option": {
            "message": "Opcja '{{option}}' nie jest rozpoznawana.",

            "description": "English: The option '{{option}}' is not " +
            "recognized.",
        },

        "nano_l_filter_only_unsupported_type": {
            // TODO: This was phrased like this due to weird behavior of the
            // type option 'webrtc', but turns out to be a bug:
            // https://github.com/gorhill/uBlock/issues/3433
            // Need to investigate whether this should be changed.
            "message": "Opcja typu nie jest jeszcze obsługiwana.",

            "description": "Error when unsupported type option used and " +
            "entire rule discarded",
        },

        "nano_l_filter_bad_re": {
            "message": "Ta reguła sieciowa zawiera błędy w składni wyrażeń regularnych.",

            "description": "Error when network has regular expression " +
            "syntax errors",
        },

        "nano_l_filter_intervention_smed79": {
            // https://github.com/chrisaljoudi/uBlock/issues/1096
            "message": "Znak '^' nie może być bezpośrednio po kotwicy domeny.",

            "description": "Error when the bad rule from SMed79 is discarded",
        },

        /*********************************************************************/

        // Redirect rule warnings

        "nano_r_no_type": {
            "message": "Nano odrzucił opcję 'redirect=...', ponieważ wymagana ona typu opcji.",

            "description": "Warning when 'redirect=' has no type",
        },

        "nano_r_too_many_types": {
            "message": "Nano odrzucił opcję 'redirect=...', ponieważ zawiera ona zbyt wiele typów opcji.",

            "description": "Warning when 'redirect=' has too many types",
        },

        "nano_r_no_resource_token": {
            "message": "Nano odrzucił opcję 'redirect=...', ponieważ nie zawiera ona żadnych argumentów.",

            "description": "Warning when 'redirect=' has no arguments",
        },

        "nano_r_no_supported_type": {
            "message": "Nano odrzucił opcję 'redirect=...', ponieważ nie zawiera ona żadnych obsługiwanych opcji typu.",

            "description": "Warning when 'redirect=' has no supported type",
        },

        "nano_r_negated_domain": {
            "message": "Nano odrzucił zanegowaną domenę, ponieważ nie może ona zostać użyta z opcją 'redirect=...'.",

            "description": "Warning when negated domain used with 'redirect='",
        },

        "nano_r_no_destination": {
            "message": "Nano odrzucił opcję 'redirect=...', ponieważ nie zawiera ona żadnej prawidłowej domeny docelowej.",

            "description": "Warning when 'redirect=' has no destination",
        },

        "nano_r_redirect_in_exception": {
            "message": "Opcja 'redirect=...' nie może zostać wykorzystana w " +
            "regułach wyjątku",
            "description": "Error when 'redirect=' used in exception",
        },

        "nano_r_does_not_match_re": {
            // TODO: Think of a better warning message
            "message": "Nano odrzucił opcję 'redirect=...', ponieważ ta reguła sieciowa nie pasuje do tego wyrażenia regularnego: {{regexp}}",

            "description": "Warning when 'redirect=' failed initial test, " +
            "use '{{regexp}}' to denote the tester if needed",
        },

        /*********************************************************************/

        // Known bugs warnings

        "nano_b_cosmetic_filter_passed_through": {
            "message": "Ta reguła jest na razie odrzucana. Więcej informacji na: https://github.com/NanoAdblocker/NanoCore/issues/77",

            "description": "https://github.com/NanoAdblocker/NanoCore/issues/77",
        },

        /*********************************************************************/

    };
})();

/*****************************************************************************/
