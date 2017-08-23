var configValues = require('./config')

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configValues.username}:${configValues.password}@ds153113.mlab.com:53113/nodetodo_thang`;
    }
}