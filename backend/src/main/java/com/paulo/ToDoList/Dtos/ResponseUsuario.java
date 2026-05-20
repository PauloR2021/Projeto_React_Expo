package com.paulo.ToDoList.Dtos;

public record ResponseUsuario(
        Long id,
        String nome,
        String email,
        String password
) {
}
