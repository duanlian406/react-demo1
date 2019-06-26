class Service {
    constructor(){
        this.data = JSON.parse(localStorage.getItem('todoList'))||[
            {
                'name': 111,
                'done': false
            },
            {
                'name': 222,
                'done': false
            },
            {
                'name': 333,
                'done': true
            },
            {
                'name': 444,
                'done': true
            },
            {
                'name': 555,
                'done': true
            },
        ];
    }
    getData(){
        return this.data;
    }
    saveData(arr){
        this.data = arr;
        localStorage.setItem('todoList',JSON.stringify(arr));
    }
}

export default new Service();