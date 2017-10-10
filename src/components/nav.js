import React, { Component } from 'react';
import axios from 'axios';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuGroups:
            {
                products: [{
                    url: "#1",
                    linkText: "item1"
                },
                {
                    url: "#2",
                    linkText: "item2"
                }
                ]
            }

        };
    }

    componentDidMount() {
        axios.get("#navendpoint")
            .then(response => {
                this.setState({
                    menuGroups: response
                });
            });
    };
    render() {
        return (
            <MenuGroup menuGroup={this.state.menuGroups.products} />
        );
    }

}

class MenuGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuGroup: props.menuGroup
        };
    }

    render() {
        return (
            <div>
                <MenuItem url={this.state.menuGroup[0].url}
                    linkText={this.state.menuGroup[0].linkText} />
                <MenuItem url={this.state.menuGroup[1].url}
                    linkText={this.state.menuGroup[1].linkText} />
            </div>
        );
    }
}

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = { url: props.url, linkText: props.linkText };
    }
    render() {
        return (
            <li>{this.state.linkText}</li>
        );
    }
}
export default Nav;