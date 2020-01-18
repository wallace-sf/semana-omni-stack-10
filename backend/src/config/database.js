const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-rnoc4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})