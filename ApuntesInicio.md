Apuntes del inicio de las explicaciones
**1. "Básico"**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Vue.js</title>
  </head>
  <body>
    <div id="app">
      Hola  {{ nombre }}
      <a v-bind:href="url" target="_blank">{{ pagina }}</a>
      <!-- <a :href="url" target="_blank">{{ pagina }}</a> -->
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- <script src="https://unpkg.com/vue"> </script> -->
    <script type="text/javascript">
      let app = new Vue({
        el: '#app',
        data: {
          nombre: 'Rulz',
          url: 'https://google.com',
          pagina: 'Ir a Google'
        }
      });
    </script>
  </body>
</html>
```
**2. "Mostrar u ocultar elemento (manejo de condiciones)"**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Vue.js</title>
  </head>
  <body>
    <div id="app">
      <template v-if="mostrar">
        <h1>Mi Titulo</h1>
        <h2>Mi SubTitulo</h2>
        <a v-if="mostrar" v-bind:href="url" target="_blank">{{ pagina }}</a>
        <!-- <a :href="url" target="_blank">{{ pagina }}</a> -->
      </template>
      <div v-show="mostrar">
        <h1>Mi Titulo</h1>
        <h2>Mi SubTitulo</h2>
        <a v-if="mostrar" v-bind:href="url" target="_blank">{{ pagina }}</a>
        <!-- <a :href="url" target="_blank">{{ pagina }}</a> -->
      </div>
      <div v-show="!mostrar">
        <h1>Mi Titulo</h1>
        <h2>Mi SubTitulo</h2>
        <a v-if="mostrar" v-bind:href="url" target="_blank">{{ pagina }}</a>
        <!-- <a :href="url" target="_blank">{{ pagina }}</a> -->
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- <script src="https://unpkg.com/vue"> </script> -->
    <script type="text/javascript">
      let app = new Vue({
        el: '#app',
        data: {
          nombre: 'Rulz',
          url: 'https://google.com',
          pagina: 'Ir a Google',
          mostrar: true
        }
      });
    </script>
  </body>
</html>
```
**3. "Filtros"**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Vue.js</title>
  </head>
  <body>
    <div id="app">
      <h1>{{ titulo | uppercase }}</h1>
      <h2>{{ subtitulo | lowercase | capitalize }}</h2>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- <script src="https://unpkg.com/vue"> </script> -->
    <script type="text/javascript">
      let app = new Vue({
        el: '#app',
        data: {
          titulo: 'Rulz',
          subtitulo: 'https://google.com'
        },
        filters: {
          uppercase: function (str) {
            return str.toUpperCase()
          },
          lowercase: function (str) {
            return str.toLowerCase()
          },
          capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
          },
        }
      });
    </script>
  </body>
</html>
```

**4. "Métodos o funciones (eventos)"**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Vue.js</title>
  </head>
  <body>
    <div id="app">
      <button v-on:click="sumar"> Sumar 1</button>
      <!-- <button @click="sumar"> Sumar 1</button> -->
      <!-- <button @click="contador++"> Sumar 1</button> no deberia existir el metodo en json-->
      <button v-on:click="restar"> Restar 1</button>
      El contador está en {{ contador }}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- <script src="https://unpkg.com/vue"> </script> -->
    <script type="text/javascript">
      let app = new Vue({
        el: '#app',
        data: {
          contador: 0,
        },
        methods: {
          sumar: function () {
            this.contador++
          },
          restar: function () {
            this.contador--
          }
        }
      });
    </script>
  </body>
</html>
```

**5. "Manejo de formulario"**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Vue.js</title>
  </head>
  <body>
    <div id="app">
      <input type="text" name="nombre" placeholder="Ingrese tu nombre"
        v-model="nombre">
      <p>Tu nombre en mayúscula es: {{ nombre }}</p>
      <form v-on:submit.prevent="submit" action="" method="get">
        <h2>¿Cuáles son tus cursos favoritos?</h2>
        <input v-model="cursos" type="checkbox" id="vue" value="vue">
        <label for="vue">Curso de Vue.js</label>
        <input v-model="cursos" type="checkbox" id="seo" value="seo">
        <label for="seo">Curso de SEO</label>
        <input v-model="cursos" type="checkbox" id="react" value="react">
        <label for="react">Curso de React</label>
        <input v-model="cursos" type="checkbox" id="growth" value="growth">
        <label for="growth">Curso de Growth</label>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- <script src="https://unpkg.com/vue"> </script> -->
    <script type="text/javascript">
      let app = new Vue({
        el: '#app',
        data: {
          nombre: '',
          cursos: [],
        },
        filters: {
          uppercase: function (str) {
            return str.toUpperCase();
          }
        },
        methods: {
          submit: function () {
            console.log("se ejecunta el método submit")
            console.log(this.cursos)
          }
        }
      });
    </script>
  </body>
</html>
```

**6. "Listar elementos con Vue.js"**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Vue.js</title>
  </head>
  <body>
    <div id="app">
      <form v-on:submit.prevent="submit" action="" method="get">
        <h2>¿Cuáles son tus cursos favoritos?</h2>
        <template v-for="curso in cursos">
          <input v-model="cursosSeleccionados" type="checkbox"
            v-bind:id="curso.value" v-bind:value="curso.value">
          <label v-bind:for="curso.value">{{ curso.nombre }}</label>
        </template>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- <script src="https://unpkg.com/vue"> </script> -->
    <script type="text/javascript">
      let app = new Vue({
        el: '#app',
        data: {
          nombre: '',
          cursos: [
            {nombre:"Curso de Vue.js", value:"vue"},
            {nombre:"Curso de SEO", value:"seo"},
            {nombre:"Curso de React", value:"react"},
            {nombre:"Curso de Growth", value:"growth"}
          ],
          cursosSeleccionados: [],
        },
        filters: {
          uppercase: function (str) {
            return str.toUpperCase();
          }
        },
        methods: {
          submit: function () {
            console.log("se ejecunta el método submit")
            console.log(this.cursosSeleccionados)
          }
        }
      });
    </script>
  </body>
</html>
```

**7. "Cómo crear componentes con vuejs"**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Vue.js</title>
  </head>
  <body>
    <div id="app">
      <form v-on:submit.prevent="submit" action="" method="get">
        <h2>¿Cuáles son tus cursos favoritos?</h2>
        <template v-for="c in cursos">
          <curso v-bind:curso='c' v-on:checked="selectCurso"></curso>
        </template>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- <script src="https://unpkg.com/vue"> </script> -->
    <script type="text/javascript">
      Vue.component('curso', {
        props: [ 'curso'],
        methods: {
          onchange: function (ev) {
            this.$emit('checked', this.curso.value, ev.target.checked)
          }
        },
        template: `
        <div>
          <input type="checkbox" v-bind:id="curso.value"
          v-bind:value="curso.value" v-on:change="onchange">
          <label v-bind:for="curso.value">{{ curso.nombre }}</label>
        </div>
        `
      })
      let app = new Vue({
        el: '#app',
        data: {
          nombre: '',
          cursos: [
            {nombre:"Curso de Vue.js", value:"vue"},
            {nombre:"Curso de SEO", value:"seo"},
            {nombre:"Curso de React", value:"react"},
            {nombre:"Curso de Growth", value:"growth"}
          ],
          cursosSeleccionados: [],
        },
        filters: {
          uppercase: function (str) {
            return str.toUpperCase();
          }
        },
        methods: {
          submit: function () {
            console.log("se ejecunta el método submit")
            console.log(this.cursosSeleccionados)
          },
          selectCurso: function (curso, checked){
            if (checked) {
              this.cursosSeleccionados.push(curso)
            } else {
              let index = this.cursosSeleccionados.indexOf(curso)
              this.cursosSeleccionados.splice(index, 1)
            }
          }
        }
      });
    </script>
  </body>
</html>
```
