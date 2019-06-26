class Auth {
    isLogin = false;
    login(u, p) {
        return new Promise((res, rej) => {
            if ((u === "duanlian") && (p === "051101001")) {
                setTimeout(() => {
                    this.isLogin = true;
                    res();
                }, 500)
            } else {
                setTimeout(() => {
                    rej();
                }, 500)
            }
        });
    }
    logout() {
        this.isLogin = false;
    }
}
export default new Auth();