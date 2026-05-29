package com.paulo.ToDoList.Repository;

import com.paulo.ToDoList.Entity.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {

    List<Tarefa> findByIdUsuario(Long idUsuario);

}
