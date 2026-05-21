package com.paulo.ToDoList.Repository;

import com.paulo.ToDoList.Entity.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
