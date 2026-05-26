package com.paulo.ToDoList.Dtos.Tarefa;

import jakarta.validation.constraints.NotBlank;

public record RequestTarefa(
        @NotBlank(message = "Necessita de uma Id para Usuário")
        Long idUsuario,
        String nome,
        String titulo,
        String status
) {
}
