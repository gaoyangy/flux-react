import AppDispatcher from 'app/dispatcher/AppDispatcher'

class ButtonActions {

    //发送ADD_NEW_ITEM的Action的方法
    addNewItem(text) {
        //调用Dispatcher获取actionType为ADD_NEW_ITEM的Action
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        })
    }
    removeNewItem(id) {
        AppDispatcher.dispatch({
            actionType: 'REMOVE_NEW_ITEM',
            id: id
        })
    }
}

export default ButtonActions