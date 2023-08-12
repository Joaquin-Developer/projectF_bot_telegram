# projectF_bot_telegram


Dependencias:
```
LIBRERÍA:   VERSIÓN:
telegraf  - ^4.12.2
axios     - ^1.4.0
mongodb   - ^5.4.0
```

Dependencias de desarrollo:
```
LIBRERÍA:   VERSIÓN:
chai      - ^4.3.7
mocha     - ^10.2.0
nodemon   - ^2.0.22
```

Inslatarlas con: `npm i`

## Levantar el bot:
```bash
npm run start  # Modo Producción
npm run dev    # Modo Desarrollo
```

## Config.js
Crear una variable de entorno y asignarle el token:
```bash
# Forma 1:
export TELEGRAM_BOT_PROJECT_F_TOKEN="XXXXXXXX"

# Forma 2: (para que quede guardada al cerrar la terminal)
echo 'export TELEGRAM_BOT_PROJECT_F_TOKEN="XXXXXXXX"' >> ~/.bashrc
```
