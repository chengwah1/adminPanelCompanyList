class Auth {
    constructor(){
        this.authenticated = JSON.parse(localStorage.getItem('loginStatus'));
    }
    login(cb){
        this.authenticated = true
        localStorage.setItem('loginStatus', JSON.stringify(this.authenticated));
        cb();
    }
    logout(cb){
        this.authenticated = false
        localStorage.setItem('loginStatus', JSON.stringify(this.authenticated));
        cb();
    }
    isAuthenticated(){
        return this.authenticated;
    }
}
export default new Auth();