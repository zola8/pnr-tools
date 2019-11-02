import React from 'react';

export default class SelectLanguage extends React.Component {

    render() {
        return (
            <div>
                {this.props.availableLanguages.map(language =>
                    <div key={'SelectLanguage_' + language.code}>
                        <a href="/#" onClick={() => this.props.setLanguage(language.code)}>{language.name}</a>
                    </div>
                )}
            </div>
        )
    }

}