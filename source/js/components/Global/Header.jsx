import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className='main-header'>
                <h1>Rank Albums</h1>
                <p>
                    <strong>LinkedIn:</strong>
                    <a href='https://www.linkedin.com/in/norman-chen-11712970/' target='_blank'>
                        https://www.linkedin.com/in/norman-chen-11712970/
                    </a>
                </p>
                <p>
                    <strong>email:</strong>
                    <a href='mailto:nanron0919@gmail.com'>
                        nanron0919[at]gmail.com
                    </a>
                </p>
            </header>
        );
    }
}
