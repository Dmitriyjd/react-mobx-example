import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';
import store from '../../store/counter';

class Home extends PureComponent {
    increment = () => {
        store.decrement()
    };
    decrement = () => {
        store.decrement()
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-1</button>
                <span>{store.counter}</span>
                <button onClick={this.increment}>+1</button>
            </div>
        )
    }
}

export default observer(Home);
