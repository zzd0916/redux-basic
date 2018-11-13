//抽离store
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
const initialState={}; //状态
const middleware= [thunk]; //中间件
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware), //applyMiddleware将所有中间件组合成数组依次执行方法
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store;