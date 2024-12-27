const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const attractionRoutes = require('./routes/attractions');
const visitorRoutes = require('./routes/visitors');
const reviewRoutes = require('./routes/reviews');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use('/attractions', attractionRoutes);
app.use('/visitors', visitorRoutes);
app.use('/reviews', reviewRoutes);

mongoose.connect('mongodb://localhost:27017/tourism', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err));