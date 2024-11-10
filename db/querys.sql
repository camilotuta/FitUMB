-- -- Crear tablas
-- -- Tabla de Objetivos
-- CREATE TABLE Objetivos (
--     id_objetivo INTEGER PRIMARY KEY AUTOINCREMENT,
--     nombre TEXT NOT NULL
-- );
-- -- Tabla de Usuarios
-- CREATE TABLE Usuarios (
--     id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
--     nombre TEXT NOT NULL,
--     edad INTEGER,
--     peso REAL,
--     altura REAL,
--     objetivo_id INTEGER,
--     email TEXT UNIQUE,
--     password TEXT,
--     fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (objetivo_id) REFERENCES Objetivos(id_objetivo)
-- );
-- -- Tabla de Rutinas
-- CREATE TABLE Rutinas (
--     id_rutina INTEGER PRIMARY KEY AUTOINCREMENT,
--     nombre TEXT NOT NULL,
--     objetivo_id INTEGER,
--     descripcion TEXT,
--     nivel_dificultad TEXT,
--     duracion_semanal INTEGER,
--     FOREIGN KEY (objetivo_id) REFERENCES Objetivos(id_objetivo)
-- );
-- -- Tabla de Ejercicios
-- CREATE TABLE Ejercicios (
--     id_ejercicio INTEGER PRIMARY KEY AUTOINCREMENT,
--     nombre TEXT NOT NULL,
--     descripcion TEXT,
--     tipo TEXT,
--     duracion REAL,
--     rutinas_id INTEGER,
--     FOREIGN KEY (rutinas_id) REFERENCES Rutinas(id_rutina)
-- );
-- -- Tabla de Planes de Alimentación
-- CREATE TABLE PlanesDeAlimentacion (
--     id_plan INTEGER PRIMARY KEY AUTOINCREMENT,
--     nombre TEXT NOT NULL,
--     objetivo_id INTEGER,
--     descripcion TEXT,
--     FOREIGN KEY (objetivo_id) REFERENCES Objetivos(id_objetivo)
-- );
-- -- Tabla de Dietas
-- CREATE TABLE Dietas (
--     id_dieta INTEGER PRIMARY KEY AUTOINCREMENT,
--     plan_id INTEGER,
--     dia TEXT,
--     comida TEXT,
--     descripcion TEXT,
--     FOREIGN KEY (plan_id) REFERENCES PlanesDeAlimentacion(id_plan)
-- );
-- -- Insertar Objetivos
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Perder peso');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Ganar masa muscular');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Tonificar');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Mejorar resistencia cardiovascular');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Aumentar fuerza');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Mejorar flexibilidad');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Rehabilitación');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Definir abdomen');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Reducir estrés');
-- INSERT INTO Objetivos (nombre)
-- VALUES ('Aumentar energía general');
-- -- Insertar Usuarios
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'Carlos Pérez',
--         28,
--         85.5,
--         1.75,
--         1,
--         'carlos@example.com',
--         'hashpassword1'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'Ana Martínez',
--         34,
--         58.2,
--         1.62,
--         2,
--         'ana@example.com',
--         'hashpassword2'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'Luis Gómez',
--         25,
--         70.1,
--         1.80,
--         3,
--         'luis@example.com',
--         'hashpassword3'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'Sara López',
--         31,
--         62.5,
--         1.68,
--         4,
--         'sara@example.com',
--         'hashpassword4'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'Pedro Ruiz',
--         40,
--         92.0,
--         1.72,
--         5,
--         'pedro@example.com',
--         'hashpassword5'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'Lucía Fernández',
--         29,
--         60.3,
--         1.65,
--         6,
--         'lucia@example.com',
--         'hashpassword6'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'Juan Pérez',
--         36,
--         79.0,
--         1.77,
--         7,
--         'juan@example.com',
--         'hashpassword7'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'María González',
--         26,
--         55.5,
--         1.63,
--         8,
--         'maria@example.com',
--         'hashpassword8'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'David Sánchez',
--         33,
--         88.0,
--         1.80,
--         9,
--         'david@example.com',
--         'hashpassword9'
--     );
-- INSERT INTO Usuarios (
--         nombre,
--         edad,
--         peso,
--         altura,
--         objetivo_id,
--         email,
--         password
--     )
-- VALUES (
--         'Isabel Rodríguez',
--         30,
--         65.0,
--         1.70,
--         10,
--         'isabel@example.com',
--         'hashpassword10'
--     );
-- -- Insertar Rutinas
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina para perder peso',
--         1,
--         'Una rutina que combina cardio y entrenamiento de fuerza.',
--         'Intermedio',
--         5
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina para ganar masa muscular',
--         2,
--         'Enfocada en el trabajo de fuerza para aumentar músculo.',
--         'Avanzado',
--         4
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina para tonificar',
--         3,
--         'Trabajo con pesas y cardio para lograr un cuerpo más tonificado.',
--         'Intermedio',
--         5
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina de resistencia cardiovascular',
--         4,
--         'Enfocada en mejorar la resistencia con cardio constante.',
--         'Principiante',
--         3
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina para aumentar fuerza',
--         5,
--         'Programa de entrenamiento con pesas para aumentar fuerza general.',
--         'Avanzado',
--         4
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina de flexibilidad',
--         6,
--         'Combinación de estiramientos y yoga para mejorar la flexibilidad.',
--         'Principiante',
--         4
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina para rehabilitación',
--         7,
--         'Rutina para recuperación de lesiones o sobrecarga muscular.',
--         'Baja',
--         3
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina para definir abdomen',
--         8,
--         'Entrenamiento enfocado en abdominales y quema de grasa abdominal.',
--         'Intermedio',
--         5
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina para reducir estrés',
--         9,
--         'Ejercicios relajantes y de bajo impacto para reducir el estrés.',
--         'Baja',
--         3
--     );
-- INSERT INTO Rutinas (
--         nombre,
--         objetivo_id,
--         descripcion,
--         nivel_dificultad,
--         duracion_semanal
--     )
-- VALUES (
--         'Rutina para aumentar energía',
--         10,
--         'Entrenamiento moderado para aumentar niveles de energía y vitalidad.',
--         'Intermedio',
--         4
--     );
-- -- Insertar Ejercicios
-- INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
-- VALUES (
--         'Correr',
--         'Cardio para quemar calorías, ideal para la quema de grasa.',
--         'Cardio',
--         30,
--         1
--     );
-- INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
-- VALUES (
--         'Sentadillas',
--         'Ejercicio de fuerza para trabajar piernas y glúteos.',
--         'Fuerza',
--         3,
--         2
--     );
-- INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
-- VALUES (
--         'Flexiones',
--         'Ejercicio de fuerza para el tren superior.',
--         'Fuerza',
--         3,
--         3
--     );
-- INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
-- VALUES (
--         'Bicicleta',
--         'Cardio de bajo impacto, excelente para la quema de calorías.',
--         'Cardio',
--         45,
--         4
--     );
-- INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
-- VALUES (
--         'Pesas muertas',
--         'Ejercicio para trabajar la cadena posterior, como glúteos y espalda baja.',
--         'Fuerza',
--         4,
--         5
--     );
-- INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
-- VALUES (
--         'Estiramiento de piernas',
--         'Ejercicio para mejorar la flexibilidad de las piernas.',
--         'Estiramiento',
--         5,
--         6
--     );
-- INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
-- VALUES (
--         'Elevaciones laterales',
--         'Ejercicio para trabajar los hombros y mejorar la postura.',
--         'Fuerza',
--         3,
--         7
--     );
-- INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
-- VALUES (
--         'Plancha',
--         'Ejercicio de abdominales para fortalecer el core.',
--         'Fuerza',
--         3,7):




INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
VALUES (
        'Plancha lateral',
        'Ejercicio de core para fortalecer el abdomen y los oblicuos.',
        'Fuerza',
        2,
        8
    );
INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
VALUES (
        'Yoga',
        'Serie de posturas para reducir el estrés y mejorar la flexibilidad.',
        'Estiramiento',
        20,
        9
    );
INSERT INTO Ejercicios (nombre, descripcion, tipo, duracion, rutinas_id)
VALUES (
        'Zancadas',
        'Ejercicio de piernas y glúteos para mejorar equilibrio y fuerza.',
        'Fuerza',
        3,
        10
    );




    INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan de alimentación para perder peso',
        1,
        'Dieta baja en calorías con alimentos ricos en fibra y proteínas.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan para ganar masa muscular',
        2,
        'Alta en proteínas y carbohidratos para optimizar el crecimiento muscular.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan de tonificación',
        3,
        'Comidas balanceadas con énfasis en proteínas y grasas saludables.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan de resistencia cardiovascular',
        4,
        'Enfocado en carbohidratos complejos y líquidos isotónicos.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan para aumentar fuerza',
        5,
        'Alto en proteínas y grasas saludables para mantener energía.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan de flexibilidad',
        6,
        'Comidas ligeras y ricas en antioxidantes para reducir inflamación.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan de rehabilitación',
        7,
        'Dieta rica en nutrientes para recuperación y reducir inflamación.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan de definición abdominal',
        8,
        'Dieta baja en carbohidratos y azúcares, alta en proteínas.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan para reducir estrés',
        9,
        'Alimentos ricos en magnesio y antioxidantes para calma y relajación.'
    );
INSERT INTO PlanesDeAlimentacion (nombre, objetivo_id, descripcion)
VALUES (
        'Plan para aumentar energía',
        10,
        'Dieta balanceada en carbohidratos, grasas y proteínas para vitalidad.'
    );



    INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        1,
        'Lunes',
        'Desayuno',
        'Avena con frutas y nueces'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        2,
        'Martes',
        'Almuerzo',
        'Pollo a la parrilla con quinoa y vegetales'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        3,
        'Miércoles',
        'Cena',
        'Ensalada de espinacas con aguacate y atún'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        4,
        'Jueves',
        'Desayuno',
        'Batido de proteínas con frutas y avena'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        5,
        'Viernes',
        'Almuerzo',
        'Salmón a la plancha con puré de batata'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        6,
        'Sábado',
        'Cena',
        'Tortilla de espinacas con pimientos y champiñones'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        7,
        'Domingo',
        'Desayuno',
        'Panqueques de avena y claras de huevo con frutas'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        8,
        'Lunes',
        'Almuerzo',
        'Pechuga de pollo con brócoli al vapor y quinoa'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        9,
        'Martes',
        'Cena',
        'Pasta integral con verduras y pavo'
    );
INSERT INTO Dietas (plan_id, dia, comida, descripcion)
VALUES (
        10,
        'Miércoles',
        'Desayuno',
        'Yogur natural con granola y semillas de chía'
    );