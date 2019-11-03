import React from 'react';

export default class SelectLanguage extends React.Component {

    render() {
        return (
            <div>
                {this.props.availableLanguages.map(language =>
                    <div key={'SelectLanguage_' + language.code}>
                        <img src={process.env.PUBLIC_URL + language.flag} width="32px" height="32px" className="rounded mr-2"></img>

                        <span className="badge badge-pill badge-light hover-info"
                            onClick={() => this.props.setLanguage(language.code)}>
                            {language.name}
                        </span>
                    </div>
                )}
            </div>
        )
    }

}