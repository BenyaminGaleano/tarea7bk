const app = require('./config/server');

require('./rutas/notas')(app);

app.listen(app.get('port'), ()=>console.log(`servidor iniciado en ${app.get('port')}`));