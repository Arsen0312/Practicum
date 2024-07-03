const path = require('path');

module.exports = {
    // другие настройки
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'public/assets')
        }
    }
};
