package com.paulo.ToDoList.Dtos.Tarefa;

import jakarta.validation.constraints.NotBlank;

public record RequestTarefa(

        Long idUsuario,
        String nome,
        String titulo,
        String status
) {
}
