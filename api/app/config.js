const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://monika:Qwerty321@ds155663.mlab.com:55663/bazatai',
    JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;