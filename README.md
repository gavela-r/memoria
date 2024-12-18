# memoria

Ejecutamos el archivo index.html, para los estilos usamos el archivo style.css y el script de ejecucion es el index.js

El index js contiene las constantes utilizadas, variables, listeners y funciones

Juego de Memoria
Participantes
Adrián Gavela Rodríguez
Luis Alberto Álvarez González

Descripción del Juego
Este juego es un juego de memoria interactivo en el que dos jugadores compiten para emparejar cartas de animales que están ocultas. Los jugadores deben recordar la ubicación de las cartas para hacer coincidencias, y el objetivo es acumular más puntos que el oponente al emparejar las cartas correctamente.

Funcionalidad del Juego
El juego comienza con un formulario en el que los jugadores introducen sus nombres. Una vez que los nombres están registrados, el juego inicia y las cartas (representadas por animales) se desordenan aleatoriamente en la pantalla.

Regla Básica del Juego
Turnos: Los jugadores se turnan para seleccionar dos cartas (animales) y tratar de hacer coincidir los pares.
Selección de Cartas: Los jugadores pueden hacer clic en las cartas para descubrir qué animal están representando. Si las cartas seleccionadas coinciden, el jugador recibe un punto, y las cartas se marcan como "completadas" (no se pueden volver a seleccionar). Si las cartas no coinciden, se ocultan nuevamente y el turno pasa al siguiente jugador.
Animaciones: Cada vez que un jugador selecciona una carta, se activa una animación que muestra un efecto de cambio de color para indicar si la selección fue correcta o incorrecta:
Correcta: Las cartas que coinciden se iluminan en verde.
Incorrecta: Las cartas que no coinciden se iluminan en rojo.
Condición de Victoria: El juego continúa hasta que todas las cartas se han emparejado correctamente. Al final de la partida, el jugador con más puntos (pares de cartas coincidentes) es el ganador.

Interacciones de Jugadores
Turnos de Jugadores: El turno de un jugador se indica en la parte media de la pantalla. El jugador que comienza es elegido aleatoriamente, y el turno se alterna entre los dos jugadores tras cada intento.
Contadores de Puntos: Cada jugador tiene un contador de puntos visible. Los puntos se incrementan cada vez que un jugador empareja correctamente dos cartas.
Opciones del Juego
Reiniciar Partida: Si un jugador quiere reiniciar la partida, puede hacer clic en el botón "Reiniciar", lo que restablecerá el estado del juego y lo devolverá a su punto inicial, sin perder los nombres de los jugadores.
Nueva Partida: También existe la opción de iniciar una nueva partida, lo que mostrará nuevamente el formulario para ingresar los nombres de los jugadores.
Controles del Teclado
Tecla 'r': Reinicia la partida.
Tecla 'n': Inicia una nueva partida.

Objetivo
El objetivo principal del juego es hacer coincidir las cartas. Al final de la partida, el jugador con más pares de cartas acertados será el ganador.

Conclusión
El juego es ideal para mejorar la memoria visual y es una forma divertida de competir con un amigo o familiar. ¡Que comience la partida y que gane el mejor!