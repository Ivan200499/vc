const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/menu', (req, res) => {
    fs.readFile('menu.json', (err, data) => {
        if (err) {
            res.status(500).send('Errore nel leggere il menu');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.get('/orders', (req, res) => {
    fs.readFile('orders.json', (err, data) => {
        if (err) {
            res.status(500).send('Errore nel leggere gli ordini');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.post('/orders', (req, res) => {
    fs.readFile('orders.json', (err, data) => {
        if (err) {
            res.status(500).send('Errore nel leggere gli ordini');
            return;
        }
        const orders = JSON.parse(data);
        orders.push(req.body);
        fs.writeFile('orders.json', JSON.stringify(orders, null, 2), (err) => {
            if (err) {
                res.status(500).send('Errore nel salvare l\'ordine');
                return;
            }
            res.send('Ordine inviato con successo');
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in esecuzione sulla porta ${PORT}`);
});
