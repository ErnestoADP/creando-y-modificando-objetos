function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;

};

function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;

    /**Get */
    Object.defineProperty(this, 'nombre', {
        get: function() {
            return nombre;
        }
    });
    Object.defineProperty(this, 'edad', {
        get: function() {
            return edad;
        }
    });
    Object.defineProperty(this, 'rut', {
        get: function() {
            return rut;
        }
    });
    Object.defineProperty(this, 'diagnostico', {
        get: function() {
            return diagnostico;
        }
    });

    /**Set */
    Object.defineProperty(this, 'setNombre', {
        set: function(nombre) {
            nombre = nombre;
        }
    });
    Object.defineProperty(this, 'setEdad', {
        set: function(edad) {
            edad = edad;
        }
    });
    Object.defineProperty(this, 'setRut', {
        set: function(rut) {
            rut = rut;
        }
    });
    Object.defineProperty(this, 'setDiagnostico', {
        set: function(diagnostico) {
            diagnostico = diagnostico;
        }
    });
}
Consultorio.prototype.buscarPaciente = function(nombreValue) {
    this.pacientes.find(function(paciente) {
        if (paciente.nombre === nombreValue) {
            console.log("Nombre: " + paciente.nombre + " edad: " + paciente.edad + " rut: " + paciente.rut + " diagnostico: " + paciente.diagnostico)
        }

    });

}

Consultorio.prototype.mostrarDatos = function() {
    this.pacientes.forEach(function(element) {
        console.log("Nombre: " + element.nombre + " edad:" + element.edad + " rut:" + element.rut + " diagnostico:" + element.diagnostico)
    });

}

const paciente1 = new Paciente('Ernesto', 29, '18.083.565-8', 'AAA');
const paciente2 = new Paciente('Helena', 1, '27.083.565-8', 'BBB');
const consultorio = new Consultorio('Consultorio', [paciente1, paciente2]);

consultorio.mostrarDatos();
consultorio.buscarPaciente('Helena');