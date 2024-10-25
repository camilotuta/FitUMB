
package Logica;

import jakarta.persistence.Entity;
import java.util.Date;

@Entity
public class Usuario extends Persona {
    private String Nombre_Usuario;
    private String Contraseña;
    private String Rol;

    public Usuario() {
    }

    public Usuario(String Nombre_Usuario, String Contraseña, String Rol,int Id, String Nombre, long Cedula, long Telefono, Date Fecha_Nacimiento, float Peso, float Altura, String Sexo, String Correo) {
        super(Id,Nombre, Cedula, Telefono, Fecha_Nacimiento, Peso, Altura, Sexo, Correo);
        this.Nombre_Usuario = Nombre_Usuario;
        this.Contraseña = Contraseña;
        this.Rol = Rol;
    }

    
    
}
