
class auth {
    static authenticated = false;
    constructor() {
        this.authenticated = true;
    }

    login(cb) {
        this.authenticated = true;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}