const { anchorate } = require('anchorate')

exports.onRouteUpdate = () => {
    anchorate({
        callback: function(error) {
            // console.log(error)
        }
    })
}