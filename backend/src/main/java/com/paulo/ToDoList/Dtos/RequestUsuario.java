package com.paulo.ToDoList.Dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RequestUsuario(

        @NotBlank(message = "Nome não pode ser vazio")
        String nome,

        @NotBlank(message = "Email não pode ser vazio")
        @Email
        String email,

        @NotBlank(message = "Senha não pode ser vazio")
        String password
) {
}
