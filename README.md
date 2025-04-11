# 🏋️‍♂️ Exercise Explorer

Descubre y guarda tus ejercicios favoritos con esta aplicación dinámica, responsiva y conectada a una API de ejercicios en tiempo real. Diseñada para ayudarte a encontrar rutinas según tus intereses, y mantenerlas siempre a la mano con solo un clic.

---

## 📌 Descripción del Proyecto

**Exercise Explorer** es una aplicación web que permite a los usuarios buscar ejercicios físicos por nombre o tipo, visualizar detalles como instrucciones y nivel de dificultad, y guardar sus favoritos en el almacenamiento local del navegador para consultarlos más adelante. El objetivo es brindar una experiencia útil, responsiva y sencilla para quienes buscan motivación y guía en su rutina fitness.

---

## 🚀 Funcionalidades Clave

### 1. 🔌 **Selección del API**
- **API utilizada:** [API Ninjas - Exercises](https://www.api-ninjas.com/api/exercises)
- Se implementó el consumo de datos utilizando `fetch()` con autenticación por API Key.
- La información recuperada incluye: nombre del ejercicio, grupo muscular, tipo, dificultad e instrucciones.

### 2. 💾 **Almacenamiento Local**
- Los usuarios pueden guardar ejercicios seleccionados.
- La información se almacena en `LocalStorage`.
- Se evita duplicación: cada ejercicio puede guardarse solo una vez.
- Se puede visualizar y eliminar cada ejercicio desde una vista dedicada.

### 3. 📱 **Interfaz Responsiva**
- Diseño adaptado para **desktop, tablets y dispositivos móviles**.
- Estilo limpio y moderno con tarjetas de presentación para cada ejercicio.
- Botones de interacción claros y bien distribuidos para una experiencia fluida.

### 4. ⚙️ **Funcionalidad Dinámica**
- Manipulación del DOM para mostrar los ejercicios de forma dinámica.
- Interacciones con botones: guardar, eliminar, mostrar información.
- Paginación o scroll dinámico para la carga de múltiples resultados (si se implementa).

---

## 🛠️ ¿Cómo usar esta aplicación?

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/exercise-explorer.git
cd exercise-explorer
