const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://todo:todo@cluster0.bbzwlsz.mongodb.net/contacts',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;