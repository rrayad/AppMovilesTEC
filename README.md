# Carrito de Compras

## instalación
```npx react-native init compras```

### Agregar las dependencias

```
{
  "name": "Compras",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "@react-native-community/masked-view": "^0.1.6",
    "native-base": "^2.13.8",
    "react": "16.9.0",
    "react-native": "0.61.5",
    "react-native-gesture-handler": "^1.6.0",
    "react-native-safe-area-context": "^0.7.3",
    "react-native-screens": "^2.0.0-beta.8",
    "react-native-vector-icons": "^6.6.0",
    "react-navigation": "^4.1.1",
    "react-navigation-stack": "^2.1.1"
  },
  "devDependencies": {
    "@babel/core": "^7.6.2",
    "@babel/runtime": "^7.6.2",
    "@react-native-community/eslint-config": "^0.0.5",
    "babel-jest": "^24.9.0",
    "eslint": "^6.5.1",
    "jest": "^24.9.0",
    "metro-react-native-babel-preset": "^0.56.0",
    "react-test-renderer": "16.9.0"
  },
  "jest": {
    "preset": "react-native"
  }
}

```

### Acceder a la carpeta 
```
/ios
```

### Introducor el comando
```
pod install
```

### Regresar a la carpeta origen y ejecutar
```
npx react-native link
```

### Abrir Xcode y eliminar las fuentes duplicadas en:
```
-> Copy bundle resources
```


### Inicializar emulador ios especifico 
```
npx react-native run-ios --simulator="iPhone 6s"
```

### Cargar registro ANDROID
```
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/tools
  export PATH=$PATH:$ANDROID_HOME/tools/bin
  export PATH=$PATH:$ANDROID_HOME/platform-tools
```
