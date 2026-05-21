package com.paulo.ToDoList.Dtos.Tarefa;

public record ResponseTarefa(
        Long id,
        String titulo,
        String status
) {
}
