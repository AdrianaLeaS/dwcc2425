
# Exercicio de Validacións de Formulario con HTML5 e JavaScript

Neste exercicio, o teu obxectivo é crear un formulario funcional e implementar validacións usando características de HTML5 e JavaScript. Segue as instrucións abaixo e desenvolve o código necesario.


## **Requisitos de Validación**

1. **Nome (Campo Obrigatorio)**:
   - O campo debe ser obrigatorio.
   - O usuario debe introducir texto válido. Se non o fai, mostra unha mensaxe personalizada.

2. **Correo Electrónico**:
   - O campo debe ser obrigatorio e seguir o formato de correo electrónico válido (exemplo: usuario@dominio.com).
   - Usa o tipo de campo axeitado de HTML5 e engade unha validación personalizada con JavaScript.

3. **Contrasinal**:
   - O campo debe ter un mínimo de 8 caracteres.
   - Usa o atributo de expresión regular de HTML5 para establecer o requisito de lonxitude mínima.

4. **Idade**:
   - O campo debe aceptar números entre 18 e 99 anos.
   - Usa unha combinación de atributos de HTML5 e JavaScript para asegurar que o valor estea dentro do rango.

5. **Código Postal**:
   - O código debe ter 5 díxitos exactos (exemplo: 12345).
   - Usa o atributo de expresión regular e validacións en JavaScript para garantir que se cumpra o formato.

6. **Xénero**:
   - O usuario debe seleccionar unha das opcións dispoñibles (masculino, feminino ou outro).
   - Usa unha validación personalizada para asegurarte de que se seleccionou unha opción válida.

7. **Termos e Condicións**:
   - O usuario debe marcar unha caixa de verificación indicando que acepta os termos.

8. **Mensaxes de Erro Personalizadas**:
   - Engade mensaxes de erro personalizadas para cada campo usando o método `setCustomValidity()` de JavaScript.



## **Instrucións**

### **HTML**
- Crea unha estrutura de formulario con os campos descritos anteriormente.
- Asegúrate de engadir as validacións de HTML5.

### **JavaScript**
1. **Engade Eventos**:
   - Usa o evento `input` para limpar as mensaxes de erro personalizadas cando o usuario empeza a escribir.
   - Usa o evento `submit` para validar o formulario antes de envialo.

2. **Mensaxes de Erro**:
   - Define mensaxes personalizadas para cada campo.
   - Usa o método `setCustomValidity()` para establecer estas mensaxes cando un campo non sexa válido.

3. **Limpando Validacións**:
   - Implementa unha función que limpe todas as mensaxes de erro (`setCustomValidity("")`) de todos os campos do formulario.

4. **Validación Adicional**:
   - No caso de campos como idade ou código postal, verifica que os valores sexan válidos usando JavaScript.



## **Tarefas do Alumno**

1. Implementa a estrutura de formulario en HTML.Engade as validacións de HTML5 nos atributos correspondentes.
2. Escribe o código JavaScript para validar os campos usando os eventos `input` e `submit`.
3. Define unha función para limpar as mensaxes de erro antes de aplicar validacións.
4. Proba o formulario para asegurarte de que se comporta como se espera.


## **Entregables**

1. Código HTML do formulario.
2. Ficheiro JavaScript cunha implementación funcional das validacións.
 
 