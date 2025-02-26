### Enunciado para a actividade

**Obxectivo:** Implementar un sistema en JavaScript que modele publicacións como libros e revistas mediante clases e módulos. O HTML correspondente xa está proporcionado.

**Descrición da actividade:**

1. **Estrutura dos ficheiros:**
   Organiza o proxecto na seguinte estrutura:
   ```
   /prc04
   ├── modulos
   │      ├── Publicacion.js
   │      ├── Revista.js
   │      ├── Libro.js
   ├── main.js
   ├── index.html
   ```

2. **Requisitos:**
   - Crear unha clase base chamada `Publicacion` no ficheiro `Publicacion.js` que conteña:
     - Un constructor con os atributos: `titulo`, `autor`, e `anho`.
     - Un método `obtenerInfo()` que devolva unha cadea no formato: "`Título, por Autor (Ano)`".
   
   - Crear unha clase `Revista` no ficheiro `Revista.js` que herde de `Publicacion`:
     - Engadir un novo atributo chamado `edicion`.
     - Sobrescribir o método `obtenerInfo()` para engadir a edición ó final do texto.
   
   - Crear unha clase `Libro` no ficheiro `Libro.js` que herde de `Publicacion`:
     - Engadir un novo atributo chamado `genero`.
     - Sobrescribir o método `obtenerInfo()` para engadir o xénero ó final do texto.

   - No ficheiro `main.js`, realizar o seguinte:
     - Importar as clases `Libro` e `Revista`.
     - Crear un array con varias instancias de libros e revistas.
     - Mostrar a información de cada publicación no contedor `<div id="contenedor">` do ficheiro HTML.

3. **Funcionamento esperado:**
   - Ao abrir o ficheiro `index.html` no navegador, deberás ver unha lista coas publicacións e a súa información.

**Exemplo de saída:**
```plaintext
El Quijote, por Miguel de Cervantes (1605) - Género: Novela
National Geographic, por Varios (2023) - Edición: Enero
```

**Notas adicionais:**
- Asegúrate de usar módulos de JavaScript para organizar as clases en ficheiros separados.
- Usa o evento `DOMContentLoaded` para engadir a información ao DOM.
- O ficheiro `index.html` xa está proporcionado co seguinte contido:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Publicaciones</title>
  <script type="module" src="main.js" defer></script>
</head>
<body>
  <h1>Listado de Publicaciones</h1>
  <div id="contenedor"></div>
</body>
</html>
```
