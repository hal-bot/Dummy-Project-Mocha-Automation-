//This is Page class that represents parent of all pages 

function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url(path)
}

module.exports = new Page()