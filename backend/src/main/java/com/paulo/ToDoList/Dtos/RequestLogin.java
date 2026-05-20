package com.paulo.ToDoList.Dtos;

import jakarta.validation.constraints.NotBlank;

public record RequestLogin(
        @NotBlank(message = "E-mail não pode ser vazio")
        String email,

        @NotBlank(message ="Senha não pode ser vazio")
        String password
) {
}
