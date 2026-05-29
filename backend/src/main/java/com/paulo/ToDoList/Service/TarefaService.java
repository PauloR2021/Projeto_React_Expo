package com.paulo.ToDoList.Service;

import com.paulo.ToDoList.Dtos.Tarefa.RequestTarefa;
import com.paulo.ToDoList.Dtos.Tarefa.ResponseTarefa;
import com.paulo.ToDoList.Entity.Tarefa;

import com.paulo.ToDoList.Entity.Usuario;
import com.paulo.ToDoList.Repository.TarefaRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefaService {

    private final TarefaRepository tarefaRepository;

    public TarefaService(TarefaRepository tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }

    @Transactional
    public ResponseTarefa create (RequestTarefa request) {
        Usuario usuario = (Usuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Tarefa tarefa = new Tarefa();
        tarefa.setIdUsuario(usuario.getId());
        tarefa.setNome(usuario.getNome());
        tarefa.setTitulo(request.titulo());
        tarefa.setStatus(request.status());

        Tarefa newTarefa = tarefaRepository.save(tarefa);

        return toResponse(newTarefa);
    }

    public List<ResponseTarefa> findByTarefas(Long idUsuario) {
        return tarefaRepository.findByIdUsuario(idUsuario)
                .stream()
                .map(this::toResponse)
                .toList();

    }



    private ResponseTarefa toResponse (Tarefa tarefa) {
        return new ResponseTarefa(
                tarefa.getId(),
                tarefa.getTitulo(),
                tarefa.getStatus()
        );
    }
}
