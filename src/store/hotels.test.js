import expect from 'expect';
import configureStore from './configureStore';

const store = configureStore({}, (...args) => (args) => { return args; });

describe('store hotels reducer', () => {
    /* hotels reducer test*/
});
