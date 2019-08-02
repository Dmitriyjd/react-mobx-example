import { observable } from 'mobx'

class CouterScore {
    @observable counter = 0;
    increment() { this.counter++ }
    decrement() { this.counter-- }
}

export default new CouterScore()
