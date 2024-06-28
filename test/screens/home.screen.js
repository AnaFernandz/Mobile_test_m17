class HomeScreen { 
    get #enterStoreUrl(){
        return $('id:button_login_store')
    }

    async goToLogin (){
       await this.#enterStoreUrl.click()
    }
}

module.exports = new HomeScreen()
