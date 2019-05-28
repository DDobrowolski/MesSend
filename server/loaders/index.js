const expressLoader = require('./express_loader');
const mongooseLoader = require('./mongoose_loader');

module.exports = async (app) => {
    const mongoConnection = await mongooseLoader();
    console.log('MongoDB intialized.');
    await expressLoader(app);
    console.log('Express initialized.');
}